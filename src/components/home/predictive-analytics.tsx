'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PredictiveAnalytics = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);

  useGSAP(
    () => {
      const container = containerRef.current;
      const circle = circleRef.current;
      const paths = pathRefs.current.filter((p): p is SVGPathElement => p != null);
      if (!container || paths.length === 0) return;

      if (circle) {
        gsap.set(circle, { opacity: 0, scale: 0.2 });
      }

      paths.forEach((path, index) => {
        const len = path.getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });

        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 2.5,
          ease: 'power3.out',
          delay: index * 0.2,
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            once: true,
          },
        });
      });

      if (circle) {
        gsap.to(circle, {
          opacity: 1,
          scale: 1,
          duration: 2.1,
          delay: 1.3,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            once: true,
          },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div
      className="border-stroke-1/18 bg-background-6 relative h-[344px] w-full overflow-hidden rounded-lg border p-10.5"
      aria-labelledby="predictive-analytics-heading"
    >
      {/* glowing gradient */}
      <div className="pointer-events-none absolute top-[-51%] left-[-18%] select-none">
        <div className="pointer-events-none relative z-20 h-[276px] w-[188px] rotate-[-10.86deg] rounded-[50%] bg-white/40 blur-[25.5px] select-none">
          <div className="bg-opai-purple/90 absolute right-0 bottom-[-4px] left-[102px] z-10 h-[194px] w-[133px] rotate-12 rounded-[50%] mix-blend-plus-lighter blur-[82px]" />
        </div>
      </div>

      <RevealAnimation delay={0.1}>
        <div className="relative z-10 space-y-1 sm:text-center md:text-left">
          <h3
            id="predictive-analytics-heading"
            className="font-sora text-sora-heading-5 font-normal text-white/80"
            itemProp="name"
          >
            Predictive analytics
          </h3>
          <p
            className="font-inter-tight text-tagline-2 w-full text-left font-normal text-white/50 md:max-w-[269px]"
            itemProp="description"
          >
            Forecast trends and outcomes to stay ahead of the competition.
          </p>
        </div>
      </RevealAnimation>

      <div className="absolute top-[160px] -left-[88px] h-[177px] w-[382px] sm:left-[100px] md:-left-[100px] lg:top-[120px] lg:left-[120px] xl:top-[105px] xl:left-[233px]">
        <div ref={containerRef} className="flow-line-curve-svg-container relative size-full">
          <div
            ref={circleRef}
            className="flow-line-curve-circle absolute right-0 z-10 size-[33px] rounded-full bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              className="absolute top-[6px] left-[3.5px]"
            >
              <g filter="url(#filter0_d_5781_22995)">
                <circle cx="13.2625" cy="10.3289" r="9.4539" fill="#8D59FF" />
              </g>
              <defs>
                <filter
                  id="filter0_d_5781_22995"
                  x="0.370812"
                  y="0.875"
                  width="25.7818"
                  height="25.7818"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="3.43778" />
                  <feGaussianBlur stdDeviation="1.71889" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0605338 0 0 0 0 0.134615 0 0 0 0 0.00388314 0 0 0 0.18 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_5781_22995"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_5781_22995"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="377"
            height="171"
            viewBox="0 0 377 171"
            fill="none"
          >
            <path
              ref={(el) => {
                pathRefs.current[0] = el;
              }}
              className="flow-line-curve-path"
              d="M6 165.184C15.1674 165.184 43.128 157.191 81.6312 125.22C129.76 85.2554 165.857 172.919 204.102 146.706C242.347 120.493 208.829 71.5054 253.52 51.7382C298.211 31.9709 330.87 49.1598 371.694 5.32812"
              stroke="url(#paint0_linear_5781_22992)"
              strokeWidth="10.3133"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_5781_22992"
                x1="6"
                y1="146.707"
                x2="383.926"
                y2="6.21115"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.19382" stopColor="#227EFF" stopOpacity={0} />
                <stop offset="1" stopColor="#8D59FF" />
              </linearGradient>
            </defs>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="401"
            height="195"
            viewBox="0 0 401 195"
            fill="none"
            className="absolute inset-[-11px]"
          >
            <g filter="url(#filter0_f_5781_22993)">
              <path
                ref={(el) => {
                  pathRefs.current[1] = el;
                }}
                className="flow-line-curve-path"
                d="M18 177.184C27.1674 177.184 55.128 169.191 93.6312 137.22C141.76 97.2554 177.857 184.919 216.102 158.706C254.347 132.493 220.829 83.5054 265.52 63.7382C310.211 43.9709 342.87 61.1598 383.694 17.3281"
                stroke="url(#paint0_linear_5781_22993)"
                strokeWidth="10.3133"
                strokeLinecap="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_5781_22993"
                x="0.811515"
                y="0.13964"
                width="400.072"
                height="194.236"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="6.01612" result="effect1_foregroundBlur_5781_22993" />
              </filter>
              <linearGradient
                id="paint0_linear_5781_22993"
                x1="74"
                y1="163.5"
                x2="387.355"
                y2="17.5697"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#227EFF" stopOpacity={0} />
                <stop offset="0.833151" stopColor="#8D59FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PredictiveAnalytics;
