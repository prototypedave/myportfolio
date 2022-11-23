import React from "react";
import styles from "./Skills.module.css";
import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/globalComponents/IndexStyled";
import { DiBootstrap, DiDocker, DiFirebase, DiGit, DiMongodb, DiMysql, DiNodejs, DiPython, DiReact, DiRedis } from "react-icons/di"

export default function Skills() {
  return (
    <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I have experience in backend and database stack using python and javascript and MySQL and noSQL respectively, I also have an understanging on #c languages and shell. These are the frameworks I have interacted with...
    </SectionText>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <div className={styles.liContainer}>
          <h4 className={styles.listTitle}>Front-End</h4>
          <p className={styles.listParagraph}>
            <picture><DiReact size="1.5rem" /><span>React.js</span></picture><br /><br />
            <picture><DiBootstrap size="1.5rem" /><span>Bootstrap css</span></picture>
          </p>
        </div>
      </li>
      <li className={styles.listItem}>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <div className={styles.liContainer}>
          <h4 className={styles.listTitle}>Back-End</h4>
          <p className={styles.listParagraph}>
            <picture><DiPython size="1.5rem" /><span>python</span></picture><br /><br />
            <picture><DiNodejs size="1.5rem" /><span>Node.js</span></picture><br /><br />
            <picture><DiMysql size="1.5rem" /><span>MySQL</span></picture><br /><br />
            <picture><DiMongodb size="1.5rem" /><span>Mongo database</span></picture><br /><br />
            <picture><DiRedis size="1.5rem" /><span>Redis database</span></picture>
          </p>
        </div>
      </li>
      <li className={styles.listItem}>
        <picture>
          <DiGit size="3rem" />
        </picture>
        <div className={styles.liContainer}>
          <h4 className={styles.listTitle}>DevOps</h4>
          <p className={styles.listParagraph}>
            <picture><DiGit size="1.5rem" /><span>Git</span></picture><br /><br />
            <picture><DiDocker size="1.5rem" /><span>Docker</span></picture>
          </p>
        </div>
      </li>
    </ul>
    <SectionDivider colorAlt />
  </Section>
  )
}