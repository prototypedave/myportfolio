import styles from './Footer.module.css';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import React from 'react';

export default function Footer() {
  return (
    <section className={styles.container} id='contact'>
      <ul className={styles.linkList}>
        <div className={styles.linkColumn}>
          <h4 className={styles.linkTitle}>Call</h4>
          <a className={styles.linkItem} href="tel:+254704187368">+254704187368</a>  
        </div>
        <div className={styles.linkColumn}>
          <h4 className={styles.linkTitle}>Email</h4>
          <a className={styles.linkItem} href="mailto:babudavid74@gmail.com">babudavid74@gmail.com</a>  
        </div>
      </ul>
      <div className={styles.social}>
        <div className={styles.socialSlogan}>
          <p className={styles.slogan}>
            Reach me via contacts above or follow me on social media
          </p>
        </div>
        <div className={styles.socialIcons}>
          <a className={styles.iconLink} href="https://github.com/prototypedave">
            <AiFillGithub size="3rem" /><span className={styles.span}>Github: prototypedave</span>
          </a>
          <a className={styles.iconLink} href="https://linkedin.com/prototypedave">
            <AiFillLinkedin size="3rem" /><span className={styles.span}>Linkedin: David Isumba</span>
          </a>
          <a className={styles.iconLink} href="https://instagram.com/davi3y_dave254">
            <AiFillInstagram size="3rem" /><span className={styles.span}>Instagram: @davi3y_dave254</span>
          </a>
        </div>
      </div>
    </section>      
  )
}
