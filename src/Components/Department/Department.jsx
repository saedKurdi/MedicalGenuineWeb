import {
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
} from "./style";
import cover1 from "../../assets/p-cover1.png";
import cover2 from "../../assets/p-cover2.png";
import cover3 from "../../assets/p-cover3.png";

import like from "../../assets/likeImg.png";
import basket from "../../assets/basket.png";
import eye from "../../assets/eye.png";

import frameStar from "../../assets/frameStar.png";
import downloadFrame from "../../assets/downloadFrame.png";
import { TextContainer } from "../Doctors/styles";

export const Department = () => {
  return (
    <DepartmentSection>
      <DepartmentContainer>
        <DepartmentParagraph1>Practice Advice</DepartmentParagraph1>
        <DepartmentHeader>Our Department</DepartmentHeader>
        <DepartmentParagraph2>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </DepartmentParagraph2>
      </DepartmentContainer>
      <DepartmentCardList>
        {/* Card 1 */}
        <DepartmentCard>
          <Sale>Sale</Sale>
          <CardImage src={cover1} />
          <RoundImages>
            <RoundImage src={like} />
            <RoundImage src={basket} />
            <RoundImage src={eye} />
          </RoundImages>
          <TextCard>
            <TextCardFirstContainer>
              <TextCardParagraph1>Cancer Care</TextCardParagraph1>
              <img width={50} height={26} src={frameStar} alt="" />
            </TextCardFirstContainer>
            <TextCardHeader>Best dental surgeons</TextCardHeader>
            <TextCardParagraph2>
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </TextCardParagraph2>
            <SalesContainer>
              <img src={downloadFrame} width={16} height={16} alt="" />
              <TextCardParagraph3>15 Sales</TextCardParagraph3>
            </SalesContainer>
            <PriceContainer>
              <FirstPrice>$16.48</FirstPrice>
              <SecondPrice>$6.48</SecondPrice>
            </PriceContainer>
            <RoundButton>
              Learn More <i class="fa-solid fa-angle-right"></i>
            </RoundButton>
          </TextCard>
        </DepartmentCard>
        {/* Card 2 */}
        <DepartmentCard>
          <Sale>Sale</Sale>
          <CardImage src={cover2} />
          <RoundImages>
            <RoundImage src={like} />
            <RoundImage src={basket} />
            <RoundImage src={eye} />
          </RoundImages>
          <TextCard>
            <TextCardFirstContainer>
              <TextCardParagraph1>Emergency Case</TextCardParagraph1>
              <img width={50} height={26} src={frameStar} alt="" />
            </TextCardFirstContainer>
            <TextCardHeader>Online Appoinment</TextCardHeader>
            <TextCardParagraph2>
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </TextCardParagraph2>
            <SalesContainer>
              <img src={downloadFrame} width={16} height={16} alt="" />
              <TextCardParagraph3>8 Sales</TextCardParagraph3>
            </SalesContainer>
            <PriceContainer>
              <FirstPrice>$146.48</FirstPrice>
              <SecondPrice>$56.48</SecondPrice>
            </PriceContainer>
            <RoundButton>
              Learn More <i class="fa-solid fa-angle-right"></i>
            </RoundButton>
          </TextCard>
        </DepartmentCard>
        {/* Card 3 */}
        <DepartmentCard>
          <Sale>Sale</Sale>
          <CardImage src={cover3} />
          <RoundImages>
            <RoundImage src={like} />
            <RoundImage src={basket} />
            <RoundImage src={eye} />
          </RoundImages>
          <TextCard>
            <TextCardFirstContainer>
              <TextCardParagraph1>Painless procedures</TextCardParagraph1>
              <img width={50} height={26} src={frameStar} alt="" />
            </TextCardFirstContainer>
            <TextCardHeader>Emergency Case</TextCardHeader>
            <TextCardParagraph2>
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </TextCardParagraph2>
            <SalesContainer>
              <img src={downloadFrame} width={16} height={16} alt="" />
              <TextCardParagraph3>20 Sales</TextCardParagraph3>
            </SalesContainer>
            <PriceContainer>
              <FirstPrice>$26.38</FirstPrice>
              <SecondPrice>$18.88</SecondPrice>
            </PriceContainer>
            <RoundButton>
              Learn More <i class="fa-solid fa-angle-right"></i>
            </RoundButton>
          </TextCard>
        </DepartmentCard>
      </DepartmentCardList>
    </DepartmentSection>
  );
};
