<script lang="ts">
  import type { Testimonial } from '$lib/data/content';
  import SectionShell from './SectionShell.svelte';

  let { items } = $props<{ items: Testimonial[] }>();
</script>

<SectionShell eyebrow="Testimonials" title="Couples using Tandem report less day-to-day friction">
  <div class="quotes" role="list">
    {#each items as item}
      <figure class="panel quote interactive-card" role="listitem">
        <blockquote>
          <p>“{item.quote}”</p>
        </blockquote>
        <figcaption>
          <strong>{item.name}</strong>
          <span class="muted">{item.relationship}</span>
        </figcaption>
      </figure>
    {/each}
  </div>
</SectionShell>

<style>
  .quotes {
    margin-top: 1.3rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }

  .quote {
    margin: 0;
    padding: 1.1rem;
    background: linear-gradient(175deg, rgba(255, 253, 249, 0.98), rgba(244, 236, 226, 0.98));
  }

  blockquote {
    margin: 0;
  }

  blockquote p {
    color: #334155;
  }

  figcaption {
    margin-top: 0.95rem;
    display: grid;
    gap: 0.2rem;
  }

  @media (max-width: 980px) {
    .quotes {
      grid-template-columns: 1fr;
    }
  }
</style>
