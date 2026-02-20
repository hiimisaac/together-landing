<script lang="ts">
  import type { Step } from '$lib/data/content';
  import SectionShell from './SectionShell.svelte';

  let { items } = $props<{ items: Step[] }>();
</script>

<SectionShell id="how-it-works" eyebrow="How It Works" title="Three steps to cleaner follow-through">
  <ol class="steps">
    {#each items as item, index}
      <li class="panel step interactive-card">
        <p class="count">0{index + 1}</p>
        <h3>{item.title}</h3>
        <p class="muted">{item.body}</p>
      </li>
    {/each}
  </ol>
</SectionShell>

<style>
  .steps {
    margin: 1.3rem 0 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .step {
    padding: 1.15rem;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, rgba(255, 253, 249, 0.98), rgba(245, 237, 227, 0.98));
  }

  .step::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    border: 1px dashed rgba(31, 122, 93, 0.24);
    opacity: 0;
    transition: opacity 180ms ease;
    pointer-events: none;
  }

  .step:hover::before {
    opacity: 1;
  }

  .step::after {
    content: '';
    position: absolute;
    inset: auto -35% -45% auto;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(31, 122, 93, 0.14), transparent 72%);
    pointer-events: none;
  }

  .count {
    margin: 0;
    color: var(--brand);
    font-weight: 800;
    font-size: 0.84rem;
    letter-spacing: 0.08em;
  }

  h3 {
    margin: 0.55rem 0 0.45rem;
    font-size: 1.2rem;
  }

  @media (max-width: 980px) {
    .steps {
      grid-template-columns: 1fr;
    }
  }
</style>
