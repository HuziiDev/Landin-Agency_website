// lenis.js
import Lenis from '@studio-freight/lenis';

// Create and configure the Lenis instance
const lenis = new Lenis({
  duration: 2, // Smooth scrolling duration (in seconds)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
  direction: 'vertical', // Scroll direction: vertical or horizontal
  smooth: true, // Enable smooth scrolling
  smoothTouch: true, // Enable smooth scrolling on touch devices
});

function raf(time) {
  lenis.raf(time); // Update Lenis on each animation frame
  requestAnimationFrame(raf); // Request the next frame
}

// Start the animation frame
requestAnimationFrame(raf);

export default lenis;
