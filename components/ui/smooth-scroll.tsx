'use client';
import { ReactLenis } from 'lenis/react';
import React, { forwardRef } from 'react';

const SmoothScroll = forwardRef<HTMLElement, { children: React.ReactNode }>(
  ({ children }, ref) => {
    return (
      <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
        {children}
      </ReactLenis>
    );
  }
);

SmoothScroll.displayName = 'SmoothScroll';

export default SmoothScroll;
