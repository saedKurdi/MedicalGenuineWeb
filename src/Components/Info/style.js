import styled from "styled-components";

const InfoSection = styled.section`
  padding: 90px 195px;
  background-color: rgb(45, 64, 89);
`;

const InfoList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InfoCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const InfoTitle = styled.h4`
  color: rgb(150, 187, 124);
  font-family: Montserrat;
  font-size: 58px;
  font-weight: bolder;
`;

const InfoParagraph = styled.p`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: bolder;
  color: white;
`;

export { InfoSection, InfoList, InfoCard, InfoTitle, InfoParagraph };
