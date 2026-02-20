<script lang="ts">
  import SectionShell from './SectionShell.svelte';
</script>

<SectionShell
  eyebrow="Problem and Solution"
  title="Without a shared system, small misses turn into recurring friction"
  intro="Together replaces memory-based coordination with explicit commitments, visible progress, and context-aware communication."
>
  <div class="split">
    <article class="panel card problem">
      <h3>What usually happens</h3>
      <ul>
        <li>Plans are spread across texts and memory.</li>
        <li>One person tracks follow-ups by default.</li>
        <li>Status uncertainty triggers repetitive check-ins.</li>
      </ul>
    </article>

    <article class="panel card solution">
      <h3>How Together changes it</h3>
      <ul>
        <li>Each commitment has owner, timing, and notes.</li>
        <li>Status is transparent without “did you do it?” loops.</li>
        <li>Chat stays inside the task for better context.</li>
      </ul>
    </article>
  </div>
</SectionShell>

<style>
  .split {
    margin-top: 1.3rem;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .card {
    padding: 1.2rem;
  }

  h3 {
    margin-bottom: 0.7rem;
    font-size: 1.25rem;
  }

  ul {
    margin: 0;
    padding-left: 1.1rem;
    display: grid;
    gap: 0.45rem;
    color: var(--text-soft);
  }

  .problem {
    background: linear-gradient(160deg, rgba(59, 130, 246, 0.12), rgba(255, 255, 255, 0.98));
  }

  .solution {
    background: linear-gradient(160deg, rgba(31, 122, 93, 0.12), rgba(255, 253, 249, 0.98));
  }

  @media (max-width: 820px) {
    .split {
      grid-template-columns: 1fr;
    }
  }
</style>
