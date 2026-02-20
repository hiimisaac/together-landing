<script lang="ts">
  import { base } from '$app/paths';
  import '../app.css';
</script>

<svelte:head>
  <title>Tandem | Accountability for Couples</title>
  <meta
    name="description"
    content="Tandem helps couples coordinate commitments with shared tasks, transparent status, and in-task chat."
  />
  <link rel="icon" href={`${base}/favicon.svg`} />
</svelte:head>

<slot />
