export const metadata = {
  title: 'Order - BBI Boosting',
  description: 'Order Page',
}

import React from 'react';
import Orderml from '@/components/orderml';
import PageIllustration from '@/components/page-illustration';
import Footer from '@/components/ui/footer';

export default function OrderPage() {
  return (
    <>
      <PageIllustration />
      <Orderml />
      <Footer />
    </>
  )
}

