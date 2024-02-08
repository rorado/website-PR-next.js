import styles from "./footer.module.css";

import Media from "./images_social_media";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h3 className={styles.copy}>
        &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.{" "}
      </h3>
      <div className={styles.icons}>
        {Media.map((media) => (
          <Image
            className={styles.icon}
            key={media.name}
            src={`/images/socialmedia/${media.name}.png`}
            alt={media.name}
            width={27}
            height={27}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
