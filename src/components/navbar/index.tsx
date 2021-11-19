import React from "react";
import { useMediaQuery } from "react-responsive";
import { Logo } from "../logo";
import { Accessibility } from "./accessibility";
import { NavLinks } from "./navLinks";
import { DeviceSize } from "../responsive";
import { MobileNavLinks } from "./mobileNavLinks";
import styles from "./index.module.scss";

import { Media, MediaContextProvider } from "../responsive/media"



export function Navbar(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftSection}>
          <Logo />
        </div>
        <div className={styles.middleSection}>
          {!isMobile && <NavLinks />}
        </div>
        <div className={styles.rightSection}>
          <MediaContextProvider>
            <Media at="xs"><MobileNavLinks /></Media>
            <Media greaterThan="xs"><Accessibility /></Media>
          </MediaContextProvider>
        </div>

      </div>
    </div>
  );
}
