import { useContext } from 'react'
import styles from './App.module.scss'
import { Header } from './components/Header'
import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'
import { SendMessageForm } from './components/SendMessageForm'
import { AuthContext } from './context/authenticate'

export function App() {
  const { user } = useContext(AuthContext)
  
  return (
    <>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={`${styles.contentWrapper} ${!!user ? styles.contentSigned : ''}`}>
        <MessageList />
        { !!user ? <SendMessageForm /> : <LoginBox />}
      </main>
    </>
  )
}