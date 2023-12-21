export const metadata = {
  title: 'Order - BBI Boosting',
  description: 'Order Page',
}

import React from 'react';
import Ordervalo from '@/components/ordervalo';
import PageIllustration from '@/components/page-illustration';
import Footer from '@/components/ui/footer';

export default function OrdervPage() {
  return (
    <>
      <PageIllustration />
      <Ordervalo />
      <Footer />
    </>
  )
}

