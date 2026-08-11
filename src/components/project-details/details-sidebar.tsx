import {
  CalendarIcon,
  ClientIcon,
  DetailsLocationIcon,
  DurationIcon,
  ProjectServicesIcon,
  ServiceGradientIcon,
} from '@/src/components/shared/icon';
import type { ProjectDetails } from '@/src/interface';

interface DetailsSidebarProps {
  details: ProjectDetails;
}

const DetailsSidebar = ({ details }: DetailsSidebarProps) => {
  return (
    <aside className="w-full max-w-full xl:max-w-[390px]">
      <div className="bg-background-6 border-stroke-1/11 relative w-full max-w-[390px] space-y-6 overflow-hidden rounded-2xl border p-8">
        <figure className="absolute top-0 left-1/2 z-0 -translate-x-1/2">
          <ServiceGradientIcon />
        </figure>
        <h3 className="text-sora-heading-5 relative z-10 font-normal text-white/90">Details</h3>
        <div className="relative z-10">
          <div className="border-stroke-1/11 flex items-center justify-between border-b py-3">
            <p className="text-tagline-2 flex items-center gap-x-1.5 font-normal text-white/80">
              <ClientIcon />
              <span>Client</span>
            </p>
            <p className="text-tagline-3 font-normal text-white/60">{details.client}</p>
          </div>
          <div className="border-stroke-1/11 flex items-center justify-between border-b py-3">
            <p className="text-tagline-2 flex items-center gap-x-1.5 font-normal text-white/80">
              <CalendarIcon />
              <span>Year</span>
            </p>
            <p className="text-tagline-3 font-normal text-white/60">{details.year}</p>
          </div>
          <div className="border-stroke-1/11 flex items-center justify-between border-b py-3">
            <p className="text-tagline-2 flex items-center gap-x-1.5 font-normal text-white/80">
              <ProjectServicesIcon />
              <span>Services</span>
            </p>
            <p className="text-tagline-3 font-normal text-white/60">{details.services}</p>
          </div>
          <div className="border-stroke-1/11 flex items-center justify-between border-b py-3">
            <p className="text-tagline-2 flex items-center gap-x-1.5 font-normal text-white/80">
              <DetailsLocationIcon />
              <span>Location</span>
            </p>
            <p className="text-tagline-3 font-normal text-white/60">{details.location}</p>
          </div>
          <div className="flex items-center justify-between py-3">
            <p className="text-tagline-2 flex items-center gap-x-1.5 font-normal text-white/80">
              <DurationIcon />
              <span>Duration</span>
            </p>
            <p className="text-tagline-3 font-normal text-white/60">{details.duration}</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DetailsSidebar;
