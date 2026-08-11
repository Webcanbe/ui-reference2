import { cn } from '@/src/utils/cn';
import Link from 'next/link';

export interface AboutLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Internal link for about section navigation. Uses Next.js Link for client-side routing.
 */
const AboutLink = ({ href, children, className }: Readonly<AboutLinkProps>) => {
  return (
    <Link
      href={href}
      className={cn(
        'font-sora text-sora-heading-5 font-normal text-white/80 transition-colors hover:text-white/90',
        className
      )}
    >
      {children}
    </Link>
  );
};

export default AboutLink;
