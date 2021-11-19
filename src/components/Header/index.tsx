import styles from './styles.module.scss';
import Link from 'next/link'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <a>
            <img src="/images/logo-strides.svg" alt="Strides Digital Logo" />
          </a>
        </Link>


        <nav>
          {/* <Link href="https://strides.digital/en/">
            <a>Home</a>
          </Link> */}
          <Link href="https://strides.digital/en/pricing/">
            <a>Pricing</a>
          </Link>
          {/* <Link href="/blog">
            <a className={styles.active}>Blog</a>
          </Link> */}

        </nav>

        {/* <button className="btn-primary">
          <a href="">Get Started</a>
        </button> */}

      </div>
    </header>
  );
}