import { ExpertSection } from "./styles";
import ExpertImage from "../../assets/expertImg.png";
import orangeLine from "../../assets/orangeLine.png";
import learnMore from "../../assets/learnMore.png";
import { TextContainer, Paragraph, Title } from "../Doctors/styles";
export const Experts = () => {
  return (
    <ExpertSection>
      <img src={ExpertImage} alt="Expert Image" />
      <TextContainer>
        <img width={100} height={7} src={orangeLine} alt="Orange Line" />
        <Title>Meet Our Experts</Title>
        <Paragraph>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </Paragraph>
        <img width={101} height={24} src={learnMore} alt="Learn More" />
      </TextContainer>
    </ExpertSection>
  );
};
