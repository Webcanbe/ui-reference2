import Link from 'next/link';

const BottomBar = () => {
  return (
    <div className="border-stroke-1/10 flex flex-col items-center justify-between gap-2.5 border-y px-5 py-3.5 sm:flex-row sm:gap-0 lg:py-5">
      <p className="text-tagline-4 font-normal text-white/50">
        &copy; {new Date().getFullYear()} pixels71. All rights reserved.
      </p>
      <ul className="flex items-center gap-6">
        <li>
          <Link
            href="#"
            className="footer-link font-inter-tight text-tagline-4 font-normal text-white/50 transition-colors duration-200 hover:text-white"
          >
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="footer-link font-inter-tight text-tagline-4 font-normal text-white/50 transition-colors duration-200 hover:text-white"
          >
            Terms of Service
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="footer-link font-inter-tight text-tagline-4 font-normal text-white/50 transition-colors duration-200 hover:text-white"
          >
            Cookie Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BottomBar;
