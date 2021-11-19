import React, { useState } from "react";
import styles from './mobileNavLinks.module.scss';
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";
import Link from 'next/link';

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!isOpen);
  const hide = () => setOpen(false);
  const show = () => setOpen(true);

  return (
    <div className={styles.navLinksContainer}>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <ul>
          <li>
            <Link href="/">
              <a onClick={toggle} onBlur={hide} onFocus={show}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/pricing">
              <a onClick={toggle} onBlur={hide} onFocus={show}>Pricing</a>
            </Link>
          </li>
          <li>
            <Link href="/terms">
              <a onClick={toggle} onBlur={hide} onFocus={show}>Terms</a>
            </Link>
          </li>
          {/* <li>
            <Link href="/blog">
              <a onClick={toggle} onBlur={hide} onFocus={show}>Blog</a>
            </Link>
          </li> */}
          <div className={styles.marginer} />
          <Accessibility />
        </ul>
      )
      }

    </div >
  );
}
