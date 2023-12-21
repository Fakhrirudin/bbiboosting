export const metadata = {
  title: 'Games - BBI Boosting',
  description: 'List Game Page',
}

import React from 'react';
import Games from '@/components/games';
import PageIllustration from '@/components/page-illustration';

export default function GamesPage() {
  return (
    <>
      <PageIllustration/>
      <Games/>
    </>
  )
}

