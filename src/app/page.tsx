import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Header from '@/app/components/Header/Header'
import Main from './components/Main/Main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Header/>
      <div className={styles.section}>
       <Main/>
      </div>
    </main>
  )
}
