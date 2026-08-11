'use client';

import loginImage from '@/public/images/opai-img-472.jpg';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal-animation';
import { ChevronRightIcon, FacebookBrandIcon, GoogleIcon } from '@/src/components/shared/icon';
import { useButtonSplitText } from '@/src/hooks/use-button-split-text';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const Login = () => {
  const submitButtonWrapperRef = useRef<HTMLDivElement>(null);
  useButtonSplitText(submitButtonWrapperRef);

  return (
    <section className="pt-34 pb-12 2xl:pt-44">
      <div className="main-container">
        <RevealAnimation delay={0.4}>
          <div className="mx-auto w-full rounded-lg bg-[url('/images/gradient/opai-37.jpg')] bg-cover bg-center bg-no-repeat p-4 bg-blend-lighten lg:p-20 xl:p-28 2xl:p-39">
            <div className="mb-10 space-y-3 text-center xl:mb-14">
              <TextReveal>
                <h1 className="xl:text-sora-heading-2 lg:text-sora-heading-3 text-sora-heading-4 inline-block font-normal text-white/90">
                  Let&apos;s <span className="text-white/30">get started</span>
                </h1>
              </TextReveal>
              <TextReveal delay={0.2}>
                <p className="text-tagline-2 mx-auto max-w-xs font-normal text-white/60">
                  Let&apos;s explore how Nexsas can support your goals with AI-driven solutions.
                </p>
              </TextReveal>
            </div>
            <div className="flex items-stretch justify-center gap-y-12 xl:gap-x-8 2xl:gap-x-12">
              <RevealAnimation delay={0.3} direction="left" offset={100}>
                <div className="bg-background-6 w-full max-w-full flex-1 rounded-lg p-6 sm:p-8 md:p-11 lg:min-h-[577px] lg:max-w-[460px]">
                  <form>
                    <fieldset className="mb-4 space-y-2 md:mb-6">
                      <label
                        htmlFor="email"
                        className="text-tagline-2 block font-normal text-white/90"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        name="email"
                        placeholder="Enter your email"
                        className="border-stroke-1/11 text-tagline-3 placeholder:text-tagline-3 bg-background-5 block w-full rounded-full border px-[18px] py-2.5 font-normal text-white/90 placeholder:text-white/60 focus:outline-none"
                      />
                    </fieldset>
                    <fieldset className="mb-4 space-y-2 md:mb-6">
                      <label
                        htmlFor="password"
                        className="text-tagline-2 block font-normal text-white/90"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        required
                        name="password"
                        placeholder="At least 8 character"
                        className="border-stroke-1/11 text-tagline-3 placeholder:text-tagline-3 bg-background-5 block w-full rounded-full border px-[18px] py-2.5 font-normal text-white/90 placeholder:text-white/60 focus:outline-none"
                      />
                    </fieldset>
                    <fieldset className="mt-6 mb-4 flex items-center justify-between gap-x-5 md:mt-8 md:mb-6">
                      <label className="flex cursor-pointer items-center gap-1.5">
                        <input
                          type="checkbox"
                          name="remember"
                          required
                          className="peer sr-only"
                          aria-label="Remember me"
                        />
                        <span className="border-stroke-1/11 peer-checked:border-primary-500 relative size-5 cursor-pointer rounded-full border after:absolute after:top-1/2 after:left-1/2 after:size-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-white/50 after:opacity-0 peer-checked:after:opacity-100" />
                        <span className="text-tagline-3 font-medium text-white/60 select-none peer-checked:text-white/90">
                          Remember me
                        </span>
                      </label>
                      <div>
                        <Link
                          href="#"
                          className="text-tagline-3 block flex-1 font-normal text-white/60 underline underline-offset-2 transition-colors duration-300 ease-in-out hover:text-white/80"
                        >
                          Forgot password?
                        </Link>
                      </div>
                    </fieldset>
                    <div ref={submitButtonWrapperRef} className="button-split-text-wrapper block">
                      <button
                        type="submit"
                        className="group bg-background-7 hover:border-stroke-3 relative flex max-h-12 w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border border-transparent px-6 py-[13px] transition-all duration-300 ease-in-out"
                      >
                        <div className="relative overflow-hidden">
                          <div className="h-5.5">
                            <div className="text-background-5 font-ibm-plex-mono button-split-upper-text text-tagline-2 block leading-[1.4] font-medium text-nowrap">
                              Login
                            </div>
                          </div>
                          <div className="absolute h-5.5">
                            <div className="text-background-5 font-ibm-plex-mono button-split-lower-text text-tagline-2 block leading-[1.4] font-medium text-nowrap">
                              Login
                            </div>
                          </div>
                        </div>
                        <div className="relative mt-[2px] flex size-6 items-center justify-center overflow-hidden">
                          <span className="stroke-background-6 ease-custom-ease-1 absolute size-[18px] translate-x-0 stroke-[1.5px] transition-all duration-500 group-hover:translate-x-6">
                            <ChevronRightIcon className="stroke-background-6 size-[18px] stroke-[1.5px]" />
                          </span>
                          <span className="stroke-background-6 ease-custom-ease-1 absolute size-[18px] -translate-x-6 stroke-[1.5px] transition-all duration-500 group-hover:translate-x-0">
                            <ChevronRightIcon className="stroke-background-6 size-[18px] stroke-[1.5px]" />
                          </span>
                        </div>
                      </button>
                    </div>
                  </form>
                  <div className="py-6">
                    <p className="text-tagline-4 relative px-2 text-center font-normal text-white/90 before:absolute before:top-1/2 before:left-[26%] before:block before:h-px before:w-[43px] before:-translate-y-1/2 before:bg-[linear-gradient(270deg,rgba(210,223,240,0.40)_0%,rgba(210,223,240,0.00)_78.71%)] before:content-[''] after:absolute after:top-1/2 after:right-[26%] after:block after:h-px after:w-[43px] after:-translate-y-1/2 after:rotate-180 after:bg-[linear-gradient(270deg,rgba(210,223,240,0.40)_0%,rgba(210,223,240,0.00)_78.71%)] after:content-[''] sm:before:left-[35%] sm:after:right-[35%]">
                      Or
                    </p>
                  </div>
                  <div className="space-y-4 md:space-y-6">
                    <button
                      type="button"
                      className="border-stroke-3/25 hover:bg-stroke-3/25 group flex w-full items-center justify-center gap-2 rounded-full border px-8 py-3 transition-all duration-300 ease-in-out"
                    >
                      <GoogleIcon className="size-6" />
                      <span className="text-tagline-3 font-normal text-white/90">
                        Continue with Google
                      </span>
                    </button>
                    <button
                      type="button"
                      className="border-stroke-3/25 hover:bg-stroke-3/25 group flex w-full items-center justify-center gap-2 rounded-full border px-8 py-3 transition-all duration-300 ease-in-out"
                    >
                      <FacebookBrandIcon className="size-6" />
                      <span className="text-tagline-3 font-normal text-white/90">
                        Continue with Facebook
                      </span>
                    </button>
                  </div>
                  <p className="text-tagline-3 mt-6 text-center text-white/60 transition-colors duration-300 ease-in-out hover:text-white/80">
                    Don&apos;t have an account?{' '}
                    <Link href="/signup" className="underline underline-offset-2">
                      Sign up
                    </Link>
                  </p>
                </div>
              </RevealAnimation>
              <div className="hidden min-h-[577px] w-full max-w-[460px] flex-1 flex-col xl:flex">
                <RevealAnimation delay={0.3} direction="right" offset={100}>
                  <figure className="block h-full overflow-hidden rounded-lg">
                    <Image src={loginImage} alt="Login" className="size-full object-cover" />
                  </figure>
                </RevealAnimation>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Login;
