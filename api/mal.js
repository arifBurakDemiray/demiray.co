const MAL_BASE = 'https://myanimelist.net';
const USERNAME = 'euxinos';
const HEADERS = { 'User-Agent': 'Mozilla/5.0 (compatible; demiray.co/1.0)' };

async function fetchList(type) {
  const path = type === 'anime' ? 'animelist' : 'mangalist';
  const res = await fetch(
    `${MAL_BASE}/${path}/${USERNAME}/load.json?status=7&offset=0`,
    { headers: HEADERS }
  );
  if (!res.ok) return [];
  return res.json();
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=1200');

  try {
    const [animeRaw, mangaRaw] = await Promise.all([
      fetchList('anime'),
      fetchList('manga')
    ]);

    const mapAnime = (a) => ({
      mal_id: a.anime_id,
      title: a.anime_title,
      image: a.anime_image_path,
      url: `${MAL_BASE}/anime/${a.anime_id}`,
      score: a.score,
      status: a.status,
      episodes_watched: a.num_watched_episodes,
      total_episodes: a.anime_num_episodes,
      type: a.anime_media_type_string
    });

    const mapManga = (m) => ({
      mal_id: m.manga_id,
      title: m.manga_title,
      image: m.manga_image_path,
      url: `${MAL_BASE}/manga/${m.manga_id}`,
      score: m.score,
      status: m.status,
      chapters_read: m.num_read_chapters,
      total_chapters: m.manga_num_chapters,
      type: m.manga_media_type_string
    });

    res.status(200).json({
      anime: animeRaw.map(mapAnime),
      manga: mangaRaw.map(mapManga)
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
