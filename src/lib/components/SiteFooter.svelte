<script lang="ts">
  import { base } from '$app/paths';
</script>

<footer class="section footer" aria-label="Footer">
  <div class="container panel footer-panel fade-up">
    <div>
      <p class="eyebrow">Tandem</p>
      <p class="muted">Shared tasks, visibility, and practical communication for couples.</p>
    </div>

    <nav aria-label="Product links">
      <h2>Product</h2>
      <a class="link-animated" href="#features">Features</a>
      <a class="link-animated" href="#how-it-works">How it works</a>
      <a class="link-animated" href="#final-cta">Pricing</a>
    </nav>

    <nav aria-label="Support links">
      <h2>Support</h2>
      <a class="link-animated" href="mailto:tandemapp@isaacbarham.com">Help center</a>
      <a class="link-animated" href="mailto:tandemapp@isaacbarham.com">Contact</a>
      <a class="link-animated" href="mailto:tandemapp@isaacbarham.com">Status</a>
    </nav>

    <nav aria-label="Legal links">
      <h2>Legal</h2>
      <a class="link-animated" href={`${base}/privacy`}>Privacy</a>
      <a class="link-animated" href={`${base}/terms`}>Terms</a>
      <a class="link-animated" href={`${base}/privacy#cookies`}>Cookies</a>
    </nav>
  </div>
</footer>

<style>
  .footer {
    padding-top: 1.8rem;
  }

  .footer-panel {
    padding: 1.3rem;
    display: grid;
    grid-template-columns: 1.35fr repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }

  nav {
    display: grid;
    align-content: start;
    gap: 0.45rem;
  }

  nav h2 {
    font-family: var(--font-body);
    margin: 0;
    font-size: 0.86rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #64748b;
  }

  nav a {
    text-decoration: none;
    color: var(--text-soft);
  }

  @media (max-width: 980px) {
    .footer-panel {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 620px) {
    .footer-panel {
      grid-template-columns: 1fr;
    }
  }
</style>
