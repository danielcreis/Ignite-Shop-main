import Image from 'next/image';
import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import logoImg from "../assets/logoIgnite.svg"
import { Container, Header } from "../styles/pages/app"


export default function App({ Component, pageProps }: AppProps) {

  globalStyles()
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>)
}

