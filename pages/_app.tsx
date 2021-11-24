import App from 'next/app'
import { ApolloProvider } from '@apollo/client'

import apollo from '@lib/apolloClient'
import '@styles/main.scss'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    )
  }
}

export default MyApp
