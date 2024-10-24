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
        <StyledHeaderSubtitle>
          ברוכים הבאים למומחים בעבודות זכוכית, אלומיניום ורשתות -
          <br />
          פתרונות איכותיים ומעוצבים בהתאמה אישית עם שירות מקצועי ואמינות בלתי מתפשרת.
        </StyledHeaderSubtitle>
        <StyledHeaderImg />
      </StyledHeaderContentWrapper>
    </StyledHeaderWrapper>
  );
};
export default Header;
