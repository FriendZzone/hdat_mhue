import React, { useEffect } from 'react';

const FacebookComments = ({ url = 'http://localhost:5173', numPosts = 5, width = '100%' }) => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse(); // Render the plugin if SDK is already loaded
    }
  }, []);

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <div
        className="fb-comments"
        data-href={url}
        data-numposts={numPosts}
        data-width={width}
        data-order-by="reverse_time"
      ></div>
    </div>
  );
};

export default FacebookComments;
