<script lang="ts">
  import SectionShell from './SectionShell.svelte';
</script>

<SectionShell
  id="trust"
  eyebrow="Trust and Safety"
  title="Built for private coordination and respectful accountability"
  intro="Together is designed to lower relationship friction while protecting personal data and reducing abusive communication patterns."
>
  <div class="grid trust-grid">
    <article class="panel trust-card interactive-card">
      <p class="label">Data Protection</p>
      <h3>Secure account and workspace architecture</h3>
      <p class="muted">
        We use Firebase-backed authentication and infrastructure controls, encrypted transport, and scoped
        workspace access to protect shared plans and messages.
      </p>
    </article>
    <article class="panel trust-card interactive-card">
      <p class="label">Privacy Controls</p>
      <h3>Clear data handling and PII stewardship</h3>
      <p class="muted">
        We collect account email and operational data needed to run Together. Usage analytics are measured
        through Google Analytics with policy-level transparency and user rights pathways.
      </p>
    </article>
    <article class="panel trust-card interactive-card">
      <p class="label">Communication Safety</p>
      <h3>Product framing that discourages blame loops</h3>
      <p class="muted">
        Status language, reminder tone, and in-task conversation flow are intentionally structured to support
        constructive follow-through over escalation.
      </p>
    </article>
  </div>
</SectionShell>

<style>
  .trust-grid {
    margin-top: 1.3rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }

  .trust-card {
    padding: 1.2rem;
    background: linear-gradient(165deg, rgba(31, 122, 93, 0.1), rgba(255, 252, 247, 0.98));
    display: grid;
    gap: 0.48rem;
  }

  .label {
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 700;
    color: #2d6a52;
  }

  h3 {
    font-size: 1.14rem;
  }

  @media (max-width: 980px) {
    .trust-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
