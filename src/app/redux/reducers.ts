import { REACTIFY_FIGMA_SERVICE_REDUCER_KEY, reactifyFigmaService } from '@/app/redux/services';

import { reactifyFigmaSlice } from '@/app/redux/features'

export const reducers = {
  [REACTIFY_FIGMA_SERVICE_REDUCER_KEY]: reactifyFigmaService.reducer,
  [reactifyFigmaSlice.name]: reactifyFigmaSlice.reducer,
}