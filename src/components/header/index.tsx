import {
  StyledHeaderContentWrapper,
  StyledHeaderImg,
  StyledHeaderSubtitle,
  StyledHeaderTitle,
  StyledHeaderWrapper,
  StyledHeaderLogo,
} from "./styled";

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledHeaderContentWrapper>
        <StyledHeaderLogo src="./images/logo.svg" />
        <StyledHeaderTitle> עבודות זכוכית ואלומיניום </StyledHeaderTitle>
        <StyledHeaderSubtitle>ניקוי ספות עושים עם Restart, נקיון והסרת כתמים קשים עם ציוד וחומרים מתקדמים </StyledHeaderSubtitle>
        <StyledHeaderImg />
      </StyledHeaderContentWrapper>
    </StyledHeaderWrapper>
  );
};
export default Header;
