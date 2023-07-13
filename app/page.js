import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const topRow = generateStalls(5);
  const leftRow = generateStalls(11);
  const rightRow = generateStalls(4);

  return (
    <main className={styles.main}>
      <div style={{"display" : "flex"}}>
        {topRow}
      </div>
      <div style={{"display" : "flex"}}>
        <div style={{"display" : "flex", "flexDirection" : "column", "marginRight" : "30%"}}>
          {leftRow}
        </div>
        <div style={{"display" : "flex", "flexDirection" : "column"}}>
          {rightRow}
        </div>
      </div>
      
      
    </main>
  )
}

function generateStalls(n) {
  const stalls = [];
  for (let i=0; i<n; i++) {
    stalls.push(<div className={styles.stall}></div>);
  }
  return stalls;
}
