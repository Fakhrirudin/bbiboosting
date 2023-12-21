'use client'


import React from 'react';
import PageIllustration from '@/components/page-illustration';
import Games from '@/components/games';
import Footer from '@/components/ui/footer';

export default function GamesLayout() {
    return (
        <main>
            <PageIllustration />
            <Games />
            <Footer/>
        </main>
        )
    }
