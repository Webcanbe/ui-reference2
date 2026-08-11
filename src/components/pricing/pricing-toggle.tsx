'use client';

import { cn } from '@/src/utils/cn';
import { useCallback, useLayoutEffect, useRef } from 'react';

type PricingToggleProps = {
  isYearly: boolean;
  setIsYearly: (isYearly: boolean) => void;
};

const PricingToggle = ({ isYearly, setIsYearly }: PricingToggleProps) => {
  const fieldsetRef = useRef<HTMLFieldSetElement>(null);
  const activeTabRef = useRef<HTMLDivElement>(null);
  const monthlyTabRef = useRef<HTMLLabelElement>(null);
  const yearlyTabRef = useRef<HTMLLabelElement>(null);

  const updateActivePill = useCallback(() => {
    const fieldset = fieldsetRef.current;
    const active = activeTabRef.current;
    const target = isYearly ? yearlyTabRef.current : monthlyTabRef.current;

    if (!fieldset || !active || !target) return;

    const left = target.offsetLeft;
    const width = target.offsetWidth;
    const height = target.offsetHeight;

    active.style.width = `${width}px`;
    active.style.height = `${height}px`;
    active.style.transform = `translateX(${left}px)`;
  }, [isYearly]);

  useLayoutEffect(() => {
    updateActivePill();
  }, [updateActivePill]);

  return (
    <div className="mx-auto max-h-11 w-full max-w-[195px]">
      <fieldset
        ref={fieldsetRef}
        className="relative inline-flex w-full rounded-full bg-white/5 p-1 backdrop-blur-[20px]"
      >
        <legend className="sr-only">Choose billing period</legend>

        <input
          type="radio"
          name="pricing-toggle"
          id="monthly"
          value="monthly"
          className="peer/monthly sr-only"
          aria-describedby="monthly-description"
          checked={!isYearly}
          onChange={() => setIsYearly(false)}
        />

        <input
          type="radio"
          name="pricing-toggle"
          id="yearly"
          value="yearly"
          className="peer/yearly sr-only"
          aria-describedby="yearly-description"
          checked={isYearly}
          onChange={() => setIsYearly(true)}
        />

        <label
          ref={monthlyTabRef}
          htmlFor="monthly"
          className={cn(
            'font-inter-tight text-tagline-2 relative z-20 flex h-9 w-full max-w-[89px] cursor-pointer items-center justify-center rounded-full px-4 py-[5px] font-normal text-white/90',
            !isYearly && 'text-[#0d0d12E6]'
          )}
          id="monthly-description"
        >
          Monthly
        </label>

        <label
          ref={yearlyTabRef}
          htmlFor="yearly"
          className={cn(
            'font-inter-tight text-tagline-2 relative z-20 flex h-9 w-full max-w-24 cursor-pointer items-center justify-center rounded-full px-4 py-[5px] font-normal text-white/90',
            isYearly && 'text-[#0d0d12E6]'
          )}
          id="yearly-description"
        >
          Yearly
        </label>

        {/* active tab  indicator  */}
        <div
          ref={activeTabRef}
          className="bg-background-7 absolute top-1/2 left-0 z-10 -translate-y-1/2 rounded-full transition-[transform,width,height] duration-300 ease-[power3.out]"
        />
      </fieldset>
    </div>
  );
};

export default PricingToggle;
