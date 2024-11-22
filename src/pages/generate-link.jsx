import React from 'react';

import MainLayout from 'src/components/Layout';
import GenerateLink from 'src/components/GenerateLink';
import { styWrapper } from 'src/components/GenerateLink/styles';

function GenerateLinkWrapper() {
  return (
    <MainLayout>
      <div css={styWrapper}>{<GenerateLink />}</div>
    </MainLayout>
  );
}

export default GenerateLinkWrapper;
