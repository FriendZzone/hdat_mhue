import { Fragment, useState } from 'react';
import getQueryValue from './helpers/getQueryValue';
/**
 * List of local components
 */
import FloatingMusic from './components/FloatingMusic/Loadable';
import FooterSection from './components/FooterSection';
import HelloSection from './components/HelloSection';
import MainLayout from './components/Layout';
import PhotoSection from './components/PhotoSection/Loadable';
import WeddingSection from './components/WeddingSection';
import WelcomeSection from './components/WelcomeSection';
import './custom.css';
import Wishes from './components/Wishes';

function App() {
  const location = window.location;
  const guestName = decodeURIComponent(getQueryValue(location, 'to') || '');
  // const isInvitation = true;
  const isInvitation = getQueryValue(location, 'type') === 'invitation';
  const firstName = guestName.replace(/ .*/, '');
  const isAnonymGuest = guestName === '' && !isInvitation;
  const codeLink = getQueryValue(location, 'code') || '';
  const finalTicketLink = `code=${codeLink}&name=${guestName}`;

  const [showDetailContent, setShowDetailContent] = useState(false);

  const handleClickDetail = () => {
    setShowDetailContent(true);
  };
  const renderDetailContent = () => {
    if (!showDetailContent) return null;

    return (
      <Fragment>
        <HelloSection isInvitation={isInvitation} />
        <WeddingSection isInvitation={isInvitation} />
        <Wishes />
        <PhotoSection />
        <FooterSection isInvitation={isInvitation} />
      </Fragment>
    );
  };

  return (
    <MainLayout>
      <WelcomeSection
        guestName={guestName}
        isAnonymGuest={isAnonymGuest}
        isInvitation={isInvitation}
        location={location}
        codeLink={finalTicketLink}
        onClickDetail={handleClickDetail}
      />
      {renderDetailContent()}
      <FloatingMusic />
    </MainLayout>
  );
}

export default App;
