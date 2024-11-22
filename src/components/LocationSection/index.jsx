import React, { Fragment } from 'react';
import { GOOGLE_MAPS_LINK } from 'src//constants';
import { styWrapper } from './styles';

function LocationSection() {
  return (
    <Fragment>
      <div id="fh5co-couple-story" className="fh5co-section-gray" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2 className="main-font">Lokasi Acara</h2>
              <p className="sub-title">
                <a
                  href={GOOGLE_MAPS_LINK}
                  title="Click untuk melihat peta di Google Maps"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#828282' }}
                >
                  <strong>HARRIS Hotel Sentraland Semarang</strong>
                </a>{' '}
                <br />
                Jl. Ki Mangunsarkoro No.36, Karangkidul, Kec. Semarang Tengah, <br />
                Kota Semarang, Jawa Tengah 50136
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d931.3754078568764!2d105.69848535240084!3d20.972519837995847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134522d0a2df20b%3A0xf4fef10efa229fae!2sY%C3%AAn%20Qu%C3%A1n%20Village%20Hall!5e0!3m2!1sen!2s!4v1732267634915!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: '0' }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title="Google Maps - Nhà Trai"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);
