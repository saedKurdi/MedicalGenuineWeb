import styled from "styled-components";

const JoinUsSection = styled.section`
  padding: 140px 195px;
  display: flex;
  flex-direction: column;
  background-color: rgb(45, 64, 89);
`;

const JoinUsHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 90px;
`;

const JoinUsParagraph = styled.p`
  color: rgb(150, 187, 124);
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
`;

const JoinUsHeader = styled.h2`
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  font-size: 40px;
  font-weight: 700;
`;

const JoinUsParagraph2 = styled.p`
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  width: 469px;
  text-align: center;
`;

const JoinUsForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const JoinUsInput = styled.input`
  border: 0px;
  width: 650px;
  border-radius: 5px 0px 0px 5px;
  background: rgb(249, 249, 249);
  color: rgb(115, 115, 115);
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  padding: 20px 15px;
`;

const JoinUsButton = styled.button`
  cursor: pointer;
  border: 0px;
  border-radius: 0px 5px 5px 0px;
  /* primary-color */
  background: rgb(150, 187, 124);
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  padding: 20px 15px;
`;

export {
  JoinUsSection,
  JoinUsHeaderContainer,
  JoinUsParagraph,
  JoinUsHeader,
  JoinUsParagraph2,
  JoinUsForm,
  JoinUsInput,
  JoinUsButton,
};
