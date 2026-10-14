<template>
  <div class="color-d-f px-4 py-8 max-w-3xl mx-auto policy">
    <router-link to="/ashglyph" class="text-sm color-d-s hover:hover-color transition-colors">&larr; Ashglyph</router-link>
    <h1 class="text-3xl md:text-4xl font-bold mt-4 mb-2">Ashglyph Privacy Policy</h1>
    <p class="text-sm opacity-70 mb-8">
      Effective date: October 14, 2026<br>
      Developer: Arif Burak Demiray, contact: <a :href="'mailto:' + email" class="underline">{{ email }}</a>
    </p>

    <p>Ashglyph is a single-player game. You do not create an account, and we do not ask for your name, email address or contacts. This policy explains the small amount of data the game handles, why, and the choices you have.</p>

    <h2>What the game collects</h2>
    <div class="overflow-x-auto">
      <table>
        <thead>
          <tr><th>Data</th><th>When</th><th>Why</th><th>Who receives it</th></tr>
        </thead>
        <tbody>
          <tr v-for="row in collected" :key="row[0]">
            <td v-for="cell in row" :key="cell">{{ cell }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>Your IP address reaches the analytics server as part of any internet request. It is used to derive a country for statistics and is not stored with your gameplay data.</p>

    <h2>Data handled by platform services</h2>
    <ul>
      <li><strong>Rewarded ads (Google AdMob).</strong> Ads appear only when you choose to watch one for a reward. Google may collect device identifiers (such as the advertising ID or, on iOS, the IDFA if you allow tracking), IP address and ad interactions, under <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" class="underline">Google's privacy policy</a>. In the EEA, the UK and similar regions, Google's consent form asks you first, and Settings has "Ad privacy options" to change your choice.</li>
      <li><strong>Purchases.</strong> The supporter pack is bought through the App Store or Google Play. We receive only whether the purchase succeeded, never your payment details.</li>
      <li><strong>Game Center and Google Play Games.</strong> Achievements, leaderboard scores and your player name are handled by Apple or Google. The game does not store your player name.</li>
      <li><strong>Cloud save.</strong> When enabled in Settings, your save file (progress, unlocks and settings) is stored in your own iCloud account or Google Play Games saved games so it follows you to other devices.</li>
      <li><strong>Reminders.</strong> Reminders (the daily challenge, and a nudge after a few days away) are scheduled on your device. Nothing leaves the device to schedule them.</li>
      <li><strong>Steam (desktop).</strong> When the game runs through Steam, achievements are reported to the Steam client under Valve's privacy policy.</li>
    </ul>

    <h2>Your choices</h2>
    <ul>
      <li><strong>Gameplay statistics:</strong> in the EEA, the UK and similar regions the game asks before collecting anything. Elsewhere it is on by default. You can turn it off at any time in Settings, "Share gameplay stats".</li>
      <li><strong>Ads:</strong> watching an ad is always optional. On iOS the tracking prompt appears only before your first ad.</li>
      <li><strong>Reminders and cloud save:</strong> both can be switched in Settings.</li>
      <li><strong>Deletion:</strong> email <a :href="'mailto:' + email" class="underline">{{ email }}</a> with the request and we will delete the statistics tied to your app ID. Reinstalling the game also creates a new random ID.</li>
    </ul>

    <h2>Retention and security</h2>
    <p>Statistics are kept for up to 24 months and then deleted or aggregated. All data is sent over encrypted connections (HTTPS).</p>

    <h2>Children</h2>
    <p>Ashglyph is not directed at children under 13 and we do not knowingly collect personal data from them. If you believe a child has sent us data, contact us and we will delete it.</p>

    <h2>Changes</h2>
    <p>If this policy changes, the new version will be posted at this address with a new effective date.</p>
  </div>
</template>

<script>
export default {
  name: 'AshglyphPrivacyPage',
  data() {
    return {
      email: 'ashglyph.games@gmail.com',
      collected: [
        ['Gameplay statistics: bosses fought, wins and deaths, settings changes, boons, ad and purchase outcomes, crash reports', 'When allowed (see Your choices)', 'To balance the bosses and fix crashes', 'Countly, our analytics provider, which processes it on our behalf'],
        ['Device information: operating system, app version, device model, screen size, language, a random app-specific ID created on install', 'With the statistics above', 'To group statistics by device type and count players without knowing who they are', 'Countly, as above'],
        ['Balance settings fetched from the server (remote configuration, including A/B tests)', 'With the statistics above', 'To tune difficulty without an app update', 'Countly, as above']
      ]
    };
  }
};
</script>

<style scoped>
.policy p,
.policy ul {
  font-size: 0.95rem;
  line-height: 1.65;
  opacity: 0.9;
  margin-bottom: 1rem;
}
.policy ul {
  list-style: disc;
  padding-left: 1.25rem;
}
.policy li {
  margin-bottom: 0.5rem;
}
.policy h2 {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 2rem 0 0.75rem;
}
.policy table {
  width: 100%;
  min-width: 560px;
  border-collapse: collapse;
  font-size: 0.85rem;
  margin-bottom: 1rem;
}
.policy th,
.policy td {
  border: 1px solid var(--demiray-color-five);
  padding: 0.5rem 0.6rem;
  text-align: left;
  vertical-align: top;
}
.policy th {
  color: var(--demiray-color-two);
}
</style>
