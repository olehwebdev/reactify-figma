import { createBaseApi } from '@/app/redux/api';

export const REACTIFY_FIGMA_SERVICE_REDUCER_KEY = 'reactifyFigma';

const baseApi = createBaseApi(REACTIFY_FIGMA_SERVICE_REDUCER_KEY);

export const reactifyFigmaService = baseApi.injectEndpoints({
  endpoints: () => ({})
})