import styled, { createGlobalStyle, keyframes, ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Header from "./components/header";
import WhyChooseUs from "./components/why-choose-us";
import WhatWeClean from "./components/gallery";
import Carousel from "./components/carousel";
import ContactUs from "./components/contact-us";

const fadeIn = keyframes`
0% {
  opacity: 0;
}
100%{
  opacity: 1;
}
`;
const StyledAppWrapper = styled.div`
  animation: ${fadeIn} 2s ease-out;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.xl2};
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Rubik", sans-serif;
    margin: 0;
    
  }
  h1, h2, h3, h4, h5 {
    padding: 0;
    margin: 0;
    font-weight: 400;
  }
  p, span {
    font-weight: 300;
  }
`;

const recommendations = [
  `
  הצליחו להחזיר לחיים את הספות הישנות שלנו שהיו במצב נוראי. השירות היה מקצועי ומדויק, וכל כתם נעלם כלא היה. הצוות הגיע בזמן, עבד ביסודיות והשאיר את הבית נקי ומסודר. - דנה.
  `,
  `
  Restart ניקו את המזרונים שלנו בצורה מושלמת. והמזרונים נראים ומרגישים חדשים לגמרי. השירות היה מקצועי ואדיב. תודה רבה! - מיכל.
  `,
  `
  שירות מדהים! הצוות היה מקצועי והספות נראות מעולות. הצוות היה מאוד נחמד וענה על כל השאלות שלי. תודה רבה ל-Restart! - רועי.
  `,
  `
  החלטתי למכור את הרכב שלי ו-Restart עשו עבודה מצוינת עם ניקוי הריפודים.
  הרכב נראה כמו חדש, ממליץ בחום - אבי.    
  `,
  `
  הספות שלנו נראות כחדשות בזכות הצוות המקצועי! השירות היה מהיר ואדיב, והעבודה בוצעה בצורה יסודית. בהחלט מומלץ בחום לכל מי שמחפש ניקוי ספות איכותי. - שרון.
  `,
];

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledAppWrapper dir="rtl">
        <Header />
        <WhyChooseUs />
        <WhatWeClean />
        <Carousel title={"לקוחות מספרים"} elements={recommendations} />
        <ContactUs />
      </StyledAppWrapper>
    </ThemeProvider>
  );
};
export default App;
