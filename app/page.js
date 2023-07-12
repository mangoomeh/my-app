import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const row1 = [];
  for (let index = 0; index < 5; index++) {
    row1.push(<div className={styles.stall}></div>);
  }

  return (
    <main className={styles.main}>
      <div style={{"display" : "flex"}}>
        {row1}
      </div>
    </main>
  )
}
