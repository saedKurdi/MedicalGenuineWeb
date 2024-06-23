import {
  PricingSection,
  PricingCardList,
  PricingCard,
  RoundHeart,
  FreeText,
  Paragraph1,
  PriceContainer,
  Price,
  PriceText,
  Paragraph2,
  PricingButton,
  CheckboxList,
  Checkbox,
  IsNew,
} from "./styles";

import {
  DepartmentContainer,
  DepartmentParagraph1,
  DepartmentHeader,
  DepartmentParagraph2,
} from "../Department/style";

import circleQush from "../../assets/circleQush.png";
import emptyCircle from "../../assets/emtyCircle.png";
import New from "../../assets/new.png";
export const Pricing = () => {
  return (
    <PricingSection>
      <DepartmentContainer>
        <DepartmentParagraph1>Practice Advice</DepartmentParagraph1>
        <DepartmentHeader>Pricing</DepartmentHeader>
        <DepartmentParagraph2>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </DepartmentParagraph2>
      </DepartmentContainer>
      <PricingCardList>
        {/* CARD 1*/}
        <PricingCard primary>
          <RoundHeart primary>
            <i class="fa-solid fa-heart"></i>
          </RoundHeart>
          <FreeText primary>free</FreeText>
          <Paragraph1 primary>Organize across all apps by hand</Paragraph1>
          <PriceContainer primary>
            <Price primary>19$</Price>
            <PriceText>Per Month</PriceText>
          </PriceContainer>
          <Paragraph2 primary>
            Slate helps you see how many more days you need...
          </Paragraph2>
          <PricingButton primary>Try for free</PricingButton>
          <CheckboxList>
            <Checkbox primary>
              <img src={circleQush} alt="Circle" />
              Unlimited product updates
            </Checkbox>
            <Checkbox primary>
              <img src={circleQush} alt="Circle" />
              Unlimited product updates
            </Checkbox>
            <Checkbox primary>
              <img src={circleQush} alt="Circle" />
              Unlimited product updates
            </Checkbox>
            <Checkbox primary>
              <img src={emptyCircle} alt="Circle" />
              1GB Cloud storage
            </Checkbox>
            <Checkbox primary>
              <img src={emptyCircle} alt="Circle" />
              Email and community
            </Checkbox>
          </CheckboxList>
        </PricingCard>
        {/* CARD 2*/}
        <PricingCard>
          <RoundHeart>
            <i class="fa-solid fa-heart"></i>
          </RoundHeart>
          <FreeText>free</FreeText>
          <Paragraph1>Organize across all apps by hand</Paragraph1>
          <PriceContainer>
            <Price>19$</Price>
            <PriceText>Per Month</PriceText>
          </PriceContainer>
          <Paragraph2>
            Slate helps you see how many more days you need...
          </Paragraph2>
          <PricingButton>Try for free</PricingButton>
          <CheckboxList>
            <Checkbox>
              <img src={circleQush} alt="Circle" />
              Unlimited product updates
            </Checkbox>
            <Checkbox>
              <img src={circleQush} alt="Circle" />
              Unlimited product updates
            </Checkbox>
            <Checkbox>
              <img src={circleQush} alt="Circle" />
              Unlimited product updates
            </Checkbox>
            <Checkbox>
              <img src={emptyCircle} alt="Circle" />
              1GB Cloud storage
            </Checkbox>
            <Checkbox>
              <img src={emptyCircle} alt="Circle" />
              Email and community
            </Checkbox>
          </CheckboxList>
        </PricingCard>
        {/* CARD 3*/}
        <PricingCard primary>
          <IsNew src={New} />
          <RoundHeart primary>
            <i class="fa-solid fa-heart"></i>
          </RoundHeart>
          <FreeText primary>free</FreeText>
          <Paragraph1 primary>Organize across all apps by hand</Paragraph1>
          <PriceContainer primary>
            <Price primary>19$</Price>
            <PriceText>Per Month</PriceText>
          </PriceContainer>
          <Paragraph2 primary>
            Slate helps you see how many more days you need...
          </Paragraph2>
          <PricingButton primary>Try for free</PricingButton>
          <CheckboxList>
            <Checkbox primary>
              <img src={circleQush} alt="Circle" />
              Unlimited product updates
            </Checkbox>
            <Checkbox primary>
              <img src={circleQush} alt="Circle" />
              Unlimited product updates
            </Checkbox>
            <Checkbox primary>
              <img src={circleQush} alt="Circle" />
              Unlimited product updates
            </Checkbox>
            <Checkbox primary>
              <img src={emptyCircle} alt="Circle" />
              1GB Cloud storage
            </Checkbox>
            <Checkbox primary>
              <img src={emptyCircle} alt="Circle" />
              Email and community
            </Checkbox>
          </CheckboxList>
        </PricingCard>
      </PricingCardList>
    </PricingSection>
  );
};
