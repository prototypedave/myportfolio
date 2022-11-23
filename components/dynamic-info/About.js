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
            Hello there! <br />
            I'm David Isumba, a software engineer specialised as full stack developer
          </SectionTitle>
          <SectionText id="cty">
            Solving tech problems is my passion, have a look at some of my projects below
          </SectionText>
          <Button onclick={() => window.location = 'https://google.com'}>Find more about me</Button>
        </div>
      </Section>
    
    </>

  )
}
