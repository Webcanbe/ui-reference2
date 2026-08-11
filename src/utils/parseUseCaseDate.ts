/**
 * Parses completionDate in "DD - MM - YYYY" format to a timestamp for sorting (latest first).
 */
const parseUseCaseDate = (dateStr: string | undefined): number => {
  if (!dateStr || typeof dateStr !== 'string') return 0;
  const parts = dateStr.split(/\s*-\s*/).map((p) => p.trim());
  if (parts.length !== 3) return 0;
  const [day, month, year] = parts.map(Number);
  if (!day || !month || !year) return 0;
  return new Date(year, month - 1, day).getTime();
};

export default parseUseCaseDate;
