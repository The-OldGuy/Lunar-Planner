<script lang="ts">
  import Banner from '$components/Banner.svelte';
  import Tabs from '$components/Tabs.svelte';
  import { getMoonData, getSunData } from '$utils/api';

  let moon: any = null;
  let sun: any = null;
  let theme = 'auto';
  let activeTab = 'Schedule';

  const panels = {
    Schedule: 'Daily blocks, focus windows, and energy‑aware planning.',
    Habits: 'Track rituals, anchors, and small repeatable actions.',
    Todos: 'Task list aligned with today’s lunar tone.',
    Strategies: 'Long‑arc thinking, business moves, and experiments.',
    Notes: 'Freeform journaling, reflections, and observations.',
    Meaning: 'Daily meaning, archetypes, and symbolic cues.',
    TogFarms: 'Farm, tea, and TogFarms‑specific planning.'
  };

  async function loadData() {
    moon = await getMoonData();
    sun = await getSunData();
  }

  loadData();
</script>

<main>
  <Banner {moon} {sun} bind:theme />

  <Tabs bind:active={activeTab} onChange={(t) => (activeTab = t)} />

  <section class="panel">
    <h2>{activeTab}</h2>
    <p>{panels[activeTab]}</p>
    <p class="hint">
      (This is a placeholder panel. Once deployment is stable, we’ll wire each tab to Supabase tables.)
    </p>
  </section>

  <section class="about">
    <h3>About LunarPlanner</h3>
    <p>
      LunarPlanner is a daily rhythm tool designed to align your planning with the natural cycles of the moon.
      It blends lunar timing, sun cycles, and Treasure Mapping themes to create a meaningful daily identity that
      shifts with each new day.
    </p>
    <p><strong>Tagline:</strong> Mapping your days through lunar cycles.</p>
    <p>
      LunarPlanner adapts automatically based on moon day, moon phase, day of the week, and your personal Treasure
      Mapping rules—while still giving you the option to override the theme whenever you want. It’s built for clarity,
      ritual, and intentional living.
    </p>
  </section>
</main>

<style>
  .panel {
    background: var(--panel);
    border-radius: 1rem;
    padding: 1rem 1.25rem;
    margin-bottom: 1.5rem;
  }

  .panel h2 {
    margin-top: 0;
    font-size: 1.1rem;
  }

  .hint {
    font-size: 0.8rem;
    color: var(--muted);
  }

  .about {
    background: #101322;
    border-radius: 1rem;
    padding: 1rem 1.25rem;
    font-size: 0.9rem;
    color: var(--muted);
  }

  .about h3 {
    margin-top: 0;
    color: var(--text);
  }
</style>
