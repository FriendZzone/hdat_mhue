import { bool } from 'prop-types';
import React, { Fragment } from 'react';

import Bride from 'src/assets/images/p-dinda-2.jpg';
import Groom from 'src/assets/images/p-indra.jpg';
import Love from 'src/assets/images/wedding-logo.png';

import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Save the date</h2>
              <h3 className="sub-title hs">16h00 thứ 7 ngày 21/12/2024</h3>
              <p className="info">
                Gặp gỡ, yêu và cưới. Điều bạn vừa nghe không nằm trong một câu chuyện cổ tích, mà chính là câu chuyện về
                cuộc đời hai chúng tôi Chúng tôi sẽ yêu thương, chăm sóc, trân trọng và nắm tay nhau cùng đi đến hết
                cuộc đời này. Thật là một niềm vinh hạnh lớn khi ngày hạnh phúc nhất cuộc đời chúng tôi có sự hiện diện
                và chúc phúc của bạn! Chân thành cảm ơn bạn ♥ ♥
              </p>
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">Cô dâu: Minh Huệ</h3>
                <p className="parent-name parent-name__top">
                  Con ông: Nguyễn Văn Bích
                  <br /> Con bà: Phạm Thị Minh
                </p>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love">
              <img src={Love} alt="love" width="50" style={{ filter: 'invert(0.6)' }} />
            </div>
            <div className="couple-half">
              <div className="bride">
                <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">Chú rể: Hoàng Đạt</h3>
                <p className="parent-name">
                  Con ông: Đỗ Công Thành <br />
                  Con bà: Hoàng Thị Xoa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
