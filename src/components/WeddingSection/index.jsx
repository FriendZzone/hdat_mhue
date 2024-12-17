import { bool } from 'prop-types';
import React, { Fragment } from 'react';

import ButtonLive from './ButtonLive';
import { styWrapper } from './styles';
import WeddingInfoBox from './WeddingInfoBox';

function WeddingSection({ isInvitation }) {
  return (
    <Fragment>
      <hr />
      <h1 className="main-font text-center">Sự kiện cưới</h1>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row"></div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <WeddingInfoBox
                title="Tiệc cưới nhà trai"
                date="16h Thứ 7 ngày 21/12/2024"
                description="Nhà văn hoá thôn Yên Quán, Tân Phú, Quốc Oai, Hà Nội"
              />
              <WeddingInfoBox
                title="Tiệc cưới nhà gái"
                date="16h Thứ 7 ngày 21/12/2024"
                description="Tư gia thôn Nghĩa Phú, Cẩm Vũ, Cẩm Giàng, Hải Dương"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
