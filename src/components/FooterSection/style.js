import { css } from '@emotion/react';
import Background from 'src/assets/images/thank-you.jpg';

export const styWrapper = css`
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  background-filter: blur(2px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .main-font,
  .info {
    color: #fff;
  }

  .sub-title {
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 20px;
  }

  p {
    font-size: 16px;
    margin-top: 8px;
  }

  .sub-title {
    font-size: 18px;
    margin: 0 0 8px 0;

    p {
      font-size: 16px;
    }
  }

  p {
    font-size: 14px;
  }
`;
