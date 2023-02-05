import { parseISO, format } from 'date-fns';

export default function Date({ dateString,dateFormate }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, dateFormate)}</time>;
}