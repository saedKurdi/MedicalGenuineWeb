import styled from "styled-components";

const DepartmentSection = styled.section`
  padding: 140px 195px;
  display: flex;
  flex-direction: column;
  background-color: rgb(45, 64, 89);
  gap: 25px;
`;

const DepartmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 35px;
`;

const DepartmentHeader = styled.h2`
  font-family: Montserrat;
  font-size: 40px;
  font-weight: 700;
  color: white;
`;

const DepartmentParagraph1 = styled.p`
  color: rgb(150, 187, 124);
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
`;

const DepartmentParagraph2 = styled.p`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  color: white;
  width: 470px;
  line-height: 25px;
`;

const DepartmentCardList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DepartmentCard = styled.li`
  background-color: red;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
`;

const CardImage = styled.img`
  height: 300px;
`;

const RoundImages = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  left: 30%;
  top: 40%;
`;

const RoundImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 44px;
  background-color: white;
  cursor: pointer;
`;

const Sale = styled.div`
  border: 0;
  position: absolute;
  border-radius: 3px;
  background: rgb(231, 64, 64);
  padding: 3px 10px;
  color: white;
  left: 15px;
  top: 24px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
`;

const TextCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 35px 25px;
  width: 298px;
  background-color: white;
`;

const TextCardFirstContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const TextCardHeader = styled.h4`
  color: rgb(37, 43, 66);
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 700;
`;

const TextCardParagraph1 = styled.p`
  color: rgb(150, 187, 124);
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
`;

const TextCardParagraph2 = styled.p`
  color: rgb(115, 115, 115);
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
`;

const TextCardParagraph3 = styled.p`
  color: rgb(115, 115, 115);
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
`;

const SalesContainer = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FirstPrice = styled.p`
  color: rgb(189, 189, 189);
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 700;
`;

const SecondPrice = styled.p`
  color: rgb(255, 171, 113);
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 700;
`;

const RoundButton = styled.button`
  border: 1px solid rgb(150, 187, 124);
  border-radius: 37px;
  padding: 10px 20px 10px 20px;
  color: rgb(150, 187, 124);
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  width: 141.14px;
  height: 44px;
`;

export {
  DepartmentSection,
  DepartmentContainer,
  DepartmentHeader,
  DepartmentParagraph1,
  DepartmentParagraph2,
  DepartmentCardList,
  DepartmentCard,
  CardImage,
  RoundImages,
  RoundImage,
  Sale,
  TextCard,
  TextCardFirstContainer,
  TextCardHeader,
  TextCardParagraph1,
  TextCardParagraph2,
  TextCardParagraph3,
  SalesContainer,
  PriceContainer,
  FirstPrice,
  SecondPrice,
  RoundButton,
};
