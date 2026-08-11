import { cn } from '@/src/utils/cn';
import type { FC } from 'react';

interface IconProps {
  className?: string;
}

const FacebookIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    aria-hidden
    className={cn('size-5 fill-none stroke-[#F8F9FA]', className)}
  >
    <path
      d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.75 6.25H12.25C11.6533 6.25 11.081 6.48705 10.659 6.90901C10.2371 7.33097 10 7.90326 10 8.5V19"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M7 11.5H13" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const InstagramIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    aria-hidden
    className={cn('size-5 fill-none stroke-[#CED7DE]', className)}
  >
    <path
      d="M10 13.75C12.0711 13.75 13.75 12.0711 13.75 10C13.75 7.92893 12.0711 6.25 10 6.25C7.92893 6.25 6.25 7.92893 6.25 10C6.25 12.0711 7.92893 13.75 10 13.75Z"
      strokeMiterlimit="10"
    />
    <path
      d="M14.125 1.375H5.875C3.38972 1.375 1.375 3.38972 1.375 5.875V14.125C1.375 16.6103 3.38972 18.625 5.875 18.625H14.125C16.6103 18.625 18.625 16.6103 18.625 14.125V5.875C18.625 3.38972 16.6103 1.375 14.125 1.375Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.875 6.25C15.4963 6.25 16 5.74632 16 5.125C16 4.50368 15.4963 4 14.875 4C14.2537 4 13.75 4.50368 13.75 5.125C13.75 5.74632 14.2537 6.25 14.875 6.25Z"
      fill="currentColor"
    />
  </svg>
);

const XIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17 17"
    aria-hidden
    className={cn('size-[17px] fill-none stroke-[#CED7DE]', className)}
  >
    <path
      d="M15.2955 1L9.19287 7.29329M7.11364 9.4375L0.75 16M0.75 1L12.1136 16H15.75L4.38636 1H0.75Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LinkedInIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    aria-hidden
    className={cn('size-[18px] fill-none stroke-[#CED7DE]', className)}
  >
    <path
      d="M16.5 0.75H1.5C1.08579 0.75 0.75 1.08579 0.75 1.5V16.5C0.75 16.9142 1.08579 17.25 1.5 17.25H16.5C16.9142 17.25 17.25 16.9142 17.25 16.5V1.5C17.25 1.08579 16.9142 0.75 16.5 0.75Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M8.25 7.5V13.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.25 7.5V13.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M8.25 10.125C8.25 9.42881 8.52656 8.76113 9.01884 8.26884C9.51113 7.77656 10.1788 7.5 10.875 7.5C11.5712 7.5 12.2389 7.77656 12.7312 8.26884C13.2234 8.76113 13.5 9.42881 13.5 10.125V13.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M5.25 5.625C5.87132 5.625 6.375 5.12132 6.375 4.5C6.375 3.87868 5.87132 3.375 5.25 3.375C4.62868 3.375 4.125 3.87868 4.125 4.5C4.125 5.12132 4.62868 5.625 5.25 5.625Z" />
  </svg>
);

const YouTubeIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden
    className={cn('size-[24px] fill-none stroke-[#CED7DE]', className)}
  >
    <path
      d="M22.5406 6.42C22.4218 5.94541 22.1799 5.51057 21.8392 5.15941C21.4986 4.80824 21.0713 4.55318 20.6006 4.42C18.8806 4 12.0006 4 12.0006 4C12.0006 4 5.12057 4 3.40057 4.46C2.92982 4.59318 2.50255 4.84824 2.16192 5.19941C1.82129 5.55057 1.57936 5.98541 1.46057 6.46C1.14579 8.20556 0.991808 9.97631 1.00057 11.75C0.989351 13.537 1.14334 15.3213 1.46057 17.08C1.59153 17.5398 1.83888 17.9581 2.17872 18.2945C2.51855 18.6308 2.93939 18.8738 3.40057 19C5.12057 19.46 12.0006 19.46 12.0006 19.46C12.0006 19.46 18.8806 19.46 20.6006 19C21.0713 18.8668 21.4986 18.6118 21.8392 18.2606C22.1799 17.9094 22.4218 17.4746 22.5406 17C22.8529 15.2676 23.0069 13.5103 23.0006 11.75C23.0118 9.96295 22.8578 8.1787 22.5406 6.42V6.42Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.75 15.0166L15.5 11.7466L9.75 8.47656V15.0166Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LocationIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={cn('size-6 shrink-0 fill-white', className)}
    aria-hidden
  >
    <path
      d="M12 6C11.2583 6 10.5333 6.21993 9.91661 6.63199C9.29993 7.04404 8.81928 7.62971 8.53545 8.31494C8.25162 9.00016 8.17736 9.75416 8.32205 10.4816C8.46675 11.209 8.8239 11.8772 9.34835 12.4017C9.8728 12.9261 10.541 13.2833 11.2684 13.4279C11.9958 13.5726 12.7498 13.4984 13.4351 13.2145C14.1203 12.9307 14.706 12.4501 15.118 11.8334C15.5301 11.2167 15.75 10.4917 15.75 9.75C15.75 8.75544 15.3549 7.80161 14.6517 7.09835C13.9484 6.39509 12.9946 6 12 6ZM12 12C11.555 12 11.12 11.868 10.75 11.6208C10.38 11.3736 10.0916 11.0222 9.92127 10.611C9.75097 10.1999 9.70642 9.7475 9.79323 9.31105C9.88005 8.87459 10.0943 8.47368 10.409 8.15901C10.7237 7.84434 11.1246 7.63005 11.561 7.54323C11.9975 7.45642 12.4499 7.50097 12.861 7.67127C13.2722 7.84157 13.6236 8.12996 13.8708 8.49997C14.118 8.86998 14.25 9.30499 14.25 9.75C14.25 10.3467 14.0129 10.919 13.591 11.341C13.169 11.7629 12.5967 12 12 12ZM12 1.5C9.81273 1.50248 7.71575 2.37247 6.16911 3.91911C4.62247 5.46575 3.75248 7.56273 3.75 9.75C3.75 12.6937 5.11031 15.8138 7.6875 18.7734C8.84552 20.1108 10.1489 21.3151 11.5734 22.3641C11.6995 22.4524 11.8498 22.4998 12.0037 22.4998C12.1577 22.4998 12.308 22.4524 12.4341 22.3641C13.856 21.3147 15.1568 20.1104 16.3125 18.7734C18.8859 15.8138 20.25 12.6937 20.25 9.75C20.2475 7.56273 19.3775 5.46575 17.8309 3.91911C16.2843 2.37247 14.1873 1.50248 12 1.5ZM12 20.8125C10.4503 19.5938 5.25 15.1172 5.25 9.75C5.25 7.95979 5.96116 6.2429 7.22703 4.97703C8.4929 3.71116 10.2098 3 12 3C13.7902 3 15.5071 3.71116 16.773 4.97703C18.0388 6.2429 18.75 7.95979 18.75 9.75C18.75 15.1153 13.5497 19.5938 12 20.8125Z"
      fillOpacity="0.9"
    />
  </svg>
);

const GoogleIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={cn('size-6 shrink-0 fill-none', className)}
    aria-hidden
  >
    <path
      d="M21.7541 12.2199C21.7541 11.4182 21.6878 10.8332 21.5441 10.2266H12.2031V13.8449H17.6861C17.5756 14.744 16.9786 16.0982 15.6521 17.0082L15.6335 17.1293L18.5869 19.3715L18.7915 19.3916C20.6708 17.6907 21.7541 15.1882 21.7541 12.2199Z"
      fill="#4285F4"
    />
    <path
      d="M12.2002 21.7514C14.8864 21.7514 17.1415 20.8847 18.7886 19.3897L15.6492 17.0063C14.8091 17.5805 13.6815 17.9813 12.2002 17.9813C9.56932 17.9813 7.33635 16.2805 6.54036 13.9297L6.42369 13.9394L3.35266 16.2686L3.3125 16.378C4.94853 19.563 8.30907 21.7514 12.2002 21.7514Z"
      fill="#34A853"
    />
    <path
      d="M6.53907 13.9306C6.32904 13.3239 6.20749 12.6739 6.20749 12.0023C6.20749 11.3305 6.32904 10.6806 6.52802 10.0739L6.52246 9.94471L3.41294 7.57812L3.3112 7.62555C2.63691 8.94723 2.25 10.4314 2.25 12.0023C2.25 13.5731 2.63691 15.0572 3.3112 16.3789L6.53907 13.9306Z"
      fill="#FBBC05"
    />
    <path
      d="M12.2003 6.01997C14.0685 6.01997 15.3286 6.8108 16.0472 7.47168L18.855 4.785C17.1306 3.21417 14.8865 2.25 12.2003 2.25C8.3091 2.25 4.94854 4.43832 3.3125 7.62329L6.52933 10.0717C7.33638 7.72083 9.56936 6.01997 12.2003 6.01997Z"
      fill="#EB4335"
    />
  </svg>
);

const FacebookBrandIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={cn('size-6 shrink-0 fill-none', className)}
    aria-hidden
  >
    <path
      d="M22.5 12.0642C22.5 6.22974 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.22974 1.5 12.0642C1.5 17.337 5.33968 21.7075 10.3594 22.5V15.1179H7.69336V12.0642H10.3594V9.73675C10.3594 7.08911 11.927 5.62663 14.3254 5.62663C15.4738 5.62663 16.6758 5.83296 16.6758 5.83296V8.43274H15.3518C14.0475 8.43274 13.6406 9.24713 13.6406 10.0834V12.0642H16.5527L16.0872 15.1179H13.6406V22.5C18.6603 21.7075 22.5 17.337 22.5 12.0642Z"
      fill="#0C63D4"
    />
  </svg>
);

const PlayIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 13 15"
    className={cn('h-[15px] w-[13px] shrink-0 fill-white', className)}
  >
    <path d="M0 2.00317C0 0.420843 1.75049 -0.53484 3.08152 0.320818L11.383 5.65749C12.6076 6.44476 12.6076 8.23493 11.383 9.0222L3.08152 14.3589C1.75049 15.2145 0 14.2588 0 12.6765V2.00317Z" />
  </svg>
);

const ChevronRightIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    fill="none"
    aria-hidden
    className={cn('size-[18px] shrink-0', className)}
  >
    <path
      d="M6.75 13.5L11.25 9L6.75 4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

const PaginationPrevIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden
    className={cn(
      'hover:stroke-background-13 size-5 stroke-white transition-all duration-500 ease-in-out',
      className
    )}
  >
    <path
      d="M12.5 15L7.5 10L12.5 5"
      strokeOpacity="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PaginationNextIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    aria-hidden
    fill="none"
    className={cn(
      'hover:stroke-background-13 size-5 stroke-white transition-all duration-500 ease-in-out',
      className
    )}
  >
    <path
      d="M7.5 15L12.5 10L7.5 5"
      strokeOpacity="0.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ClipBoardIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 35 42"
    fill="none"
    className={cn('stroke-opai-purple h-10.5 w-[35px] shrink-0', className)}
  >
    <path d="M10.832 26.875H23.832" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.832 20.375H23.832" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M23.8324 4.125H31.957C32.388 4.125 32.8013 4.29621 33.1061 4.60095C33.4108 4.9057 33.582 5.31902 33.582 5.75V39.875C33.582 40.306 33.4108 40.7193 33.1061 41.024C32.8013 41.3288 32.388 41.5 31.957 41.5H2.70703C2.27605 41.5 1.86273 41.3288 1.55798 41.024C1.25324 40.7193 1.08203 40.306 1.08203 39.875V5.75C1.08203 5.31902 1.25324 4.9057 1.55798 4.60095C1.86273 4.29621 2.27605 4.125 2.70703 4.125H10.8316"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.20703 10.625V9C9.20703 6.84512 10.0631 4.77849 11.5868 3.25476C13.1105 1.73102 15.1771 0.875 17.332 0.875C19.4869 0.875 21.5535 1.73102 23.0773 3.25476C24.601 4.77849 25.457 6.84512 25.457 9V10.625H9.20703Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TimerIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 38 44"
    fill="none"
    className={cn('stroke-opai-purple h-11 w-[38px] shrink-0', className)}
  >
    <path
      d="M18.6641 42.875C28.5362 42.875 36.5391 34.8721 36.5391 25C36.5391 15.1279 28.5362 7.125 18.6641 7.125C8.79197 7.125 0.789062 15.1279 0.789062 25C0.789062 34.8721 8.79197 42.875 18.6641 42.875Z"
      strokeMiterlimit="10"
    />
    <path d="M18.6641 24.9965L26.7074 16.9531" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.7891 0.625H23.5391" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const StarIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 11 11"
    fill="none"
    className={cn('fill-opai-purple size-[11px] shrink-0', className)}
  >
    <path d="M5.21514 1.2258C5.38701 0.820568 5.97239 0.820568 6.14426 1.2258L7.15865 3.61752C7.23115 3.78836 7.39498 3.90508 7.58304 3.91986L10.216 4.12687C10.6622 4.16194 10.843 4.70789 10.5032 4.99341L8.49709 6.67856C8.35382 6.79895 8.29121 6.98782 8.33498 7.16777L8.94787 9.68744C9.05171 10.1143 8.57815 10.4518 8.19621 10.223L5.94197 8.87275C5.78095 8.7763 5.57845 8.7763 5.41744 8.87275L3.16319 10.223C2.78125 10.4518 2.30767 10.1143 2.41151 9.68744L3.0244 7.16777C3.06818 6.98782 3.0056 6.79895 2.86232 6.67856L0.856219 4.99341C0.516328 4.70789 0.697221 4.16194 1.14333 4.12687L3.77637 3.91986C3.96445 3.90508 4.12827 3.78836 4.20073 3.61752L5.21514 1.2258Z" />
  </svg>
);

const GloveIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17 16"
    fill="none"
    className={cn('size-5 shrink-0', className)}
    aria-hidden
  >
    <path
      d="M8.33203 15.5C12.4742 15.5 15.832 12.1421 15.832 8C15.832 3.85786 12.4742 0.5 8.33203 0.5C4.1899 0.5 0.832031 3.85786 0.832031 8C0.832031 12.1421 4.1899 15.5 8.33203 15.5Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.20703 12.3284L3.11936 11.7776C3.21101 11.7223 3.28691 11.6444 3.33978 11.5513C3.39266 11.4582 3.42075 11.3531 3.42135 11.2461L3.43719 8.42348C3.43786 8.30555 3.47187 8.19022 3.5353 8.0908L5.0855 5.6613C5.13132 5.58949 5.19134 5.52781 5.26186 5.48003C5.33239 5.43226 5.41193 5.39941 5.49562 5.38349C5.5793 5.36758 5.66535 5.36894 5.74849 5.38749C5.83163 5.40604 5.91009 5.44139 5.97907 5.49136L7.51468 6.60391C7.64475 6.69814 7.80609 6.73869 7.96525 6.71713L10.4247 6.38406C10.5755 6.36363 10.7137 6.28884 10.8134 6.17373L12.5444 4.17367C12.6495 4.05225 12.7038 3.89504 12.6961 3.73464L12.6048 1.83594"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.9485 13.9111L12.1101 13.071C12.0317 12.9924 11.9338 12.9361 11.8264 12.908L10.15 12.468C10.0012 12.429 9.87199 12.3364 9.78717 12.2081C9.70236 12.0798 9.66785 11.9246 9.69026 11.7724L9.87657 10.5071C9.8923 10.4003 9.93543 10.2994 10.0017 10.2142C10.0681 10.129 10.1553 10.0625 10.255 10.021L12.634 9.03224C12.7439 8.98657 12.8645 8.97322 12.9817 8.99375C13.0989 9.01429 13.2078 9.06786 13.2957 9.14817L15.2405 10.9269"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DownArrowLongIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 7 43"
    fill="none"
    className={cn('h-[43px] w-[7px] shrink-0', className)}
    aria-hidden
  >
    <path d="M0.665365 3C0.665365 4.47276 1.85927 5.66667 3.33203 5.66667C4.80479 5.66667 5.9987 4.47276 5.9987 3C5.9987 1.52724 4.80479 0.333333 3.33203 0.333333C1.85927 0.333333 0.665365 1.52724 0.665365 3ZM3.33203 43L6.21878 38L0.445278 38L3.33203 43ZM3.33203 3L2.83203 3L2.83203 38.5L3.33203 38.5L3.83203 38.5L3.83203 3L3.33203 3Z" />
  </svg>
);

const DownArrowIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    className={cn('size-6 shrink-0', className)}
    aria-hidden
  >
    <path
      d="M7.80469 10L11.8047 14L15.8047 10"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfinityIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 19 10"
    fill="none"
    className={cn('size-5 shrink-0', className)}
    aria-hidden
  >
    <path
      d="M7.6623 6.88538L6.98368 7.65165C6.45923 8.1761 5.79105 8.53325 5.06362 8.67795C4.33619 8.82264 3.58219 8.74838 2.89697 8.46455C2.21175 8.18072 1.62608 7.70007 1.21402 7.08339C0.801965 6.46671 0.582031 5.74168 0.582031 5C0.582031 4.25832 0.801965 3.5333 1.21402 2.91661C1.62608 2.29993 2.21175 1.81928 2.89697 1.53545C3.58219 1.25163 4.33619 1.17736 5.06362 1.32206C5.79105 1.46675 6.45923 1.8239 6.98368 2.34835L11.6804 7.65165C12.2048 8.1761 12.873 8.53325 13.6004 8.67795C14.3279 8.82264 15.0819 8.74838 15.7671 8.46455C16.4523 8.18072 17.038 7.70007 17.45 7.08339C17.8621 6.46671 18.082 5.74168 18.082 5C18.082 4.25832 17.8621 3.5333 17.45 2.91661C17.038 2.29993 16.4523 1.81928 15.7671 1.53545C15.0819 1.25163 14.3279 1.17736 13.6004 1.32206C12.873 1.46675 12.2048 1.8239 11.6804 2.34835L11.0018 3.11462"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RetailEcommerceIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 43 43"
    fill="none"
    className={cn('size-13 shrink-0 stroke-[#11141D]', className)}
    aria-hidden
  >
    <path
      d="M35.125 33.5H11.9318L6.26533 2.33431C6.19725 1.95989 5.99993 1.62124 5.70775 1.3774C5.41558 1.13356 5.0471 1 4.66654 1H1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 41.625C16.2437 41.625 18.0625 39.8062 18.0625 37.5625C18.0625 35.3188 16.2437 33.5 14 33.5C11.7563 33.5 9.9375 35.3188 9.9375 37.5625C9.9375 39.8062 11.7563 41.625 14 41.625Z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M35.125 41.625C37.3687 41.625 39.1875 39.8062 39.1875 37.5625C39.1875 35.3188 37.3687 33.5 35.125 33.5C32.8813 33.5 31.0625 35.3188 31.0625 37.5625C31.0625 39.8062 32.8813 41.625 35.125 41.625Z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.4545 25.375H35.9581C36.7192 25.375 37.4562 25.1079 38.0405 24.6202C38.6249 24.1325 39.0195 23.4552 39.1557 22.7064L41.625 9.125H7.5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HealthcareIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 52 52"
    fill="none"
    className={cn('size-13 shrink-0 stroke-[#11141D]', className)}
    aria-hidden
  >
    <path
      d="M6.5 8.125L6.5 32.5L6.5 43.875"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.5 24.375L12.1875 14.625L17.875 32.5L23.5625 19.5L29.25 32.5L34.9375 22.75L40.625 32.5L45.5 24.375"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FinanceIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 52 52"
    fill="none"
    className={cn('size-13 shrink-0 stroke-[#11141D]', className)}
    aria-hidden
  >
    <path
      d="M45.5 26C45.5 36.7696 36.7696 45.5 26 45.5C15.2304 45.5 6.5 36.7696 6.5 26C6.5 15.2304 15.2304 6.5 26 6.5C36.7696 6.5 45.5 15.2304 45.5 26Z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.5 8.125L19.5 11.375M19.5 27.625L19.5 30.875"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M29.25 19.5C29.25 17.0147 27.2353 15 24.75 15L21.5 15C19.0147 15 17 17.0147 17 19.5C17 21.9853 19.0147 24 21.5 24L24.75 24C27.2353 24 29.25 26.0147 29.25 28.5C29.25 30.9853 27.2353 33 24.75 33L21.5 33C19.0147 33 17 30.9853 17 28.5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LegalRealEstateIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 52 52"
    fill="none"
    className={cn('size-13 shrink-0 stroke-[#11141D]', className)}
    aria-hidden
  >
    <path
      d="M3.25 43.875L48.75 43.875"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.5 43.875L6.5 6.5L25.5 6.5L25.5 43.875"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25.5 13L42 19L42 43.875"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 16.25L13 16.25M16.25 29.25L16.25 29.25M13 37.375L13 37.375M35.75 37.375L35.75 37.375M35.75 29.25L35.75 29.25"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ExpandIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    className={cn('stroke-background-7 size-6', className)}
  >
    <path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 7H17V17" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Contact section icons (from contact.htm)
const ContactEmailIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    viewBox="0 0 36 36"
    fill="none"
    aria-hidden
    className={cn('size-9 shrink-0 stroke-white/90', className)}
  >
    <path
      d="M6 6H30C31.65 6 33 7.35 33 9V27C33 28.65 31.65 30 30 30H6C4.35 30 3 28.65 3 27V9C3 7.35 4.35 6 6 6Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M33 9L18 19.5L3 9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ContactPhoneIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={27}
    viewBox="0 0 27 27"
    fill="none"
    aria-hidden
    className={cn('size-9 shrink-0 stroke-white/90', className)}
  >
    <path
      d="M17.293 1.57812C19.2001 2.09104 20.939 3.09606 22.3355 4.49254C23.732 5.88901 24.737 7.62791 25.2499 9.53505"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.1289 5.92969C17.2732 6.23743 18.3165 6.84045 19.1544 7.67834C19.9923 8.51622 20.5953 9.55956 20.9031 10.7039"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.87948 13.5067C9.04643 15.8924 10.9803 17.8175 13.3714 18.9736C13.5463 19.0565 13.7398 19.0924 13.9328 19.0778C14.1259 19.0632 14.3118 18.9986 14.4723 18.8903L17.9929 16.5427C18.1486 16.4389 18.3278 16.3755 18.5141 16.3584C18.7005 16.3413 18.8882 16.3709 19.0602 16.4446L25.6467 19.2674C25.8704 19.3624 26.0572 19.5276 26.1789 19.7381C26.3006 19.9485 26.3506 20.1928 26.3214 20.4341C26.1132 22.0631 25.3184 23.5604 24.0858 24.6456C22.8532 25.7308 21.2673 26.3295 19.625 26.3295C14.5527 26.3295 9.68822 24.3146 6.10158 20.728C2.51495 17.1413 0.5 12.2768 0.5 7.20454C0.500086 5.56229 1.09877 3.97637 2.18396 2.74375C3.26914 1.51112 4.76641 0.716303 6.39542 0.508123C6.63675 0.478918 6.88104 0.528933 7.09148 0.650635C7.30191 0.772336 7.4671 0.959131 7.56214 1.18287L10.3874 7.77507C10.4604 7.94559 10.4902 8.13153 10.474 8.31633C10.4579 8.50114 10.3962 8.67907 10.2947 8.8343L7.95516 12.4089C7.84868 12.5698 7.78574 12.7554 7.77247 12.9478C7.75921 13.1402 7.79607 13.3328 7.87948 13.5067V13.5067Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ContactAddressIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={31}
    viewBox="0 0 24 31"
    fill="none"
    aria-hidden
    className={cn('size-9 shrink-0 stroke-white/90', className)}
  >
    <path
      d="M11.75 16.25C14.2353 16.25 16.25 14.2353 16.25 11.75C16.25 9.26472 14.2353 7.25 11.75 7.25C9.26472 7.25 7.25 9.26472 7.25 11.75C7.25 14.2353 9.26472 16.25 11.75 16.25Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23 11.75C23 21.875 11.75 29.75 11.75 29.75C11.75 29.75 0.5 21.875 0.5 11.75C0.5 8.76631 1.68526 5.90483 3.79505 3.79505C5.90483 1.68526 8.76631 0.5 11.75 0.5C14.7337 0.5 17.5952 1.68526 19.705 3.79505C21.8147 5.90483 23 8.76631 23 11.75V11.75Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BlurSvg: FC<IconProps & { idPrefix: string }> = ({ idPrefix, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="398"
    height="135"
    viewBox="0 0 398 135"
    fill="none"
    className={cn('absolute top-0 left-1/2 -translate-x-1/2 select-none', className)}
    aria-hidden
  >
    <g filter={`url(#${idPrefix}_0)`} style={{ mixBlendMode: 'plus-lighter' }}>
      <ellipse cx="199" cy="-16.5" rx="115" ry="67.5" fill="#8D59FF" />
    </g>
    <g opacity="0.6" filter={`url(#${idPrefix}_1)`} style={{ mixBlendMode: 'plus-lighter' }}>
      <ellipse cx="205.5" rx="67.5" ry="21" fill="white" />
    </g>
    <defs>
      <filter
        id={`${idPrefix}_0`}
        x="0"
        y="-168"
        width="398"
        height="303"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="42" result="effect1_foregroundBlur" />
      </filter>
      <filter
        id={`${idPrefix}_1`}
        x="87"
        y="-72"
        width="237"
        height="144"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="25.5" result="effect1_foregroundBlur" />
      </filter>
    </defs>
  </svg>
);

