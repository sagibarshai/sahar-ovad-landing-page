import { useWindowDimensions } from "../../hooks/use-window-inner-width";
import { theme } from "../../theme";
import IconText from "../icons-text";
import {
  StyledGalleryLeft,
  StyledGalleryRegular,
  StyledGalleryRight,
  StyledGalleryRightMiddle,
  StyledGalleryRightTop,
  StyledGalleryWrapper,
  StyledMobileGalleryWrapper,
  StyledWhatWeCleanContentWrapper,
  StyledWhatWeCleanTitle,
  StyledWhatWeCleanWrapper,
} from "./styled";

const WhatWeClean = () => {
  const { width } = useWindowDimensions();

  if (width <= theme.breakPoints.smallNumber) {
    return (
      <StyledWhatWeCleanWrapper>
        <StyledWhatWeCleanContentWrapper>
          <StyledWhatWeCleanTitle>תמונות מהשטח</StyledWhatWeCleanTitle>
          <StyledMobileGalleryWrapper>
            <IconText icon={<StyledGalleryRegular backgroundImagePath={"./images/gallery-1.jpeg"} />} title="רשת שקופה בלתי נראת לעין - להיט!" />
            <IconText icon={<StyledGalleryRegular backgroundImagePath={"./images/gallery-8.jpeg"} />} title="החלפת מנועים של תריסים חשמליים" />
            <IconText icon={<StyledGalleryRegular backgroundImagePath={"./images/gallery-4.jpeg"} />} title="מעבר נגיש לבעלי חיים" />
            <IconText icon={<StyledGalleryRegular backgroundImagePath={"./images/gallery-9.jpeg"} />} title="החלפת גומיות למקלחונים" />
            <IconText icon={<StyledGalleryRegular backgroundImagePath={"./images/gallery-5.jpeg"} />} title="דלת רשת" />
          </StyledMobileGalleryWrapper>
        </StyledWhatWeCleanContentWrapper>
      </StyledWhatWeCleanWrapper>
    );
  }

  return (
    <StyledWhatWeCleanWrapper>
      <StyledWhatWeCleanContentWrapper>
        <StyledWhatWeCleanTitle>תמונות מהשטח</StyledWhatWeCleanTitle>
        <StyledGalleryWrapper>
          <StyledGalleryRight>
            <StyledGalleryRightTop>
              <IconText icon={<StyledGalleryRegular backgroundImagePath={"./images/gallery-1.jpeg"} />} title="רשת שקופה בלתי נראת לעין - להיט!" />
              <IconText icon={<StyledGalleryRegular backgroundImagePath={"./images/gallery-8.jpeg"} />} title="החלפת מנועים של תריסים חשמליים" />
            </StyledGalleryRightTop>

            <StyledGalleryRightTop>
              <IconText icon={<StyledGalleryRegular backgroundImagePath={"./images/gallery-4.jpeg"} />} title="מעבר נגיש לבעלי חיים" />
              <IconText icon={<StyledGalleryRegular backgroundImagePath={"./images/gallery-9.jpeg"} />} title="החלפת גומיות למקלחונים" />
            </StyledGalleryRightTop>
          </StyledGalleryRight>

          <IconText icon={<StyledGalleryRegular backgroundImagePath={"./images/gallery-5.jpeg"} />} title="דלת רשת" />
        </StyledGalleryWrapper>
      </StyledWhatWeCleanContentWrapper>
    </StyledWhatWeCleanWrapper>
  );
};
export default WhatWeClean;
