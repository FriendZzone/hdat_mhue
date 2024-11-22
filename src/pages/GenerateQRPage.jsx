import React from 'react';

import MainLayout from 'src/components/Layout';
import QRCard from 'src/components/QRCard';
import useGuestData from 'src//hooks/useGuestData';
import { styWrapper } from 'src/components/QRCard/styles';

function GenerateQRPage() {
  const { data, loading } = useGuestData();

  const finalData = data.filter((guest, index) => index >= 177);

  const renderContent = () => {
    if (loading) return <div>Menyiapkan data..</div>;

    return finalData.map((guest) => {
      return <QRCard name={guest.name} code={guest.code} desc={guest.desc} />;
    });
  };

  return (
    <MainLayout>
      <div css={styWrapper}>
        <div className="row">{renderContent()}</div>
      </div>
    </MainLayout>
  );
}

export default GenerateQRPage;
