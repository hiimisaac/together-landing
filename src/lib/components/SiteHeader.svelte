<header class="section header-wrap" aria-label="Top navigation">
  <div class="container panel nav-shell">
    <a href="#top" class="brand" aria-label="Together home">
      <span class="brand-mark" aria-hidden="true"></span>
      Together
    </a>

    <nav aria-label="Primary">
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#how-it-works">How it works</a></li>
        <li><a href="#trust">Trust</a></li>
      </ul>
    </nav>

    <a class="btn btn-secondary" href="#final-cta">Try Together</a>
  </div>
</header>

<style>
  .header-wrap {
    padding-bottom: 1.1rem;
    padding-top: 1rem;
  }

  .nav-shell {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem 0.95rem;
    backdrop-filter: blur(8px);
    position: sticky;
    top: 0.8rem;
    z-index: 20;
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    text-decoration: none;
    font-weight: 800;
    letter-spacing: 0.01em;
  }

  .brand-mark {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--brand), var(--warm));
    box-shadow: 0 0 20px rgba(121, 227, 179, 0.7);
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  nav a {
    text-decoration: none;
    color: var(--text-soft);
    font-weight: 600;
  }

  @media (max-width: 860px) {
    .nav-shell {
      grid-template-columns: 1fr;
      justify-items: center;
    }

    ul {
      flex-wrap: wrap;
      gap: 0.65rem;
    }
  }
</style>
