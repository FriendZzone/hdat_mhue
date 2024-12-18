import { css, keyframes } from '@emotion/react';
import Background from 'src/assets/images/bg-welcome.jpg';

export const styHero = css`
  width: 100%;
  height: 100vh;
`;

const radarAnimation = keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  60% {
    box-shadow: 0 0 0 30px rgba(255,255,255,.1);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const upAndDownAnimation = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-5px); }
`;

export const styScrollWrapper = css`
  #scroll {
    display: flex;
    justify-content: center;
    cursor: pointer;

    span {
      position: absolute;
      bottom: 46px;
      text-align: center;
      color: #fff;
    }

    .text {
      animation: ${upAndDownAnimation} 1s infinite alternate;
    }

    .text {
      bottom: 80px;
      font-size: 12px;
    }

    .text {
      bottom: 60px;
      font-size: 12px;
    }
  }

  .scroll__icon {
    .button {
      position: absolute;
      bottom: 46px;
      left: 50%;
      z-index: 2;
      display: inline-block;
      transform: translate(0, -50%);
      color: #fff;
      letter-spacing: 0.1em;
      text-decoration: none;
      transition: opacity 0.3s;

      span::before {
        position: absolute;
        top: -23px;
        left: -22px;
        z-index: -1;
        content: '';
        width: 44px;
        height: 44px;
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1);
        border-radius: 100%;
        opacity: 0;
        animation: ${radarAnimation} 3s infinite;
        box-sizing: border-box;
      }

      span::after {
        position: absolute;
        top: 50%;
        left: 50%;
        content: '';
        width: 16px;
        height: 16px;
        margin: -12px 0 0 -8px;
        border-left: 1px solid #fff;
        border-bottom: 1px solid #fff;
        transform: rotate(-45deg);
        box-sizing: border-box;
      }
    }

    &button:hover {
      opacity: 0.5;
    }

    .button {
      bottom: 80px;
    }

    .button {
      bottom: 65px;
    }
  }
`;

export const styBackground = css`
  background-size: cover;
  background-image: url(${Background});
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 40px;
  }

  .sub-title {
    font-size: 28px;
  }

  .title {
    font-size: 36px;
  }

  .sub-title {
    font-size: 28px;
  }
`;

export const styWrapper = css`
  color: #fff;
  margin-top: -8em;

  img {
    max-width: 80px;
    margin-bottom: 24px;
  }

  h1 {
    margin-bottom: 0px;
    font-size: 72px;
    line-height: 1.5;
    font-family: 'Dancing Script', cursive;
    color: #fff;
  }

  h2 {
    color: #fff;
    font-size: 22px;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 30px;
  }

  h4 {
    font-family: 'Dancing Script', cursive;
    margin: 0;
    color: #fff;
    font-size: 30px;
  }

  .getting-married {
    margin-top: -12px;
  }

  .to-dearest {
    font-size: 16px;
    color: #f1f1f1b3;
    margin-bottom: 8px;
  }

  .to-dearest-name {
    border-bottom: 1px solid;
    padding-bottom: 12px;
    max-width: 250px;
    margin: auto auto 30px auto;
  }

  .margin__bottom {
    margin-bottom: 3em !important;
  }

  a {
    color: #646464;
  }

  img {
    max-width: 40px;
    margin-top: 24px;
    margin-bottom: 8px;
  }

  .to-dearest {
    margin-bottom: 8px;
    font-size: 16px;
  }

  .to-dearest-name {
    margin: auto auto 16px auto;
  }
`;

export const styWrapperCount = css`
  display: inline-block;
  width: 100px;
  height: 100px;
  background: #646464;
  margin: 8px;
  border-radius: 50%;
  position: relative;
  animation: pulse 1s ease infinite;
  color: #fff;

  h3 {
    font-size: 30px;
    color: #fff;
    margin: 20px 0 0 0;
  }

  width: 75px;
  height: 75px;
  margin: 4px;
  font-size: 12px;

  h3 {
    font-size: 24px;
  }

  width: 55px;
  height: 55px;

  h3 {
    margin-top: 12px;
    margin-bottom: -4px;
    font-size: 16px;
  }

  span {
    font-size: 10px;
  }
`;

export const styMargin = (px) => css`
  margin: ${px};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`;

export const styButtonWrapper = css`
  display: flex;
  justify-content: center;

  .btn {
    background: #646464;
    color: #fff;
    border: none;
  }
`;
