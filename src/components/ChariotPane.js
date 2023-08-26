import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./ChariotPane.module.css"
import CloseIcon from "@/svg/CloseIcon";
import HeartIcon from "@/svg/HeartIcon";

export default function ChariotPane() {
  const [donationAmount, setDonationAmount] = useState(3500);
  const [editingDonation, setEditingDonation] = useState(false);

  const donationInputRef = useRef(null);
  const focusDonationInput = () => donationInputRef?.current?.focus();

  const currencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  useEffect(() => {
    if (editingDonation) {
      focusDonationInput();
      donationInputRef.current.selectionStart = donationInputRef.current.value.length;
      donationInputRef.current.selectionEnd = donationInputRef.current.value.length;
    }
  }, [editingDonation]);

  function getDonationString() {
    return currencyFormat.format(donationAmount);
  }

  function handleDonationUpdate(value) {
    const parsedValue = parseInt(value);
    if (/^[0-9]*$/.test(parsedValue)) {
      setDonationAmount(parsedValue);
    }
  }

  function handleDonationBoost(multiplier) {
    setDonationAmount(parseInt(donationAmount * multiplier));
  }

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
        <input
          value={donationAmount}
          className={styles.donationInput + " " + (editingDonation ? "" : styles.hidden)}
          onChange={(e) => handleDonationUpdate(e.target.value)}
          ref={donationInputRef}
          onBlur={() => setEditingDonation(false)}
        ></input>
        <div
          className={styles.donationInput + " " + (editingDonation ? styles.hidden : "")}
          onClick={() => setEditingDonation(true)}
        >
          <span>
            {getDonationString()}
          </span>
          <span
            className={styles.editDonation}
            onClick={() => setEditingDonation(true)}
          >
              Edit
          </span>
        </div>
        <div className={styles.boostButtons}>
          <div
            className={styles.percentageBoost}
            onClick={() => handleDonationBoost(1.15)}
          >
            +15%
          </div>
          <div
            className={styles.percentageBoost}
            onClick={() => handleDonationBoost(1.25)}
          >
            +25%
          </div>
          <div
            className={styles.doubleBoost}
            onClick={() => handleDonationBoost(2)}
          >
            <HeartIcon height={13} width={15}/>
            Double it!
          </div>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.submitButton}>Submit</div>
        <span className={styles.tos}>By clicking “Continue”, you certify that you have read & understood Donor Advised Fund Terms of Service</span>
      </div>
    </div>
  );
}
