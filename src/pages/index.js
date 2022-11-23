import About from '../components/dynamic-info/About';
import Projects from '../components/dynamic-info/Projects';
import { Section } from '../styles/globalComponents/IndexStyled';
import { Body } from '../Layout/Body';
import Skills from '../components/dynamic-info/Skills';
import Background from '../components/html-parts/BackGround';

export default function Home() {
  return (
    <Body>
      <Section grid>
        <About />
        <Background />
      </Section>
      <Projects />
      <Skills />
    </Body>
  )
}
