import { IconClean, IconClock, IconFast, IconHandShake, IconMosquito, IconOk, IconSaveMoney, IconTools } from "../../icons";
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
        <StyledWhyChooseUsTitle>מה אנחנו עושים?</StyledWhyChooseUsTitle>

        <StyledInfoCardsWrapper>
          <InfoCard
            icon={<IconMosquito size={48} />}
            title="החלפה ותיקון רשתות נגד יתושים"
            content={
              <div>
                <b>רשת בלויה ודהויה? </b>
                <br />
                <b>רשת קרועה ולא מתוחה?</b>
                <br />
                <b>אין רשת בכלל?</b>
                <br />
                <b>שירות ותיקון בבית הלקוח</b>
              </div>
            }
          />
          <InfoCard
            icon={<IconHandShake size={48} />}
            title="תיקוני תריסים"
            content={
              <div>
                <b> תיקוני תריסים חשמליים</b>
                <br />
                <b> תיקוני תריסי גלילה</b>
                <br />
                <b> שירות ותיקון בבית הלקוח</b>
                <br />
              </div>
            }
          />
          <InfoCard
            icon={<IconTools size={48} />}
            title="החלפת גומיות למקלחונים"
            content={
              <div>
                <b>אין לכם מקלחון בבית?</b>
                <br />
                <b>הגומי במקלחון בלוי?</b>
                <br />
                <b> המים יוצאים החוצה?</b>
                <br />
                <b> שירות ותיקון בבית הלקוח</b>
              </div>
            }
          />
        </StyledInfoCardsWrapper>
      </StyledWhyChooseUsContentWrapper>
    </StyledWhyChooseUsWrapper>
  );
};

export default WhyChooseUs;
