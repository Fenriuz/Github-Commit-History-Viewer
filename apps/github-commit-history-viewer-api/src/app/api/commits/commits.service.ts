import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosRequestConfig } from 'axios';
import {
  Commit,
  CommitGithubApiResponse,
  FindAllCommitsRequest,
} from '@github-commit-history-viewer/shared/types';
import { getPaginationFromLinks, handleCommitsErrors, mapCommitResponse } from './commits.utils';

@Injectable()
export class CommitsService {
  constructor(private readonly httpService: HttpService) {}

  async findAll({ owner, repo, page, perPage }: FindAllCommitsRequest) {
    const url = `https://api.github.com/repos/${owner}/${repo}/commits`;
    const urlConfig: AxiosRequestConfig = { params: { per_page: perPage, page } };

    const apiResponse$ = this.httpService
      .get<CommitGithubApiResponse[]>(url, urlConfig)
      .pipe(catchError(handleCommitsErrors));

    const { data: commitsApiResponse, headers } = await firstValueFrom(apiResponse$);

    const data: Commit[] = commitsApiResponse.map(mapCommitResponse);
    const paginationFromLinks = getPaginationFromLinks(headers['link']);

    return {
      data,
      pagination: { perPage, page, count: data.length, ...paginationFromLinks },
    };
  }
}
