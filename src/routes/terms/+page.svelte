<svelte:head>
  <title>Terms and Conditions | Together</title>
  <meta
    name="description"
    content="Together Terms and Conditions governing access and use of the Together service."
  />
</svelte:head>

<script lang="ts">
  import { base } from '$app/paths';
</script>

<main class="legal-page section">
  <div class="container legal-shell panel fade-up">
    <header class="legal-header">
      <p class="eyebrow">Legal</p>
      <h1>Terms and Conditions</h1>
      <p class="muted">Effective date: February 19, 2026</p>
      <p class="muted">
        These Terms and Conditions (“Terms”) form a legal agreement between you and Together Technologies,
        Inc. (“Together,” “we,” “us”) governing your use of the Together website and services.
      </p>
    </header>

    <section>
      <h2>1. Eligibility and Account Registration</h2>
      <ul>
        <li>You must be at least 18 years old or the age of majority in your jurisdiction.</li>
        <li>You agree to provide accurate account information and keep it updated.</li>
        <li>You are responsible for maintaining confidentiality of your credentials.</li>
        <li>You are responsible for all activity under your account.</li>
      </ul>
    </section>

    <section>
      <h2>2. Service Description</h2>
      <p>
        Together provides tools for couples to coordinate commitments, including shared tasks, status
        tracking, reminders, and in-task chat. Features may change over time.
      </p>
    </section>

    <section>
      <h2>3. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the service for unlawful, fraudulent, or abusive purposes.</li>
        <li>Harass, threaten, or harm other people through the service.</li>
        <li>Upload malicious code or attempt unauthorized access.</li>
        <li>Interfere with service integrity, performance, or security.</li>
        <li>Reverse engineer or copy proprietary parts of the service except as legally permitted.</li>
      </ul>
      <p>
        We may suspend or terminate accounts for violations, including behavior that creates safety risks.
      </p>
    </section>

    <section>
      <h2>4. User Content</h2>
      <p>
        You retain ownership of content you submit (tasks, notes, chat messages). You grant Together a
        limited license to host, process, and display your content solely to operate and improve the
        service.
      </p>
      <p>
        You represent that you have rights to submit your content and that it does not violate applicable
        law or third-party rights.
      </p>
    </section>

    <section>
      <h2>5. Plans, Fees, and Billing</h2>
      <p>
        Certain features may require a paid plan. Pricing, billing intervals, renewal terms, and trial
        details are presented at purchase. Unless stated otherwise, subscriptions renew automatically until
        canceled.
      </p>
      <p>
        You authorize charges through your selected payment method. Taxes may apply. Fees are generally
        non-refundable except where required by law.
      </p>
    </section>

    <section>
      <h2>6. Privacy</h2>
      <p>
        Our use of personal information is described in the <a href={`${base}/privacy`}>Privacy Policy</a>, which
        is incorporated into these Terms by reference.
      </p>
    </section>

    <section>
      <h2>7. Intellectual Property</h2>
      <p>
        The service, including software, design, trademarks, and content provided by Together, is protected
        by intellectual property laws. No ownership rights are transferred to you.
      </p>
    </section>

    <section>
      <h2>8. Third-Party Services</h2>
      <p>
        Together may integrate with or rely on third-party providers (including Firebase and Google
        Analytics). We are not responsible for third-party services outside our control.
      </p>
    </section>

    <section>
      <h2>9. Service Availability and Changes</h2>
      <p>
        We may modify, suspend, or discontinue parts of the service at any time. We do not guarantee
        uninterrupted or error-free operation.
      </p>
    </section>

    <section>
      <h2>10. Disclaimer of Warranties</h2>
      <p>
        To the fullest extent allowed by law, the service is provided “as is” and “as available,” without
        warranties of any kind, express or implied, including merchantability, fitness for a particular
        purpose, and non-infringement.
      </p>
    </section>

    <section>
      <h2>11. Limitation of Liability</h2>
      <p>
        To the fullest extent allowed by law, Together and its affiliates will not be liable for indirect,
        incidental, special, consequential, or punitive damages, or for lost profits, revenues, data, or
        goodwill arising from your use of the service.
      </p>
      <p>
        Our aggregate liability for claims related to the service is limited to the amount you paid to us in
        the 12 months before the event giving rise to liability.
      </p>
    </section>

    <section>
      <h2>12. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Together and its personnel from claims, losses, and costs
        arising out of your misuse of the service, your content, or your violation of these Terms.
      </p>
    </section>

    <section>
      <h2>13. Termination</h2>
      <p>
        You may stop using the service at any time. We may suspend or terminate access when necessary for
        security, legal compliance, or Terms violations.
      </p>
      <p>Certain provisions of these Terms survive termination by their nature.</p>
    </section>

    <section>
      <h2>14. Governing Law and Dispute Resolution</h2>
      <p>
        These Terms are governed by the laws of the State of Delaware, without regard to conflicts of law
        principles. Venue for disputes will be in courts located in Delaware, unless required otherwise by
        applicable law.
      </p>
    </section>

    <section>
      <h2>15. Changes to Terms</h2>
      <p>
        We may update these Terms. If we make material changes, we will provide notice through the service
        or by email. Continued use after effective date means you accept the updated Terms.
      </p>
    </section>

    <section>
      <h2>16. Contact</h2>
      <p>
        Questions regarding these Terms can be sent to
        <a href="mailto:legal@together.app">legal@together.app</a>.
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
