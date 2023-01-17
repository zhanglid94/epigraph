import React from 'react';
import Fade from 'react-reveal/Fade';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import BannerWrapper, {
  BannerContent,
  DiscountLabel,
  BannerImage,
  ButtonGroup,
} from './banner.style';

import bannerImg from 'common/assets/image/cryptoModern/banner-bg.png';

const Banner = () => {
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade up>
            <Heading
              as="h1"
              content={<>Risk Hedged.<br />Return Optimized.</>}
            />
          </Fade>
          <Fade up delay={200}>
            <Text
              content="Diversify your portfolio & maximize your return with crypto-native derivatives, perpetual options, and structured products. "
            />
          </Fade>
        </BannerContent>
        <BannerImage>
          <Fade in delay={100}>
            <NextImage src={bannerImg} alt="Banner" />
          </Fade>
        </BannerImage>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
