import {
  InfoSection,
  InfoList,
  InfoCard,
  InfoTitle,
  InfoParagraph,
} from "./style";

export const Info = () => {
  return (
    <InfoSection>
      <InfoList>
        <InfoCard>
          <InfoTitle>15K</InfoTitle>
          <InfoParagraph>Happy Customers</InfoParagraph>
        </InfoCard>
        <InfoCard>
          <InfoTitle>150K</InfoTitle>
          <InfoParagraph>Monthly Visitors</InfoParagraph>
        </InfoCard>
        <InfoCard>
          <InfoTitle>15</InfoTitle>
          <InfoParagraph>Countries Worldwide</InfoParagraph>
        </InfoCard>
        <InfoCard>
          <InfoTitle>100+</InfoTitle>
          <InfoParagraph>Top Partners</InfoParagraph>
        </InfoCard>
      </InfoList>
    </InfoSection>
  );
};
