import React, { ButtonHTMLAttributes, ReactNode } from 'react';

export const PaginationActionButton = ({
  page,
  children,
  title,
  ...attributes
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  page?: number;
  children?: ReactNode;
  title?: string;
}) => {
  return (
    <button
      disabled={!page}
      {...attributes}
      className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
    >
      {children}
    </button>
  );
};
