import { onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';

export function useScrollSpy(sectionSelector, navLinkSelector, options = {}) {
  const triggers = [];

  const defaultOptions = {
    start: 'top center',
    end: 'bottom center',
    activeClass: 'active',
    markers: true,
    ...options
  };

  onMounted(async () => {
    // 👇 dynamically import — avoids SSR errors
    const { ScrollTrigger } = await import('gsap/ScrollTrigger.js');
    gsap.registerPlugin(ScrollTrigger);

    // Slight delay to ensure DOM exists
    setTimeout(() => {
      const sections = document.querySelectorAll(sectionSelector);
      const navLinks = document.querySelectorAll(navLinkSelector);

      if (sections.length === 0 || navLinks.length === 0) return;

      sections.forEach(section => {
        if (!section.id) return;

        const trigger = ScrollTrigger.create({
          trigger: section,
          start: defaultOptions.start,
          end: defaultOptions.end,
          markers: defaultOptions.markers,
          onEnter: () => updateActiveLink(section.id, navLinks, defaultOptions.activeClass),
          onEnterBack: () => updateActiveLink(section.id, navLinks, defaultOptions.activeClass),
        });

        triggers.push(trigger);
      });
    }, 100);
  });

  onUnmounted(() => {
    triggers.forEach(trigger => trigger.kill());
  });

  function updateActiveLink(sectionId, navLinks, activeClass) {
    navLinks.forEach((link) => {
      link.classList.remove(activeClass);
      if (link.getAttribute('href') === `#${sectionId}`) {
        link.classList.add(activeClass);
      }
    });
  }
}