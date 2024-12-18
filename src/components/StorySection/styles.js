import { css } from '@emotion/react';

export const styWrapper = (noImage) => css`
  ${noImage && `margin-left: 100px;`}
`;
