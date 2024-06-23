import {
  JoinUsSection,
  JoinUsHeaderContainer,
  JoinUsParagraph,
  JoinUsHeader,
  JoinUsParagraph2,
  JoinUsForm,
  JoinUsInput,
  JoinUsButton,
} from "./styles";
export const JoinUs = () => {
  return (
    <JoinUsSection>
      <JoinUsHeaderContainer>
        <JoinUsParagraph>Newsletter</JoinUsParagraph>
        <JoinUsHeader>JOIN US</JoinUsHeader>
        <JoinUsParagraph2>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </JoinUsParagraph2>
      </JoinUsHeaderContainer>
      <JoinUsForm>
        <JoinUsInput placeholder="Your Email" />
        <JoinUsButton>Subscribe</JoinUsButton>
      </JoinUsForm>
    </JoinUsSection>
  );
};
