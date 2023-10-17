import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/20/solid';
import { PaginationParamsComponent } from '@github-commit-history-viewer/shared/types';
import { PaginationActionButton } from './PaginationActionButton';
import React from 'react';

export const Pagination = ({ pagination, updatePagination }: PaginationParamsComponent) => {
  const { next, perPage = 0, page = 0, last, prev, first, count = 0 } = pagination ?? {};
  const updatePage = (page = 1) => updatePagination({ page });

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white">
      <div className=" sm:flex sm:flex-1 sm:items-center sm:justify-between content-center items-center ">
        <div className="flex justify-center my-4">
          <p className="text-sm text-gray-700">
            Showing{' '}
            <span className="font-medium">{page * perPage + (count ? 1 : 0) - perPage}</span> to{' '}
            <span className="font-medium">{page * perPage - (perPage - count)}</span>
            {/*of{' '}*/}
            {/*<span className="font-medium">{perPage * (last || page) - (perPage - count)}</span>{' '}*/}
            {/*results*/}
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm">
            <PaginationActionButton page={first} title="First" onClick={() => updatePage(first)}>
              <ChevronDoubleLeftIcon className="h-5 w-5" />
              <span>First</span>
            </PaginationActionButton>

            <PaginationActionButton page={prev} onClick={() => updatePage(prev)}>
              <ChevronLeftIcon className="h-5 w-5" />
              <span>Prev</span>
            </PaginationActionButton>

            <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              {page || 0}
            </button>

            <PaginationActionButton page={next} onClick={() => updatePage(next)}>
              <span>Next</span>
              <ChevronRightIcon className="h-5 w-5" />
            </PaginationActionButton>

            <PaginationActionButton page={last} onClick={() => updatePage(last)}>
              <span>Last</span>
              <ChevronDoubleRightIcon className="h-5 w-5" />
            </PaginationActionButton>
          </nav>
        </div>
      </div>
    </div>
  );
};
