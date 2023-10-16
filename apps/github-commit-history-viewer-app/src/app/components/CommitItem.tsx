import Markdown from 'react-markdown';
import dayjs from 'dayjs';
import { useRef } from 'react';
import { useTruncatedElement } from '../hooks/useTruncatedElement';
import { Commit } from '@github-commit-history-viewer/shared/types';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export const CommitItem = ({ author, message, date }: Commit) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { isTruncated, isReadingMore, setIsReadingMore } = useTruncatedElement(ref);

  return (
    <div className="bg-gray-50 rounded-md p-2">
      <div className="mb-1 flex h-4/5 text-sm justify-between max-w-full">
        {!isReadingMore ? (
          <p ref={ref} className={`whitespace-nowrap ${isTruncated && `truncate`}`}>
            {message}
          </p>
        ) : (
          <Markdown className="whitespace-pre-wrap break-all markdown-viewer">{message}</Markdown>
        )}

        {isTruncated && (
          <button
            type="button"
            className="ml-2 h-4/5 rounded-sm bg-gray-400 px-2 text-sm font-medium text-white hover:bg-gray-600"
            onClick={() => setIsReadingMore((hide) => !hide)}
          >
            …
          </button>
        )}
      </div>
      <div className="flex min-w-0 gap-x-4 items-center">
        <img
          className="h-10 w-10 flex-none rounded-full bg-gray-50"
          src={author.avatarUrl}
          alt="User avatar"
        />
        <div className="min-w-0 flex gap-1">
          <p className="text-xs font-semibold text-gray-900">{author.login}</p>
          <p className="truncate text-xs text-gray-500">committed {dayjs(date).fromNow()}</p>
        </div>
      </div>
    </div>
  );
};
