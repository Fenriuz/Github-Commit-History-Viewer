import { CommitItem } from './CommitItem';
import { CommitItemSkeleton } from './CommitItemSkeleton';
import { CommitsListProps } from '@github-commit-history-viewer/shared/types';

export const CommitsList = ({ commits = [], isLoading }: CommitsListProps) => {
  if (isLoading) {
    return <CommitItemSkeleton quantity={4} />;
  }

  return (
    <ul className="divide-y divide-gray-100 flex flex-col items-center">
      {commits?.map((commit) => (
        <li key={commit.sha} className="py-2 w-full">
          <CommitItem {...commit} />
        </li>
      ))}
    </ul>
  );
};
