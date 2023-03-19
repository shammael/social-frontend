import { formatDistanceToNow } from 'date-fns';

export const fromDistanceToNow = (data: Date): string => {
  return formatDistanceToNow(data);
};
