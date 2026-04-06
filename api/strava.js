const STRAVA_API = 'https://www.strava.com/api/v3';
const TOKEN_URL = 'https://www.strava.com/oauth/token';

async function getAccessToken() {
  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      refresh_token: process.env.STRAVA_REFRESH_TOKEN,
      grant_type: 'refresh_token'
    })
  });

  if (!res.ok) {
    throw new Error(`Token refresh failed: ${res.status}`);
  }

  const data = await res.json();
  return data.access_token;
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');

  try {
    const token = await getAccessToken();
    const headers = { Authorization: `Bearer ${token}` };

    const [athleteRes, statsRes, activitiesRes] = await Promise.all([
      fetch(`${STRAVA_API}/athlete`, { headers }),
      fetch(`${STRAVA_API}/athletes/${process.env.STRAVA_ATHLETE_ID}/stats`, { headers }),
      fetch(`${STRAVA_API}/athlete/activities?per_page=10`, { headers })
    ]);

    const athlete = athleteRes.ok ? await athleteRes.json() : null;
    const stats = statsRes.ok ? await statsRes.json() : null;
    const activities = activitiesRes.ok ? await activitiesRes.json() : [];

    res.status(200).json({
      athlete: athlete ? {
        name: `${athlete.firstname} ${athlete.lastname}`,
        city: athlete.city,
        country: athlete.country,
        profile: athlete.profile
      } : null,
      stats: stats ? {
        all_ride_totals: stats.all_ride_totals,
        all_run_totals: stats.all_run_totals,
        all_swim_totals: stats.all_swim_totals,
        ytd_ride_totals: stats.ytd_ride_totals,
        ytd_swim_totals: stats.ytd_swim_totals,
        recent_ride_totals: stats.recent_ride_totals
      } : null,
      activities: activities.map(a => ({
        id: a.id,
        name: a.name,
        type: a.type,
        distance: a.distance,
        moving_time: a.moving_time,
        elapsed_time: a.elapsed_time,
        total_elevation_gain: a.total_elevation_gain,
        start_date: a.start_date,
        average_speed: a.average_speed,
        max_speed: a.max_speed,
        polyline: a.map?.summary_polyline
      }))
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
