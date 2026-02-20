<script lang="ts">
  import type { Feature } from '$lib/data/content';
  import SectionShell from './SectionShell.svelte';

  let { items } = $props<{ items: Feature[] }>();
</script>

<SectionShell
  id="features"
  eyebrow="Feature Set"
  title="Purpose-built for shared accountability in day-to-day partnership"
>
  <div class="cards" role="list">
    {#each items as item}
      <article class="panel card interactive-card" role="listitem">
        <p class="stat">{item.stat}</p>
        <h3>{item.title}</h3>
        <p class="muted">{item.body}</p>
      </article>
    {/each}
  </div>
</SectionShell>

<style>
  .cards {
    margin-top: 1.3rem;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .card {
    padding: 1.2rem;
    background: linear-gradient(180deg, rgba(255, 253, 249, 0.98), rgba(248, 240, 231, 0.98));
  }

  .stat {
    margin: 0;
    color: #2a6b53;
    font-weight: 800;
    font-size: 0.8rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  h3 {
    margin: 0.6rem 0;
    font-size: 1.2rem;
  }

  @media (max-width: 880px) {
    .cards {
      grid-template-columns: 1fr;
    }
  }
</style>
