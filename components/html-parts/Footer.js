import styles from './Footer.module.css';
import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

export default function Header() {
  return (
    <div className={styles.container}>
      <ul className={styles.linkList}>
        <div className={styles.linkColumn}>
          <h4 className={styles.linkTitle}>Call</h4>
          <Link className={styles.linkItem} href="tel:+254704187368">+254704187368</Link>  
        </div>
        <div className={styles.linkColumn}>
          <h4 className={styles.linkTitle}>Email</h4>
          <Link className={styles.linkItem} href="mailto:babudavid74@gmail.com">babudavid74@gmail.com</Link>  
        </div>
      </ul>
      <div className={styles.social}>
        <div className={styles.socialSlogan}>
          <div className={styles.slogan}>
            Problem solving is what I do
          </div>
        </div>
        <div className={styles.socialIcons}>
          <Link className={styles.iconLink} href="https://github.com/prototypedave">
            <AiFillGithub size="3rem" />
          </Link>
          <Link className={styles.iconLink} href="https://linkedin.com/prototypedave">
            <AiFillLinkedin size="3rem" />
          </Link>
          <Link className={styles.iconLink} href="https://instagram.com/davi3y_dave254">
            <AiFillInstagram size="3rem" />
          </Link>
        </div>
      </div>
      <img src="/netliheart.svg" alt="Netlify Logo" />
    </div>      
  )
}
