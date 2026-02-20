<script lang="ts">
  import { base } from '$app/paths';
</script>

<section id="final-cta" class="section" aria-label="Get started">
  <div class="container">
    <div class="panel cta-band fade-up">
      <h2>Make accountability feel collaborative, not exhausting.</h2>
      <p class="muted">Start Together and build a calmer rhythm for everyday commitments.</p>
      <div class="button-row">
        <a class="btn btn-primary" href={`${base}/`}>Start free trial</a>
        <a class="btn btn-tertiary" href="mailto:tandemapp@isaacbarham.com">Talk to support</a>
      </div>
    </div>
  </div>
</section>

<style>
  .cta-band {
    padding: clamp(1.4rem, 4vw, 2.7rem);
    text-align: center;
    background: linear-gradient(130deg, rgba(31, 122, 93, 0.14), rgba(59, 130, 246, 0.16), rgba(255, 255, 255, 0.98));
  }

  h2 {
    font-size: clamp(1.8rem, 4vw, 2.8rem);
  }

  p {
    margin: 0.8rem auto 1.1rem;
    max-width: 56ch;
  }

  .button-row {
    justify-content: center;
  }
</style>
