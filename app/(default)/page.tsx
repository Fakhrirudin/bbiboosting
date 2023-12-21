export const metadata = {
  title: 'BBI Boosting',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <br />
      <br />
      <Features />
      <Testimonials />
    </>
  )
}
