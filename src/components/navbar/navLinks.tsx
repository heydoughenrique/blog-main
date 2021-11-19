import Link from 'next/link'
import styles from './navLinks.module.scss'


export function NavLinks(props) {
  return (

    <div className={styles.navLinksContainer}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/pricing">
            <a>Pricing</a>
          </Link>
        </li>
        <li>
          <Link href="/terms">
            <a>Terms</a>
          </Link>
        </li>
        {/* <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li> */}
      </ul>
    </div>
  );
}
