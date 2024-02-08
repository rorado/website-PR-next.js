"use client";
import styles from "./page.module.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: "-100vh" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 40,
        }}
      >
        <div className={styles.imageHome}>
          <div className={styles.context_image_home}>
            <h1 className={styles.title}>About us</h1>
            <h3 className={styles.identification}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              amet ea voluptas consequatur doloremque quibusdam eaque modi
              perferendis veritatis eligendi!
            </h3>
          </div>
        </div>
      </motion.div>
      <div style={{ marginTop: "100px" }}>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
          delectus voluptates modi exercitationem illum doloribus nemo deleniti
          saepe, nam numquam in! Tempore natus repudiandae nesciunt esse ducimus
          dolore doloremque! Sequi officiis fugiat obcaecati enim libero aliquam
          nobis, nam voluptatibus dolores. Nobis ut ratione quo quibusdam
          sapiente assumenda exercitationem ipsa et doloremque nulla cum, iusto
          esse sint expedita! Nihil sunt quae est hic impedit, consequatur
          quaerat expedita commodi libero dolorum maxime iure mollitia excepturi
          vel architecto perferendis veniam esse itaque similique sint ullam.
          Ullam, mollitia aspernatur? Impedit quod perferendis aut temporibus.
          Corporis voluptatibus similique dolor culpa itaque velit. Illo tempore
          a earum laudantium rem nostrum odio fuga accusamus quidem corporis
          animi odit sit magnam, aliquam vero distinctio commodi harum, eveniet
          laboriosam! Dolores architecto eum tempore voluptate dolor illum nihil
          nam aspernatur facilis error autem, nobis nemo voluptatum repellendus
          totam quaerat a reiciendis. Inventore voluptates asperiores nostrum
          ratione ex, nobis culpa quam porro quasi, blanditiis recusandae
          eligendi consequuntur quia illum. Ipsa alias aspernatur commodi
          accusantium, labore similique quos non minima enim eligendi iure
          dolorem autem fuga laboriosam rem debitis reprehenderit, nulla veniam
          tempora nesciunt. Accusamus, enim facere dolore at libero fugiat
          voluptates quaerat repellendus corrupti sit itaque harum aspernatur
          eos porro blanditiis pariatur deserunt animi. Cum, minima ratione
          maiores doloribus voluptatum dolore! Cupiditate, a tenetur quod
          eveniet cum recusandae vitae ab hic autem adipisci pariatur officiis
          beatae blanditiis, maiores repudiandae consequatur ipsum. Rem iste
          consectetur molestias vero quaerat et earum aperiam vel soluta
          assumenda alias, ea deleniti ipsam porro nostrum beatae sit autem
          ipsum repudiandae exercitationem repellendus? Necessitatibus mollitia
          sed voluptatem iure enim assumenda provident placeat? Ipsum maxime
          animi iure pariatur! Consequatur facere dolore eaque natus eius ad
          impedit rem iste quae voluptatum, minima deserunt repellat quisquam.
          Possimus fuga sunt itaque ex nesciunt aperiam temporibus dolorum
          maxime, provident corporis at culpa blanditiis cum, incidunt dolores
          reiciendis officia earum doloremque harum. Eius temporibus illo
          dolores unde harum praesentium repellat mollitia ipsam molestias,
          accusamus necessitatibus in numquam animi, ex maiores aut ipsum libero
          corrupti ad quae. Neque modi animi qui recusandae. Perferendis, ex.
          Earum culpa alias quos recusandae qui cum corrupti voluptatibus
          deserunt tempora nostrum cumque reiciendis, itaque fugiat nobis
          placeat, obcaecati maiores minima! Maiores facilis molestias, dicta
          magnam tempora at, ratione commodi tempore autem inventore ex
          repellendus expedita. Corrupti recusandae consectetur ratione
          doloribus illum, similique quia inventore dolore officia magni
          voluptates provident, quos nemo perspiciatis! Hic alias cumque illo
          error commodi porro cupiditate?
        </p>
      </div>
    </>
  );
};
export default About;
