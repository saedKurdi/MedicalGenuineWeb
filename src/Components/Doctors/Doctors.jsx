import {
  DoctorsSection,
  ImageContainer,
  TextContainer,
  Title,
  Paragraph,
  ImageCard,
  ImageCardHeader,
  ImageCardParagraph,
} from "./styles";
import orangeLine from "../../assets/orangeLine.png";
import learnMore from "../../assets/learnMore.png";
import i1 from "../../assets/i1.png";
import i2 from "../../assets/i2.png";
import i3 from "../../assets/i3.png";

export const Doctors = () => {
  return (
    <DoctorsSection>
      <TextContainer>
        <img width={100} height={7} src={orangeLine} alt="Orange Line" />
        <Title>Our Doctors Specialize in you</Title>
        <Paragraph>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </Paragraph>
        <img width={101} height={24} src={learnMore} alt="Learn More" />
      </TextContainer>
      <ImageContainer>
        <ImageCard>
          <img width={70} height={76} src={i1} alt="" />
          <ImageCardHeader>Quick examination</ImageCardHeader>
          <img src={orangeLine} width={50} height={2} alt="Orange Line" />
          <ImageCardParagraph>
            The gradual accumulation of information about{" "}
          </ImageCardParagraph>
        </ImageCard>
        <ImageCard>
          <img width={70} height={76} src={i2} alt="" />
          <ImageCardHeader>Best dental surgeons</ImageCardHeader>
          <img src={orangeLine} width={50} height={2} alt="Orange Line" />
          <ImageCardParagraph>
            The gradual accumulation of information about
          </ImageCardParagraph>
        </ImageCard>
        <ImageCard>
          <img width={70} height={76} src={i3} alt="" />
          <ImageCardHeader>Emergency Case</ImageCardHeader>
          <img src={orangeLine} width={50} height={2} alt="Orange Line" />
          <ImageCardParagraph>
            The gradual accumulation of information about
          </ImageCardParagraph>
        </ImageCard>
      </ImageContainer>
    </DoctorsSection>
  );
};
