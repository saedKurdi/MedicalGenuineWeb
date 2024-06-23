import {
  HeroSection,
  HeroImg,
  HeroContainer,
  HeroLink,
  HeroHeader,
  HeroParagraph,
} from "./styles";
import { Button } from "../../UI/Button";
import heroImg from "../../assets/heroCover.png";
export const Hero = () => {
  return (
    <HeroSection>
      <HeroImg src={heroImg} alt="hero image" />
      <HeroContainer>
        <HeroLink>Join Us</HeroLink>
        <HeroHeader>Meet the Best Hospital</HeroHeader>
        <HeroParagraph>
          We are always fully focused on helping your child and you
        </HeroParagraph>
        <Button>Join Us</Button>
      </HeroContainer>
    </HeroSection>
  );
};
