import styled from "styled-components";

const ClientsSection = styled.section`
  padding: 140px 195px;
  display: flex;
  flex-direction: column;
  background-color: rgb(45, 64, 89);
  gap: 25px;
`;

const ClientCardsList = styled.ul`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ClientCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background-color: white;
  padding: 25px 100px;
  text-align: center;
`;

const ClientParagraph = styled.p`
  color: rgb(115, 115, 115);
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  width: 159px;
  margin-bottom: 20px;
`;

const ClientContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

const ClientTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;

const ClientName = styled.p`
  color: rgb(150, 187, 124);
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
`;

const ClientJob = styled.p`
  color: rgb(37, 43, 66);
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 400;
`;

export {
  ClientsSection,
  ClientCardsList,
  ClientCard,
  ClientParagraph,
  ClientContainer,
  ClientTextContainer,
  ClientName,
  ClientJob,
};
