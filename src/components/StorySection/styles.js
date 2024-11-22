import { css } from '@emotion/react';

export const styWrapper = (noImage) => css`
  ${noImage && `margin-left: 100px;`}

  @media screen and (max-width: 991px) {
    ${noImage && `margin-left: 100px;`}
  }
`;
