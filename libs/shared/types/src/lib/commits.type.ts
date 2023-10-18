import { PaginationParams } from './pagination.type';

export interface FindAllCommitsRequest {
  readonly owner: string;
  readonly repo: string;
  readonly perPage: number;
  readonly page: number;
}

export interface Commit {
  sha: string;
  message: string;
  date: Date;
  author: CommitAuthor;
}

export interface CommitAuthor {
  login: string;
  avatarUrl: string;
}

export interface FindAllCommitsResponse {
  data: Commit[];
  pagination: PaginationParams;
}

export interface CommitsListProps {
  commits?: Commit[];
  isLoading: boolean;
}
