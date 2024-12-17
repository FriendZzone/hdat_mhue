import { node } from 'prop-types';
import { Fragment } from 'react';

import 'src/assets/css/bootstrap.css';
import 'src/assets/css/icomoon.css';
import 'src/assets/css/style.css';

function MainLayout({ children }) {
  return (
    <Fragment>
      <div id="page">{children}</div>
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
