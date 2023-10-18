import {
  CommitGithubApiResponse,
  PaginationParams,
} from '@github-commit-history-viewer/shared/types';
import { AxiosError } from 'axios';
import { commitsHttpErrors } from '../../../shared/constants/errors.constant';
import { HttpException } from '@nestjs/common';

// Get pagination links from GitHub API
export const getPaginationFromLinks = (headerLink: string): PaginationParams => {
  const links: string[] = headerLink?.split(', ');
  if (!links?.length) return {};

  return links.reduce((acc, link) => {
    // Extract the URL and rel attribute from each link using regular expressions
    const urlMatch = link.match(/<([^>]+)>/);
    const relMatch = link.match(/rel="([^"]+)"/);

    if (urlMatch && relMatch) {
      // Extract the URL, rel, and query parameters (page and per_page)
      const url = urlMatch[1];
      const rel = relMatch[1];
      const urlParams = new URL(url);
      const queryParams = new URLSearchParams(urlParams.search);

      acc[rel] = Number(queryParams.get('page'));
    }
    return acc;
  }, {});
};

export const mapCommitResponse = (commitApiResponse: CommitGithubApiResponse) => {
  const { sha, commit } = commitApiResponse;
  const { login, avatar_url } = commitApiResponse.author ?? {};
  const { message, author } = commit;
  const { date, name } = author;

  return { sha, message, date, author: { login: login || name, avatarUrl: avatar_url } };
};

export const handleCommitsErrors = ({ response }: AxiosError) => {
  const { status } = response;
  const errorMsg = commitsHttpErrors[status] || 'We have a problem, please try later';
  throw new HttpException(errorMsg, status);
};
