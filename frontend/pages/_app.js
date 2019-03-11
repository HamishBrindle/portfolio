import App, { Container } from 'next/app'
import Page from '../components/_page'
import { ApolloProvider } from 'react-apollo'
import withData from '../lib/withData'

export class CustomApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    pageProps.query = ctx.query
    return { pageProps }
  }
  render() {
    const { Component, apollo, pageProps } = this.props;
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            <Component { ...pageProps }/>
          </Page>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withData(CustomApp);
