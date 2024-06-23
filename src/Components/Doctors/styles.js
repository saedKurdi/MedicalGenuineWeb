import styled from "styled-components";

const DoctorsSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 195px;
  background-color: rgb(45, 64, 89);
`;

const TextContainer = styled.div`
  display: flex;
  width: 350px;
  flex-direction: column;
  gap: 35px;
`;

const Title = styled.h2`
  font-family: Montserrat;
  font-size: 40px;
  font-weight: 700;
  color: white;
`;

const Paragraph = styled.p`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  color: white;
`;

const ImageContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  height: 700px;
  align-items: center;
  gap: 35px;
`;

const ImageCard = styled.div`
  background-color: white;
  display: flex;
  gap: 15px;
  flex-direction: column;
  padding: 35px 35px;
  width: 130px;
`;

const ImageCardHeader = styled.h4`
  color: rgb(37, 43, 66);
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 700;
`;

const ImageCardParagraph = styled.p`
  color: rgb(115, 115, 115);
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
`;

export {
  DoctorsSection,
  TextContainer,
  Title,
  Paragraph,
  ImageContainer,
  ImageCard,
  ImageCardHeader,
  ImageCardParagraph,
};
