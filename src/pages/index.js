import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Form from '../../components/Form/Form'
import Header from '../../components/Header/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Sem Desperdício
        </title>
        <meta name="description" content="
          Sem Desperdício é uma plataforma que ajuda a gerar receitas com o que você tem em casa utilizando Inteligência Artificial.
        " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Form/>
    </>
  )
}
