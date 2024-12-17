import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { photos } from './photo-data';

function PhotoSection() {
  const renderYoutubeVideo = () => {
    return (
      <iframe
        width="100%"
        height="600"
        src="https://www.youtube.com/embed/saa3lsPJsdg"
        title="Hoàng Đạt - Minh Huệ Wedding"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    );
  };

  return (
    <div id="fh5co-testimonial" className="fh5co-section-gray">
      <div className="container" style={{ padding: '46px' }}>
        <div className="row">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">#Photo</h2>
              <p className="sub-title">
                "Tình yêu là thứ duy nhất mà bạn không thể mua được. Bạn có thể mua được mọi thứ bằng tiền, nhưng tình
                yêu thì không. Tình yêu đòi hỏi sự chân thành, sự kiên nhẫn và đôi khi cả sự hy sinh. Đó là khi bạn đặt
                hạnh phúc của người khác lên trước chính bản thân mình"
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '444px' }}>{renderYoutubeVideo()}</div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1 p-4">
              <ImageGallery items={photos} showBullets={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoSection;
