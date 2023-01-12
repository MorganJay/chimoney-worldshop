import { AxiosResponse } from 'axios';

import http from './HttpService';
import { AssetsResponse } from '../types/assets';

export const getAssetsAsync = async (): Promise<
  AxiosResponse<AssetsResponse>
> => {
  return await http.get<any, AxiosResponse<AssetsResponse>, any>('info/assets');
};
