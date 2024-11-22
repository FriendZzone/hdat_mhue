import { useEffect } from 'react';

const loadFacebookSDK = () => {
  if (window.FB) return; // Prevent reloading if already loaded

  const script = document.createElement('script');
  script.src = 'https://connect.facebook.net/en_US/sdk.js';
  script.async = true;
  script.defer = true;
  script.crossOrigin = 'anonymous';
  script.onload = () => {
    window.FB.init({
      xfbml: true,
      version: 'v17.0',
    });
  };
  document.body.appendChild(script);
};

export const FacebookSDK = () => {
  useEffect(() => {
    loadFacebookSDK();
  }, []);

  return null;
};
