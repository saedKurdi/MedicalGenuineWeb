import {
  DepartmentContainer,
  DepartmentParagraph1,
  DepartmentHeader,
  DepartmentParagraph2,
} from "../Department/style";

import {
  ClientsSection,
  ClientCardsList,
  ClientCard,
  ClientParagraph,
  ClientContainer,
  ClientTextContainer,
  ClientName,
  ClientJob,
} from "./styles";
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";
import stars from "../../assets/stars.png";
export const Clients = () => {
  return (
    <ClientsSection>
      <DepartmentContainer>
        <DepartmentParagraph1>Practice Advice</DepartmentParagraph1>
        <DepartmentHeader>Each and every client is important</DepartmentHeader>
        <DepartmentParagraph2>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </DepartmentParagraph2>
        <ClientCardsList>
          <ClientCard>
            <img src={stars} alt="" />
            <ClientParagraph>
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </ClientParagraph>
            <ClientContainer>
              <img src={user1} alt="user 1" />
              <ClientTextContainer>
                <ClientName>Regina Miles</ClientName>
                <ClientJob>Programmer</ClientJob>
              </ClientTextContainer>
            </ClientContainer>
          </ClientCard>
          <ClientCard>
            <img src={stars} alt="" />
            <ClientParagraph>
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </ClientParagraph>
            <ClientContainer>
              <img src={user2} alt="user 1" />
              <ClientTextContainer>
                <ClientName>John Wick</ClientName>
                <ClientJob>Serial Killer</ClientJob>
              </ClientTextContainer>
            </ClientContainer>
          </ClientCard>
          <ClientCard>
            <img src={stars} alt="" />
            <ClientParagraph>
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </ClientParagraph>
            <ClientContainer>
              <img src={user3} alt="user 1" />
              <ClientTextContainer>
                <ClientName>Jack Hanma</ClientName>
                <ClientJob>President</ClientJob>
              </ClientTextContainer>
            </ClientContainer>
          </ClientCard>
        </ClientCardsList>
      </DepartmentContainer>
    </ClientsSection>
  );
};
