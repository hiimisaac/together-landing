<svelte:head>
  <title>Support | Tandem</title>
  <meta
    name="description"
    content="Tandem support information, contact details, and quick help for account, billing, and privacy requests."
  />
</svelte:head>

<script lang="ts">
  import { base } from '$app/paths';
</script>

<main class="legal-page section">
  <div class="container legal-shell panel fade-up">
    <header class="legal-header">
      <p class="eyebrow">Support</p>
      <h1>Need help with Tandem?</h1>
      <p class="muted">
        For support, account, billing, or privacy questions, contact
        <a href="mailto:tandemapp@isaacbarham.com">tandemapp@isaacbarham.com</a>.
      </p>
    </header>

    <section id="contact">
      <h2>Contact</h2>
      <ul>
        <li>Email: <a href="mailto:tandemapp@isaacbarham.com">tandemapp@isaacbarham.com</a></li>
        <li>Response target: within 2 business days</li>
      </ul>
    </section>

    <section id="account">
      <h2>Common Requests</h2>
      <ul>
        <li>Account access and login issues</li>
        <li>Data deletion/export requests</li>
        <li>Subscription and billing questions</li>
        <li>Bug reports and feature feedback</li>
      </ul>
    </section>

    <section id="privacy">
      <h2>Privacy and Legal</h2>
      <p>
        For privacy details, review the <a href={`${base}/privacy`}>Privacy Policy</a>. For service terms,
        see <a href={`${base}/terms`}>Terms and Conditions</a>.
      </p>
    </section>
  </div>
</main>

<style>
  .legal-shell {
    padding: clamp(1.2rem, 2vw, 2rem);
    display: grid;
    gap: 1.5rem;
  }

  .legal-header {
    display: grid;
    gap: 0.7rem;
    border-bottom: 1px solid rgba(71, 85, 105, 0.2);
    padding-bottom: 1rem;
  }

  h1 {
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.02;
  }

  h2 {
    font-size: 1.26rem;
    margin-bottom: 0.55rem;
  }

  section {
    display: grid;
    gap: 0.45rem;
  }

  p,
  li {
    color: var(--text-soft);
  }

  ul {
    margin: 0;
    padding-left: 1.15rem;
    display: grid;
    gap: 0.35rem;
  }
</style>
