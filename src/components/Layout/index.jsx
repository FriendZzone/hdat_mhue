import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { node } from 'prop-types';

import Favicon from 'src/assets/images/dinda-indra.png';
import 'src/assets/css/icomoon.css';
import 'src/assets/css/bootstrap.css';
import 'src/assets/css/style.css';

const IMAGE_URL = `https://cdn.shopify.com/s/files/1/0886/8672/3346/files/cover_3.jpg?v=1732292006`;
const META_DESCRIPTION = `helmet Trong không gian ấm cúng và tràn ngập niềm vui, chúng ta cùng nhau chứng kiến một sự kiện vô cùng ý nghĩa: ngày mà hai trái tim, hai cuộc đời, Hoàng Đạt và Minh Huệ, chính thức hòa quyện để xây dựng tổ ấm hạnh phúc`;

function MainLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Đạt Huệ ❤️ Wedding</title>

        {/* Favicon */}
        <link rel="icon" type="image/png" href={Favicon} />

        {/* font and SEO tags */}
        <meta property="og:title" content="The Wedding of Đạt & Huệ title helmet" />
        <meta property="og:image" content={IMAGE_URL} />
        <meta property="og:url" content="https://thekusuma.com" />
        <meta property="og:site_name" content="The Wedding of Đạt & Huệ site_name helmet" />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="1234567890" />
        <meta name="twitter:title" content="The Wedding of Đạt & Huệ" />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:image" content={IMAGE_URL} />
        <meta name="twitter:url" content="https://thekusuma.com" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@idindrakusuma" />

        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet"></link>
      </Helmet>
      <div id="page">{children}</div>
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
