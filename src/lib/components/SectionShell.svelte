<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    id,
    eyebrow,
    title,
    intro,
    ariaLabel,
    children
  } = $props<{
    id?: string;
    eyebrow?: string;
    title?: string;
    intro?: string;
    ariaLabel?: string;
    children?: Snippet;
  }>();
</script>

<section id={id} class="section fade-up" aria-label={ariaLabel}>
  <div class="container">
    {#if eyebrow}
      <span class="eyebrow">{eyebrow}</span>
    {/if}
    {#if title}
      <h2>{title}</h2>
    {/if}
    {#if intro}
      <p class="intro muted">{intro}</p>
    {/if}
    {@render children?.()}
  </div>
</section>

<style>
  .intro {
    margin-top: 0.95rem;
    max-width: 64ch;
    font-size: 1.05rem;
  }
</style>
