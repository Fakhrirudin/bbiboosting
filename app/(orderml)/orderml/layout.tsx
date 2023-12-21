'use client'

import React from 'react';
import PageIllustration from '@/components/page-illustration';
import Orderml from '@/components/orderml';
import Footer from '@/components/ui/footer';

export default function OrderLayout() {
    return (
        <main>
            <PageIllustration />
            <Orderml />
            <Footer />
        </main>
        )
    }
