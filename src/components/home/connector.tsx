'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { memo, useRef } from 'react';

gsap.registerPlugin(MotionPathPlugin, useGSAP);

export type ConnectorProps = {
  d: string;
  className?: string;
  viewBox?: string;
  stroke?: string;
  strokeOpacity?: number;
  dotColor?: string;
  drawDuration?: number;
  travelDuration?: number;
  delay?: number;
};

const Connector = memo(function Connector({
  d,
  className,
  viewBox = '0 0 59 56',
  stroke = '#7C8EA5',
  strokeOpacity = 0.18,
  dotColor = '#fff',
  drawDuration = 1.1,
  travelDuration = 2.2,
  delay = 0,
}: ConnectorProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const dotRef = useRef<SVGCircleElement | null>(null);

  useGSAP(
    () => {
      const path = pathRef.current;
      const dot = dotRef.current;
      if (!path || !dot) return;

      const length = path.getTotalLength();

      // Draw animation
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: drawDuration,
        ease: 'power3.out',
        delay,
      });

      // Moving dot
      gsap.fromTo(
        dot,
        { opacity: 0 },
        {
          opacity: 1,
          duration: travelDuration,
          repeat: -1,
          ease: 'none',
          delay: 0.5 + delay,
          motionPath: {
            path,
            align: path,
            alignOrigin: [0.5, 0.5],
            autoRotate: false,
            start: 0,
            end: 1,
          },
        }
      );
    },
    { scope: svgRef }
  );

  return (
    <svg ref={svgRef} className={className} viewBox={viewBox} fill="none" aria-hidden>
      <defs>
        <filter id="connector-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path ref={pathRef} d={d} stroke={stroke} strokeOpacity={strokeOpacity} />

      <circle
        ref={dotRef}
        r="1.6"
        fill={dotColor}
        opacity={0}
        filter="url(#connector-glow)"
        style={{ pointerEvents: 'none' }}
      />
    </svg>
  );
});

export default Connector;
