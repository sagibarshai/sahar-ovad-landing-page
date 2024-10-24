import { IconClean, IconClock, IconFast, IconHandShake, IconOk, IconSaveMoney } from "../../icons";
import InfoCard from "../info-card";
import {
  StyledInfoCardsWrapper,
  StyledWhyChooseUsContentWrapper,
  StyledWhyChooseUsText,
  StyledWhyChooseUsTitle,
  StyledWhyChooseUsWrapper,
} from "./styled";

const WhyChooseUs = () => {
  return (
    <StyledWhyChooseUsWrapper>
      <StyledWhyChooseUsContentWrapper>
        <StyledWhyChooseUsTitle>למה לבחור בנו?</StyledWhyChooseUsTitle>

        <StyledInfoCardsWrapper>
          <InfoCard
            icon={<IconClean size={48} />}
            title="מקצעויות"
            content="
             אנו משתמשים בציוד ובחומרים הטובים והחדישים  ביותר"
          />
          <InfoCard
            icon={<IconHandShake size={48} />}
            title="אמינות"
            content="בעזרת הציוד והחומרים המתקדמים שלנו אנו מגיעים למקסימום חיטוי וניקוי האפשרי"
          />
          <InfoCard icon={<IconClock size={48} />} title="שירות " content="לוח הזמנים שלנו הוא גמיש ונגיש למען הלקוח" />
        </StyledInfoCardsWrapper>
      </StyledWhyChooseUsContentWrapper>
    </StyledWhyChooseUsWrapper>
  );
};

export default WhyChooseUs;
