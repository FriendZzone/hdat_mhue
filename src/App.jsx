import { Fragment, useState } from 'react';
import getQueryValue from 'src/helpers/getQueryValue';
/**
 * List of local components
 */
import ConfirmationSection from 'src/components/ConfirmationSection';
import CovidSection from 'src/components/Covid19';
import FloatingMusic from 'src/components/FloatingMusic/Loadable';
import FooterSection from 'src/components/FooterSection';
import HelloSection from 'src/components/HelloSection';
import MainLayout from 'src/components/Layout';
import LocationSection from 'src/components/LocationSection';
import PhotoSection from 'src/components/PhotoSection/Loadable';
import StorySection from 'src/components/StorySection';
import WeddingSection from 'src/components/WeddingSection';
import WelcomeSection from 'src/components/WelcomeSection';
import WishesSection from 'src/components/WishesSection';
import FacebookComments from './components/FacebookComments';
import { FacebookSDK } from './components/FacebookSDK';

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
        {isInvitation && <CovidSection />}
        {isInvitation && <LocationSection />}
        <StorySection />
        <FacebookSDK />
        <FacebookComments numPosts={5} width="100%" />
        <PhotoSection />
        <WishesSection />
        <ConfirmationSection guestName={firstName} isInvitation={isInvitation} codeLink={finalTicketLink} />
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
