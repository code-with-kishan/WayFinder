<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { ArrowRight, Map, Bell, Star, Gauge, Accessibility, Radar } from 'lucide-svelte';

  const features = [
    { icon: Star, title: 'Favorites that feel instant', copy: 'Pin stops & routes with local persistence and zero reload friction.' },
    { icon: Bell, title: 'Live alerts in context', copy: 'Surface service alerts scoped to the stop/route you are viewing.' },
    { icon: Radar, title: 'Dynamic arrivals', copy: 'Auto-refreshing arrivals that gracefully insert, update, and expire.' },
    { icon: Gauge, title: 'Plan beyond now', copy: 'Peek into departures later today with a timeline scroller.' },
    { icon: Accessibility, title: 'A11y first', copy: 'Keyboard-perfect focus, screen reader labels, and motion-safe defaults.' },
    { icon: Map, title: 'GSAP-crafted motion', copy: 'Scroll-triggered reveals and parallax that stay performant.' }
  ];

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
      gsap.fromTo(
        el,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    const hero = document.querySelector('.hero-gradient');
    if (hero) {
      gsap.to(hero, {
        backgroundPosition: '60% 40%',
        ease: 'sine.inOut',
        duration: 8,
        repeat: -1,
        yoyo: true
      });
    }
  });
</script>

<section class="hero-gradient">
  <div class="section-shell min-h-screen flex flex-col justify-center py-16 gap-10">
    <div class="glass p-10 lg:p-14" data-reveal>
      <div class="flex flex-col gap-6 max-w-3xl">
        <p class="text-sm uppercase tracking-[0.2em] text-ink/70 font-semibold">Next-gen transit web • WayFinder</p>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-ink">
          Premium, motion-rich transit experiences—built for agencies and riders.
        </h1>
        <p class="text-lg text-ink/80 max-w-2xl">
          WayFinder couples OneBusAway data with GSAP-grade polish: favorites, live alerts, dynamic arrivals, and accessibility that meets WCAG 2.2 AA.
        </p>
        <div class="flex flex-wrap gap-3">
          <a class="btn-primary" href="#experience">
            Explore the experience
            <ArrowRight size={18} />
          </a>
          <a class="btn-ghost" href="/docs/roadmap">
            View roadmap
          </a>
        </div>
        <div class="flex items-center gap-3 pt-2 text-sm text-ink/70">
          <img src="/onebusaway.svg" alt="OneBusAway logo" class="h-10 w-10" />
          <span>Powered by OneBusAway mock data. Replace with live API when ready.</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="experience" class="py-20 bg-white">
  <div class="section-shell space-y-14">
    <div class="space-y-4" data-reveal>
      <p class="text-sm uppercase tracking-[0.2em] text-ink/60 font-semibold">Product pillars</p>
      <h2 class="section-title">Built to feel premium, fast, and inclusive.</h2>
      <p class="text-lg text-ink/75 max-w-2xl">
        Scroll-triggered storytelling, reduced-motion safety, and a11y-first controls so agencies can ship confidently.
      </p>
    </div>
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each features as feature}
        <article class="glass p-6 flex flex-col gap-4" data-reveal>
          <div class="h-11 w-11 rounded-2xl bg-ink text-white flex items-center justify-center shadow-lg shadow-ink/10">
            <svelte:component this={feature.icon} size={22} />
          </div>
          <h3 class="text-xl font-semibold text-ink">{feature.title}</h3>
          <p class="text-ink/75 leading-relaxed">{feature.copy}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<section class="py-20 bg-mist">
  <div class="section-shell grid lg:grid-cols-2 gap-10 items-center">
    <div class="glass p-8 space-y-4" data-reveal>
      <p class="text-sm uppercase tracking-[0.2em] text-ink/60 font-semibold">Motion system</p>
      <h2 class="section-title">GSAP-powered, but accessibility-safe.</h2>
      <p class="text-ink/75 leading-relaxed">
        Centralized timing tokens, ScrollTrigger reveals, and parallax with guards for reduced motion. Swap in live data and the same system animates arrivals and alerts.
      </p>
      <div class="flex gap-3">
        <button class="btn-primary" type="button">See it in action</button>
        <button class="btn-ghost" type="button">Performance profile</button>
      </div>
    </div>
    <div class="glass p-8" data-reveal>
      <div class="aspect-video bg-gradient-to-br from-ink to-ink/70 rounded-2xl relative overflow-hidden">
        <div class="absolute inset-6 rounded-xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-2xl" />
        <div class="absolute inset-0 animate-pulse" style="animation-duration: 2.5s"></div>
      </div>
      <p class="text-sm text-ink/70 mt-4">Swap this card for your arrivals/alerts mock once data hooks are wired.</p>
    </div>
  </div>
</section>

<section class="py-16 bg-white">
  <div class="section-shell text-center space-y-6" data-reveal>
    <h2 class="section-title">Ready to wire live OneBusAway data.</h2>
    <p class="text-ink/75 max-w-2xl mx-auto">
      Environment-driven endpoints, local favorites, and alert scaffolding are next. This shell keeps performance, a11y, and premium motion as defaults.
    </p>
    <div class="flex justify-center gap-3">
      <a class="btn-primary" href="mailto:team@wayfinder">Request integration</a>
      <a class="btn-ghost" href="#">View accessibility checklist</a>
    </div>
  </div>
</section>
