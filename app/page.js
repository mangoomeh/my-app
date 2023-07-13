import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const block1 = generateStalls(7, ["01-91", "01-90", "01-89", "01-88", "01-87", "01-86", "01-85"]);
  const block2 = generateStalls(11, ["01-102", "01-101", "01-100", "01-99", "01-98", "01-97", "01-96", "01-95", "01-94", "01-93", "01-92"]);
  const block3 = generateStalls(5, ["01-103", "01-104", "01-105", "01-106", "01-107"]);
  const block4 = generateStalls(4, ["01-108", "01-109", "01-110", "01-111"]);
  const block5 = generateStalls(10, ["01-112", "01-113", "01-114", "01-115", "01-116", "01-117", "01-118", "01-119", "01-120", "01-121"])

  return (
    <main className={styles.main}>
      <h1>Crawford</h1>
      <div style={{"display" : "flex", "justifyContent" : "center"}}>
        {block3}
      </div>
      <div style={{"display" : "flex", "justifyContent" : "space-around"}}>
        <div style={{"display" : "flex", "flexDirection" : "column"}}>
          {block2}
          <div style={{"height" : "50px"}}></div>
          {block1}
        </div>
        <div style={{"display" : "flex", "flexDirection" : "column"}}>
          {block4}
          <div style={{"height" : "50px"}}></div>
          {block5}
        </div>
      </div>
    </main>
  )
}

function generateStalls(n, listOfStalls) {
  const stalls = [];
  for (let i=0; i<n; i++) {
    stalls.push(<div className={styles.stall}>{listOfStalls[i]}</div>);
  }
  return stalls;
}