const GradientSvg: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={380}
    height={134}
    viewBox="0 0 380 134"
    fill="none"
    className={cn('pointer-events-none select-none', className)}
  >
    <g filter="url(#filter0_f_9805_101317)" style={{ mixBlendMode: 'plus-lighter' }}>
      <ellipse cx={199} cy="-17.5" rx={115} ry="67.5" fill="#8D59FF" />
    </g>
    <g opacity="0.6" filter="url(#filter1_f_9805_101317)" style={{ mixBlendMode: 'plus-lighter' }}>
      <ellipse cx="205.5" cy={-1} rx="67.5" ry={21} fill="white" />
    </g>
    <defs>
      <filter
        id="filter0_f_9805_101317"
        x={0}
        y={-169}
        width={398}
        height={303}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation={42} result="effect1_foregroundBlur_9805_101317" />
      </filter>
      <filter
        id="filter1_f_9805_101317"
        x={87}
        y={-73}
        width={237}
        height={144}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="25.5" result="effect1_foregroundBlur_9805_101317" />
      </filter>
    </defs>
  </svg>
);

const SearchIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className={cn('size-6 shrink-0 stroke-white', className)}
  >
    <path
      d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M20.9984 20.9984L16.6484 16.6484" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CrossIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    className={cn('size-5 shrink-0 stroke-white', className)}
  >
    <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
  </svg>
);

const CheckIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 10"
    fill="none"
    aria-hidden
    className={cn('h-2 w-3 shrink-0 stroke-white/90', className)}
  >
    <path d="M1 5L4.5 8.5L11 1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </svg>
);

const LightningIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
    className={cn('size-6 shrink-0 stroke-white', className)}
  >
    <path
      d="M13 2L4 14H12L11 22L20 10H12L13 2Z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const ServiceGradientIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="380"
    height="134"
    viewBox="0 0 380 134"
    fill="none"
    aria-hidden
    className={cn(className)}
  >
    <g filter="url(#detailsSidebarFilter0)" style={{ mixBlendMode: 'plus-lighter' }}>
      <ellipse cx="199" cy="-17.5" rx="115" ry="67.5" fill="#8D59FF" />
    </g>
    <g opacity="0.6" filter="url(#detailsSidebarFilter1)" style={{ mixBlendMode: 'plus-lighter' }}>
      <ellipse cx="205.5" cy="-1" rx="67.5" ry="21" fill="white" />
    </g>
    <defs>
      <filter
        id="detailsSidebarFilter0"
        x="0"
        y="-169"
        width="398"
        height="303"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="42" result="effect1_foregroundBlur_9805_101317" />
      </filter>
      <filter
        id="detailsSidebarFilter1"
        x="87"
        y="-73"
        width="237"
        height="144"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="25.5" result="effect1_foregroundBlur_9805_101317" />
      </filter>
    </defs>
  </svg>
);

const IconGradient: FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="380"
      height="134"
      viewBox="0 0 380 134"
      fill="none"
      aria-hidden
      className={cn(className)}
    >
      <g filter="url(#detailsSidebarFilter0)" style={{ mixBlendMode: 'plus-lighter' }}>
        <ellipse cx="199" cy="-17.5" rx="115" ry="67.5" fill="#8D59FF" />
      </g>
      <g
        opacity="0.6"
        filter="url(#detailsSidebarFilter1)"
        style={{ mixBlendMode: 'plus-lighter' }}
      >
        <ellipse cx="205.5" cy="-1" rx="67.5" ry="21" fill="white" />
      </g>
      <defs>
        <filter
          id="detailsSidebarFilter0"
          x="0"
          y="-169"
          width="398"
          height="303"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="42" result="effect1_foregroundBlur_9805_101317" />
        </filter>
        <filter
          id="detailsSidebarFilter1"
          x="87"
          y="-73"
          width="237"
          height="144"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="25.5" result="effect1_foregroundBlur_9805_101317" />
        </filter>
      </defs>
    </svg>
  );
};

const ClientIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden
    className={cn('size-4 shrink-0 stroke-white stroke-1', className)}
  >
    <path
      d="M8 10C10.2091 10 12 8.20914 12 6C12 3.79086 10.2091 2 8 2C5.79086 2 4 3.79086 4 6C4 8.20914 5.79086 10 8 10Z"
      strokeOpacity="0.6"
      strokeMiterlimit="10"
    />
    <path
      d="M1.9375 13.4994C2.55222 12.4354 3.43613 11.5519 4.50043 10.9376C5.56472 10.3234 6.77192 9.99999 8.00076 10C9.22959 10 10.4368 10.3234 11.5011 10.9377C12.5654 11.552 13.4492 12.4355 14.0639 13.4995"
      strokeOpacity="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CalendarIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden
    className={cn('size-4 shrink-0 stroke-white stroke-1', className)}
  >
    <path
      d="M13 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V3C13.5 2.72386 13.2761 2.5 13 2.5Z"
      strokeOpacity="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M11 1.5V3.5" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 1.5V3.5" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.5 5.5H13.5" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ProjectServicesIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="13"
    viewBox="0 0 11 13"
    fill="none"
    aria-hidden
    className={cn('size-4 shrink-0 stroke-white stroke-1', className)}
  >
    <path
      d="M10.5 11.5V1.5C10.5 0.947715 10.0523 0.5 9.5 0.5L1.5 0.5C0.947715 0.5 0.5 0.947715 0.5 1.5V11.5C0.5 12.0523 0.947715 12.5 1.5 12.5H9.5C10.0523 12.5 10.5 12.0523 10.5 11.5Z"
      strokeOpacity="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DetailsLocationIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden
    className={cn('size-4 shrink-0 stroke-white stroke-1', className)}
  >
    <path
      d="M8 8.5C9.10457 8.5 10 7.60457 10 6.5C10 5.39543 9.10457 4.5 8 4.5C6.89543 4.5 6 5.39543 6 6.5C6 7.60457 6.89543 8.5 8 8.5Z"
      strokeOpacity="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 6.5C13 11 8 14.5 8 14.5C8 14.5 3 11 3 6.5C3 5.17392 3.52678 3.90215 4.46447 2.96447C5.40215 2.02678 6.67392 1.5 8 1.5C9.32608 1.5 10.5979 2.02678 11.5355 2.96447C12.4732 3.90215 13 5.17392 13 6.5V6.5Z"
      strokeOpacity="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DurationIcon: FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden
    className={cn('size-4 shrink-0 stroke-white stroke-1', className)}
  >
    <path
      d="M8 13.5C11.0376 13.5 13.5 11.0376 13.5 8C13.5 4.96243 11.0376 2.5 8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 11.0376 4.96243 13.5 8 13.5Z"
      strokeOpacity="0.6"
      strokeMiterlimit="10"
    />
    <path
      d="M8 7.99831L10.4749 5.52344"
      strokeOpacity="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M6.5 0.5H9.5" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export {
  BlurSvg,
  CalendarIcon,
  CheckIcon,
  ChevronRightIcon,
  ClientIcon,
  ClipBoardIcon,
  ContactAddressIcon,
  ContactEmailIcon,
  ContactPhoneIcon,
  CrossIcon,
  DetailsLocationIcon,
  DownArrowIcon,
  DownArrowLongIcon,
  DurationIcon,
  ExpandIcon,
  FacebookBrandIcon,
  FacebookIcon,
  FinanceIcon,
  GloveIcon,
  GoogleIcon,
  GradientSvg,
  HealthcareIcon,
  IconGradient,
  InfinityIcon,
  InstagramIcon,
  LegalRealEstateIcon,
  LightningIcon,
  LinkedInIcon,
  LocationIcon,
  PaginationNextIcon,
  PaginationPrevIcon,
  PlayIcon,
  ProjectServicesIcon,
  RetailEcommerceIcon,
  SearchIcon,
  ServiceGradientIcon,
  StarIcon,
  TimerIcon,
  XIcon,
  YouTubeIcon,
};
