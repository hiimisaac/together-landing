<script lang="ts">
  import FeatureGrid from '$lib/components/FeatureGrid.svelte';
  import FinalCtaBand from '$lib/components/FinalCtaBand.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import HowItWorks from '$lib/components/HowItWorks.svelte';
  import ProblemSolution from '$lib/components/ProblemSolution.svelte';
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import Testimonials from '$lib/components/Testimonials.svelte';
  import TrustSafety from '$lib/components/TrustSafety.svelte';
  import { features, steps, testimonials } from '$lib/data/content';
</script>

<main class="page-shell">
  <SiteHeader />
  <Hero />
  <ProblemSolution />
  <FeatureGrid items={features} />
  <HowItWorks items={steps} />
  <TrustSafety />
  <Testimonials items={testimonials} />
  <FinalCtaBand />
  <SiteFooter />
</main>
