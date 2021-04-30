import React from 'react'
import Head from 'next/head'

import Footer from '@views/components/Footer'

interface IProps {
  title?: string
  children: React.ReactNode
}

const MainLayout: React.FC<IProps> = ({ title, children }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}

    <Footer />
  </div>
)

export default MainLayout
