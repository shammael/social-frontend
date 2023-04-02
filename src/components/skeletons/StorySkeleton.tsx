import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const StorySkeleton = () => {
  return <Skeleton borderRadius={10} height={200} width={120} count={5} />;
};

export default StorySkeleton;
