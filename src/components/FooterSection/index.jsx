import { bool } from 'prop-types';
import React, { Fragment } from 'react';
import { styWrapper } from './style';

function FooterSection() {
  return (
    <Fragment>
      <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Thank you!</h2>
              <p className="info">Sự hiện diện của quý vị là niềm vinh hạnh cho gia đình chúng tôi.</p>
            </div>
          </div>
        </div>
      </div>
      <footer id="fh5co-footer" role="contentinfo">
        <div className="container">
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <p>
                <small className="block">&copy; 2024 Hoàng Đạt - Minh Huệ. All Rights Reserved.</small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(FooterSection);
