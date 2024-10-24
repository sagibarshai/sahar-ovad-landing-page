import { useWindowDimensions } from "../../hooks/use-window-inner-width";
import { theme } from "../../theme";
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
          <StyledWhatWeCleanTitle>מה אנחנו עושים?</StyledWhatWeCleanTitle>
          <StyledMobileGalleryWrapper>
            <StyledGalleryRegular backgroundImagePath={"./images/gallery-1.jpeg"} />
            <StyledGalleryRegular backgroundImagePath={"./images/gallery-2.jpeg"} />
            <StyledGalleryRegular backgroundImagePath={"./images/gallery-3.jpeg"} />
            <StyledGalleryRegular backgroundImagePath={"./images/gallery-4.jpeg"} />
            <StyledGalleryRegular backgroundImagePath={"./images/gallery-5.jpeg"} />
          </StyledMobileGalleryWrapper>
        </StyledWhatWeCleanContentWrapper>
      </StyledWhatWeCleanWrapper>
    );
  }

  return (
    <StyledWhatWeCleanWrapper>
      <StyledWhatWeCleanContentWrapper>
        <StyledWhatWeCleanTitle>מה אנחנו עושים?</StyledWhatWeCleanTitle>
        <StyledGalleryWrapper>
          <StyledGalleryRight>
            <StyledGalleryRightTop>
              <StyledGalleryRegular backgroundImagePath={"./images/gallery-1.jpeg"} />
              <StyledGalleryRegular backgroundImagePath={"./images/gallery-2.jpeg"} />
            </StyledGalleryRightTop>

            <StyledGalleryRightTop>
              <StyledGalleryRegular backgroundImagePath={"./images/gallery-4.jpeg"} />
              <StyledGalleryRegular backgroundImagePath={"./images/gallery-5.jpeg"} />
            </StyledGalleryRightTop>
          </StyledGalleryRight>
          <StyledGalleryLeft backgroundImagePath={"./images/gallery-6.jpeg"} />
        </StyledGalleryWrapper>
      </StyledWhatWeCleanContentWrapper>
    </StyledWhatWeCleanWrapper>
  );
};
export default WhatWeClean;
