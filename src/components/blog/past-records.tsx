import { cn } from '@/src/utils/cn';
import Link from 'next/link';

interface DateRecord {
  date: string;
  displayDate: string;
  count: number;
}

interface PastRecordsProps {
  records: DateRecord[];
  currentDate: string | null;
  totalCount?: number;
}

function PastRecordsItem({
  date,
  displayDate,
  count,
  isActive,
}: DateRecord & { isActive: boolean }) {
  const href = isActive ? '/blog' : `/blog?date=${encodeURIComponent(date)}`;
  const countDisplay = Number.isFinite(count) ? count : 0;
  return (
    <li key={date}>
      <Link
        href={href}
        className={cn(
          'flex items-center justify-between rounded-md p-2 text-white/60 transition-all duration-500',
          'hover:bg-background-7 hover:text-background-13',
          isActive && 'bg-background-7 text-background-13'
        )}
      >
        <span>{displayDate}</span>
        <span>({countDisplay})</span>
      </Link>
    </li>
  );
}

const PastRecords = ({ records, currentDate, totalCount = 0 }: PastRecordsProps) => {
  const allCountDisplay = Number.isFinite(totalCount) ? totalCount : 0;
  const listItems = records.map((record) => (
    <PastRecordsItem
      key={record.date}
      {...record}
      isActive={currentDate === record.date}
    />
  ));

  return (
    <div>
      <p className="lg:text-sora-heading-5 text-sora-heading-6 mb-6 font-normal text-white/90">
        Past records
      </p>
      <ul>
        <li>
          <Link
            href="/blog"
            className={cn(
              'flex items-center justify-between rounded-md p-2 text-white/60 transition-all duration-500',
              'hover:bg-background-7 hover:text-background-13',
              currentDate === null && 'bg-background-7 text-background-13'
            )}
          >
            <span>All</span>
            <span>({allCountDisplay})</span>
          </Link>
        </li>
        {listItems}
      </ul>
    </div>
  );
};

export default PastRecords;
