import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/About.module.css'
import Header from '../../components/Header/Header'
const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <Head>
        <title>
          Sem Desperdício - Sobre
        </title>
        <meta name="description" content="Sem Desperdício é uma plataforma que ajuda a gerar receitas com o que você tem em casa utilizando Inteligência Artificial." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <h1 className={styles.title}>
            Sobre
        </h1>
        <p className={styles.paragraph}>
          O Sem Desperdicio nasceu da minha paixão pela cozinha e da minha luta contra o desperdício de alimentos. Como um entusiasta da culinária, sempre me incomodou ver ingredientes indo para o lixo, especialmente quando poderiam ser usados para criar refeições deliciosas e econômicas.</p>
        <p className={styles.paragraph}>
          Foi assim que surgiu a ideia de criar uma plataforma online que ajudasse as pessoas a aproveitar ao máximo os ingredientes que já têm em casa, evitando o desperdício e economizando dinheiro. Com a ajuda de uma API de OpenIA, o Sem Desperdicio permite que os usuários insiram os ingredientes que têm disponíveis e encontrem receitas que sejam adequadas para o que têm em mãos.
        </p>
        <p className={styles.paragraph}>
          Para mim, o Sem Desperdicio é mais do que apenas uma plataforma online - é uma forma de promover a sustentabilidade e a conscientização sobre o desperdício de alimentos. Espero que mais pessoas possam aproveitar essa ferramenta e fazer a sua parte para reduzir o desperdício em suas próprias cozinhas.</p>
        <p className={styles.paragraph}>
          Compartilhe suas receitas feitas com ingredientes reaproveitados nas suas redes sociais usando <span className={styles.hashtag}>#SemDesperdicio</span> para conscientizar mais pessoas sobre a importância de evitar o desperdício de alimentos. Vamos juntos lutar por um mundo mais sustentável e delicioso!
        </p>
    </>
  )
}
