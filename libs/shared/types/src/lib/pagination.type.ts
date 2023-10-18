interface Pagination {
  perPage: number;
  page: number;
  first: number;
  prev: number;
  next: number;
  last: number;
  count: number;
  time: number;
}

export type PaginationParams = Partial<Pagination>;

export interface PaginationParamsComponent {
  pagination?: PaginationParams;
  updatePagination: (pagination: PaginationParams) => void;
}
