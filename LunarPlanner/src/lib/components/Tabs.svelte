<script>
  const tabs = ['Schedule', 'Habits', 'Todos', 'Strategies', 'Notes', 'Meaning', 'TogFarms'];
  export let active = 'Schedule';
  export let onChange = (t) => {};
</script>

<nav class="tabs">
  {#each tabs as t}
    <button
      class:selected={t === active}
      on:click={() => onChange(t)}
    >
      {t}
    </button>
  {/each}
</nav>

<style>
  .tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .tabs button {
    border: none;
    border-radius: 999px;
    padding: 0.4rem 0.9rem;
    font-size: 0.85rem;
    background: #1f2438;
    color: var(--muted);
    cursor: pointer;
  }

  .tabs button.selected {
    background: var(--accent);
    color: #1a1a1a;
    font-weight: 600;
  }
</style>
