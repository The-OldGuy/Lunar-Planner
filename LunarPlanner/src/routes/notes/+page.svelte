<script>
    export let data;
    const notes = data.notes;
</script>

<h1>Notes</h1>

{#if notes.length === 0}
    <p>No notes yet.</p>
{:else}
    <ul>
        {#each notes as note}
            <li>{note.title}</li>
        {/each}
    </ul>
{/if}
