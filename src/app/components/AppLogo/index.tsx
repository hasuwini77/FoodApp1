import Image from "next/image";
import styles from "./AppLogo.module.css";

const AppLogo = () => {
  return (
    <div className={styles.logoContainer}>
      <Image
        src="/foodielogo.png"
        alt="app-logo"
        layout="intrinsic"
        width={300}
        height={300}
        className={styles.logoImage}
        priority
      />
    </div>
  );
};

export default AppLogo;
