<script>
  export let moon;
  export let sun;
  export let theme = 'auto'; // 'auto' | 'greenhouse' | 'teashop' | 'citrus' | 'togfarms';

  const themes = ['auto', 'greenhouse', 'teashop', 'citrus', 'togfarms'];

  function resolveTheme() {
    if (theme !== 'auto') return theme;

    // Simple auto rule: weekend = citrus, weekdays = greenhouse
    const day = new Date().getDay();
    if (day === 0 || day === 6) return 'citrus';
    return 'greenhouse';
  }

  $: activeTheme = resolveTheme();
  $: bannerImage = `/static/${activeTheme}/banner.jpg`;
</script>

<section class="banner">
  <div class="image" style={`background-image: url('${bannerImage}')`}></div>

  <div class="overlay">
    <div class="left">
      <h1>LunarPlanner</h1>
      <p>Mapping your days through lunar cycles</p>

      <div class="theme-selector">
        {#each themes as t}
          <button
            class:selected={t === theme}
            on:click={() => (theme = t)}
          >
            {t === 'auto' ? 'Auto' : t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        {/each}
      </div>
    </div>

    <div class="right">
      <div class="row">
        <span>Moon:</span>
        <strong>{moon?.name} (Day {moon?.day})</strong>
      </div>

      <div class="row">
        <span>Phase:</span>
        <strong>{moon?.phase}</strong>
      </div>

      <div class="row">
        <span>Moonrise / Moonset:</span>
        <strong>{moon?.moonrise} / {moon?.moonset}</strong>
      </div>

      <div class="row">
        <span>Sunrise / Sunset:</span>
        <strong>{sun?.sunrise} / {sun?.sunset}</strong>
      </div>
    </div>
  </div>
</section>

<style>
  .banner {
    border-radius: 1rem;
    overflow: hidden;
    background: var(--panel);
    margin-bottom: 1.5rem;
  }

  .image {
    height: 180px;
    background-size: cover;
    background-position: center;
    filter: brightness(0.7);
  }

  .overlay {
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem 1.25rem;
    gap: 1.5rem;
  }

  .left h1 {
    margin: 0;
    font-size: 1.4rem;
  }

  .left p {
    margin: 0.25rem 0 0.75rem;
    color: var(--muted);
    font-size: 0.9rem;
  }

  .theme-selector {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .theme-selector button {
    border: none;
    border-radius: 999px;
    padding: 0.35rem 0.8rem;
    font-size: 0.8rem;
    background: #1f2438;
    color: var(--muted);
    cursor: pointer;
  }

  .theme-selector button.selected {
    background: var(--accent);
    color: #1a1a1a;
    font-weight: 600;
  }

  .right {
    font-size: 0.85rem;
    min-width: 220px;
  }

  .row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.25rem;
  }

  .row span {
    color: var(--muted);
  }
</style>
