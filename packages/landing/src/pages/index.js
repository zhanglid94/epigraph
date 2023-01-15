import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/theme/appModern';
import ResetCSS from 'common/assets/css/style';
import Sticky from 'react-stickynode';
import Navbar from 'containers/CryptoModern/Navbar';
import Banner from 'containers/CryptoModern/Banner';
import CountDown from 'containers/CryptoModern/CountDown';
import Features from 'containers/CryptoModern/FeatureSection';
import WorkHistory from 'containers/CryptoModern/WorkHistory';
import Investment from 'containers/CryptoModern/Investment';
import FundRaising from 'containers/CryptoModern/FundRaising';
import Privacypolicy from 'containers/CryptoModern/Privacy';
import WalletSection from 'containers/CryptoModern/WalletSection';
import MapSection from 'containers/CryptoModern/MapSection';
import FaqSection from 'containers/CryptoModern/FaqSection';
import Newsletter from 'containers/CryptoModern/Newsletter';
import Footer from 'containers/CryptoModern/Footer';
import GlobalStyle, { CryptoWrapper, ContentWrapper } from 'containers/CryptoModern/cryptoModern.style';

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>EpiGraph | A crypto-native, instant-settlement, all-in-one DeFi portal for everyone</title>
          <meta name="Description" content="EpiGraph Finance landing page" />
          <meta name="theme-color" content="#2563FF" />
          <meta name="keywords" content="Crypto, finance, DeFi" />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        {/* end of global and reset style */}

        {/* start app classic landing */}
        <CryptoWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Banner />
            <CountDown />
            <Features />
            <WorkHistory />
            <Investment />
            {/* <FundRaising /> */}
            {/* <Privacypolicy /> */}
            {/* <WalletSection /> */}
            {/* <MapSection /> */}
            {/* <FaqSection /> */}
            {/* <Newsletter /> */}
          </ContentWrapper>
          <Footer />
        </CryptoWrapper>
        {/* end of app classic landing */}
      </>
    </ThemeProvider>
  );
};
export default Main;
