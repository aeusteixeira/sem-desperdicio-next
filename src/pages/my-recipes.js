import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '../styles/About.module.css'
import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card'
const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <Head>
        <title>
          Sem Desperdício - Minhas Receitas
        </title>
        <meta name="description" content="Sem Desperdício é uma plataforma que ajuda a gerar receitas com o que você tem em casa utilizando Inteligência Artificial." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
        <h1 className={styles.title}>
            Minhas Receitas
        </h1>
        <p className={styles.description}>
            Aqui estão as receitas que você salvou.
        </p>
        {
    typeof window !== 'undefined' && localStorage.getItem('savedRecipes') ? (
        JSON.parse(localStorage.getItem('savedRecipes')).map((recipe, index) => (
            <Card key={index} recipe={recipe}/>
        ))
    ) : (
        <p>Você não tem nenhuma receita salva.</p>
    )
}


        
    </>
  )
}
