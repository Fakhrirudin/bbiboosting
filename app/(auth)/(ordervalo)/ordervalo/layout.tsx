'use client'

import React from 'react';
import PageIllustration from '@/components/page-illustration';
import Ordervalo from '@/components/ordervalo';
import Footer from '@/components/ui/footer';

export default function OrdervLayout() {
    return (
        <main>
            <PageIllustration />
            <Ordervalo />
            <Footer />
        </main>
        )
    }
