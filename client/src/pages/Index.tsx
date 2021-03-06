import { NextPage } from "next"
import Head from "next/head"
import styled from "styled-components"
import { FlexBody, FlexRoot, Footer, Header } from "~/components"
import { Navigation } from "~/components/Navigation"

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Index</title>
      </Head>
      <FlexRoot>
        <Header>Index</Header>
        <Navigation />
        <FlexBody>
          <Content>Hello World.</Content>
        </FlexBody>
        <Footer />
      </FlexRoot>
    </>
  )
}

export default index

const Content = styled.div`
  margin: 10px;
`
