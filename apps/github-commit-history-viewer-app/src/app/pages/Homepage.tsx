import { CommitsList } from '../components/CommitsList';
import { FormEvent, useState } from 'react';
import { updateUrlQueryParams, validateGitHubURL } from '../utils/url.util';
import { environment } from '../environment/environment';
import { RepositorySearch } from '../components/RepositorySearch';
import {
  FindAllCommitsResponse,
  PaginationParams,
} from '@github-commit-history-viewer/shared/types';
import { useAxios } from '../hooks/useAxios';
import { Pagination } from '../components/Pagination';

export function Homepage() {
  const [baseUrl, setBaseUrl] = useState('https://github.com/facebook/react');
  const [apiUrl, setApiUrl] = useState('');
  const [searchError, setSearchError] = useState('');

  const { response, error, isLoading } = useAxios<FindAllCommitsResponse>(apiUrl, {
    method: 'GET',
  });

  const changeApiUrl = (event: FormEvent<HTMLElement>) => {
    event.preventDefault();

    const { isValid, paramRoute } = validateGitHubURL(baseUrl);
    if (!isValid) {
      return setSearchError('Invalid URL');
    }

    setSearchError('');
    const repoUrl = `${environment.apiUrl}commits/${paramRoute}`;
    const commitsUrl = updateUrlQueryParams(repoUrl, {
      page: 1,
      perPage: 10,
      time: Date.now(),
    });
    setApiUrl(commitsUrl);
  };

  const updatePagination = (pagination: PaginationParams) => {
    const updatedUrl = updateUrlQueryParams(apiUrl, pagination);
    setApiUrl(updatedUrl);
  };

  return (
    <div className="container mx-auto px-6 w-11/12 sm:w-4/6 py-5">
      <RepositorySearch
        baseUrl={baseUrl}
        setBaseUrl={setBaseUrl}
        changeApiUrl={changeApiUrl}
        error={searchError || error?.message}
      />
      <CommitsList commits={response?.data} isLoading={isLoading} />
      <Pagination updatePagination={updatePagination} pagination={response?.pagination} />
    </div>
  );
}
