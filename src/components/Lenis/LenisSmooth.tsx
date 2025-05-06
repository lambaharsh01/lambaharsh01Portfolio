// components/LenisSmooth.tsx
"use client";

import { useEffect, ReactNode } from 'react';
import Lenis from '@studio-freight/lenis';

export default function LenisSmooth({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Initialize Lenis with smooth scrolling settings
    // const lenis = new Lenis({
    //   duration: 5,
    //   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    //   wheelMultiplier: 1, // Adjust wheel sensitivity
    //   lerp: 0.05, // Linear interpolation, lower = smoother
    //   touchMultiplier: 0, // Make touch scrolling faster
    //   smoothWheel: true,

    // });

    // const lenis = new Lenis({
    //   duration: 1.2,              // Reduced from 5 to be more responsive
    //   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    //   wheelMultiplier: 1,
    //   lerp: 0.1,                  // Increased slightly for more responsive feel
    //   touchMultiplier: 2,         // Changed from 0 to enhance mobile scrolling
    //   // smoothTouch: true,          // Enable smooth scrolling for touch devices
    //   smoothWheel: true,
    //   orientation: 'vertical',    // Explicitly define scroll orientation
    //   gestureOrientation: 'vertical',
    //   touchInertiaMultiplier: 0.8 // Add inertia for smoother stops
    // });

    const lenis = new Lenis({
      duration: 1.2,              // Reduced from 5 to be more responsive
      // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -6 * t)),
      wheelMultiplier: 1,
      lerp: 0.1,                  // Increased slightly for more responsive feel
      touchMultiplier: 2,         // Changed from 0 to enhance mobile scrolling
      smoothWheel: true,
      orientation: 'vertical',    // Explicitly define scroll orientation
      gestureOrientation: 'vertical'
    });

    // Create animation frame loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    // Start the animation loop
    requestAnimationFrame(raf);

    // Clean up on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}