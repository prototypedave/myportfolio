import React from "react";
import { Section, SectionTitle, SectionText } from "../../styles/globalComponents/IndexStyled";
import styles from "./About.module.css";
import Button from "../../styles/globalComponents/Button";

export default function About() {
  return (
    <>
      <Section row nopadding id="about">
        <div className={styles.left}>
          <SectionTitle main center>
            Hi there! <br />
            I'm David, a software engineer specialised as full stack developer
          </SectionTitle>
          <SectionText id="cty">
            Solving tech problems is my passion, have a look at some of my projects below
          </SectionText>
          <Button onclick={() => window.open('https://1drv.ms/b/s!ApMYbfshq6TFmHp5XZEtYj0OVtKS')}>my resume</Button>
        </div>
      </Section>
    
    </>

  )
}
