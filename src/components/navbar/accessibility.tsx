import Link from 'next/link'
import styles from "./accessibility.module.scss"



export function Accessibility(props) {
  return (

    <div className={styles.container}>
      <button className="btn-primary">
        <Link href="/pricing">
          <a>Get Started</a>
        </Link>
      </button>
    </div>

  );
}
