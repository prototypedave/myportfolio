import Link from "next/link";
import Head from "next/head";
import styles from "./Header.module.css";
import { RiMenuFill } from 'react-icons/ri';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Mobile from "./Mobile";

export default function Header() {
  return (
    <div className={styles.container}>
      <Head>
        <title>David Isumba</title>
        <meta name="description" content="created by Dave" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"  />
      </Head>
      
      <div className={styles.home} >
          <Link href="/">
            <a className={styles.homeLink}>David Isumba</a> 
          </Link>
      </div>

      <div className={styles.mobile} id="navbar" >
          <a href="/" className={styles.mobileActive}>
            Home
          </a>
          <div className={styles.navbar} id="myNav">
            <Link href="#about" id="myNav">
              About
            </Link>
            <Link href="#projects">
              Projects
            </Link>
            <Link href="#skills">
              Skills
            </Link>  
            <Link href="#contact">
              Contact
            </Link>
          </div>
          <a href="javascript:void(0);" className={styles.mobileIcon} onClick={() => Mobile()}>
            <i class="fa fa-bars"></i>
          </a>
      </div>
      <div className={styles.navcontacts}>
        <Link href="https://github.com/prototypedave">
          <AiFillGithub size="40px" className={styles.contact} />
        </Link>
        <Link href="https://linkedin.com">
          <AiFillLinkedin size="40px" className={styles.contact} />
        </Link>
      </div>
    </div>
    
   
  )
}
