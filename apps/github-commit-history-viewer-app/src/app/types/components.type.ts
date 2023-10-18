import { Dispatch, FormEvent, SetStateAction } from 'react';

export interface RepositorySearchProps {
  baseUrl: string;
  setBaseUrl: Dispatch<SetStateAction<string>>;
  changeApiUrl: ChangeApiUrl;
  error?: string;
}

type ChangeApiUrl = (event: FormEvent<HTMLElement>) => void;
