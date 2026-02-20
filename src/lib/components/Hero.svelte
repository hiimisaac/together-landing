<section class="section hero" id="top" aria-labelledby="hero-title">
  <div class="container hero-grid fade-up">
    <div class="hero-copy">
      <span class="eyebrow">Accountability for Couples</span>
      <h1 id="hero-title">Clarity in commitments. Calm in communication.</h1>
      <p class="muted">
        Together gives couples one shared system for tasks, status, and in-task chat so follow-through is
        visible, respectful, and practical.
      </p>

      <div class="button-row">
        <a class="btn btn-primary" href="#final-cta">Start free trial</a>
        <a class="btn btn-tertiary" href="#how-it-works">Watch workflow</a>
      </div>

      <ul class="trust-points" aria-label="Trust highlights">
        <li><span class="dot pulse-dot" aria-hidden="true"></span>Shared ownership</li>
        <li><span class="dot pulse-dot" aria-hidden="true"></span>Neutral reminders</li>
        <li><span class="dot pulse-dot" aria-hidden="true"></span>Private by design</li>
      </ul>
    </div>

    <aside class="panel preview interactive-card" aria-label="Product preview">
      <div class="preview-head">
        <p>Today together</p>
        <span>3 active • 2 done</span>
      </div>
      <div class="task-grid">
        <article>
          <h2>Plan groceries</h2>
          <p class="state open">In progress</p>
          <p class="muted">Need final dinner plan before checkout.</p>
        </article>
        <article>
          <h2>Book plumber</h2>
          <p class="state blocked">Blocked</p>
          <p class="muted">Waiting on timeslot response.</p>
        </article>
        <article>
          <h2>Sort travel docs</h2>
          <p class="state done">Done</p>
          <p class="muted">Completed and shared in folder.</p>
        </article>
      </div>
      <div class="chat">
        <p><strong>Avery:</strong> I can handle the call at 9 if you send me the invoice photo tonight.</p>
      </div>
    </aside>
  </div>
</section>

<style>
  .hero {
    padding-top: 1.2rem;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    align-items: center;
    gap: 1.1rem;
  }

  h1 {
    font-size: clamp(2.25rem, 6vw, 4.2rem);
    line-height: 1;
    max-width: 12ch;
  }

  .hero-copy p {
    margin-top: 1rem;
    max-width: 57ch;
    font-size: 1.08rem;
  }

  .button-row {
    margin-top: 1.35rem;
  }

  .trust-points {
    margin: 1.2rem 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }

  .trust-points li {
    display: inline-flex;
    align-items: center;
    gap: 0.42rem;
    border: 1px solid rgba(31, 122, 93, 0.26);
    background: rgba(31, 122, 93, 0.08);
    color: #245744;
    border-radius: 999px;
    padding: 0.28rem 0.7rem;
    font-size: 0.82rem;
    font-weight: 700;
  }

  .dot {
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 999px;
    background: var(--brand);
  }

  .preview {
    padding: 1rem;
    position: relative;
    overflow: hidden;
  }

  .preview::after {
    content: '';
    position: absolute;
    right: -30%;
    top: -30%;
    width: 320px;
    height: 320px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.14), transparent 68%);
    pointer-events: none;
  }

  .preview-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 0.8rem;
  }

  .preview-head p {
    font-weight: 800;
  }

  .preview-head span {
    color: var(--text-soft);
    font-size: 0.9rem;
  }

  .task-grid {
    display: grid;
    gap: 0.7rem;
  }

  .task-grid article {
    border: 1px solid rgba(77, 60, 39, 0.14);
    border-radius: 14px;
    padding: 0.8rem;
    background: rgba(255, 255, 255, 0.76);
    transition: border-color 160ms ease;
  }

  .task-grid article:hover {
    border-color: rgba(31, 122, 93, 0.36);
  }

  .task-grid h2 {
    font-size: 1rem;
    margin-bottom: 0.34rem;
  }

  .state {
    display: inline-flex;
    border-radius: 999px;
    padding: 0.2rem 0.55rem;
    font-size: 0.72rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
  }

  .open {
    color: #23664a;
    background: rgba(31, 122, 93, 0.14);
  }

  .blocked {
    color: #9a3412;
    background: rgba(249, 115, 22, 0.15);
  }

  .done {
    color: #234f45;
    background: rgba(122, 170, 148, 0.2);
  }

  .chat {
    margin-top: 0.8rem;
    border: 1px solid rgba(31, 122, 93, 0.24);
    background: rgba(31, 122, 93, 0.08);
    border-radius: 12px;
    padding: 0.65rem;
    position: relative;
    z-index: 1;
  }

  .chat p {
    color: #21473a;
    font-size: 0.92rem;
  }

  @media (max-width: 960px) {
    .hero-grid {
      grid-template-columns: 1fr;
    }

    h1 {
      max-width: 14ch;
    }
  }
</style>
