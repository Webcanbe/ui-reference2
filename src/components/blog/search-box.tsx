'use client';

import { CrossIcon, SearchIcon } from '@/src/components/shared/icon';
import { useRouter } from 'next/navigation';
import type { ComponentPropsWithoutRef } from 'react';
import { useEffect, useState } from 'react';

interface SearchBoxProps {
  defaultValue?: string;
}

const SearchBox = (props: Readonly<SearchBoxProps>) => {
  const { defaultValue = '' } = props;
  const router = useRouter();
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const isShowingSearchResults = (defaultValue ?? '').trim().length > 0;

  const handleSubmit: ComponentPropsWithoutRef<'form'>['onSubmit'] = (e) => {
    e.preventDefault();
    const q = value.trim();
    if (q) {
      router.push(`/blog?search=${encodeURIComponent(q)}`);
    } else {
      router.push('/blog');
    }
  };

  const handleReset = () => {
    setValue('');
    router.push('/blog');
  };

  return (
    <form className="block" onSubmit={handleSubmit}>
      <fieldset className="relative">
        <input
          type="text"
          placeholder="Search"
          name="search"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="bg-background-13/60 text-tagline-2 border-stroke-3/25 focus:border-stroke-3/30 placeholder:text-tagline-2 placeholder:font-inter-tight block w-full max-w-full rounded-md border py-3 pr-11 pl-[18px] text-white placeholder:font-normal placeholder:text-white/50 focus:outline-none"
        />
        {isShowingSearchResults ? (
          <button
            type="button"
            onClick={handleReset}
            className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer p-0.5 text-white/60 transition-colors hover:text-white"
            aria-label="Clear search"
          >
            <CrossIcon className="size-5 fill-white" />
          </button>
        ) : (
          <button
            type="submit"
            className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
            aria-label="Search"
          >
            <SearchIcon />
          </button>
        )}
      </fieldset>
    </form>
  );
};

export default SearchBox;
