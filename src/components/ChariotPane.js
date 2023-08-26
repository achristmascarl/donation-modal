import { useState } from "react";
import Image from "next/image";
import styles from "./ChariotPane.module.css"
import CloseIcon from "@/svg/CloseIcon";

export default function ChariotPane() {
  const [donationAmount, setDonationAmount] = useState(1000);

  return (
    <div className={styles.container}>
      <Image
        className={styles.chariotLogo}
        src="/chariot-logo.png"
        alt="chariot logo"
        width={68}
        height={16}
      ></Image>
      <div className={styles.closeIconWrapper}>
        <CloseIcon height={13} width={13}/>
      </div>
      <div className={styles.logoWrapper}>
        <Image
          src="/chariot-icon.png"
          alt="chariot icon"
          width={46}
          height={46}
        ></Image>
        <Image
          className={styles.arrowIcon}
          src="/arrow-icon.png"
          alt="arrow icon"
          width={46}
          height={46}
        ></Image>
      </div>
      <div className={styles.fundContainer}>
        <span>Smith Giving Fund</span>
        <span>$137,658</span>
      </div>
      <div className={styles.donationWrapper}>
        <span>Boost your donation!</span>
        <div className={styles.donationInput}>{donationAmount}</div>
        <div className={styles.boostButtons}>test</div>
      </div>
    </div>
  );
}
