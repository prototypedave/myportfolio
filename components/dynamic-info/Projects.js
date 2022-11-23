import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/globalComponents/IndexStyled';
import styles from './Projects.module.css';
import { HeaderThree, Hr} from './ProjectStyles';
import Link from 'next/link';
import { projects } from '../../constants/constants';

export default function Projects() {
  return (
    <Section nopadding id='projects'>
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <section className={styles.gridContainer}>
        {projects.map(({id, title, description, image, tags, visit, source}) => {
          return (
            <div key={id} className={styles.card}>
              <img className={styles.image} src={image}/>
              <div className={styles.titleContent}>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </div>
              <div className={styles.cardInfo}>{description}</div>
                <div>
                  <div className={styles.titleContent}>Stack</div>
                    <ul className={styles.tagList}>
                      {tags.map((tag, index) => {
                        return <li className={styles.tag} key={index}>{tag}</li>;
                      })}
                    </ul>
                  </div>
                    <ul className={styles.utilityList}>
                      <Link className={styles.projLink} href={visit}>Code</Link>
                      <Link className={styles.projLink} href={source}>Source</Link>
                    </ul>
                </div>
          );
        })}
      </section>
    </Section>
  )
}