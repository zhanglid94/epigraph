import React from 'react';
import Fade from 'react-reveal/Fade';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './investment.style';
import GraphImg from 'common/assets/image/cryptoModern/pattern.gif';
import { WalletFeatures } from 'common/data/CryptoModern';
import FeatureBlock from 'common/components/FeatureBlock';
import dummyImg from 'common/assets/image/cryptoModern/pattern.png';

const InvestmentPortal = () => {
  return (
    <SectionWrapper id="targetUsers">
      <Container>
        <ContentWrapper>
          <div className="content">
            <Fade up>
              <Heading content="Target Users" />
            </Fade>
            <Fade up delay={100}>
              <div className="walletfeatures">
                {WalletFeatures.map((feature, index) => (
                  <Fade up delay={100 + index * 100}>
                    <FeatureBlock
                      key={`feature_point-${index}`}
                      icon={<img src={feature.icon?.src} />}
                      iconPosition="left"
                      title={<Text content={feature.title} />}
                    />
                  </Fade>
                ))}
              </div>
            </Fade>
          </div>
          <div className="image">
            <NextImage src={GraphImg} alt="Graph Image" />
          </div>
        </ContentWrapper>
      </Container>
      <Image className="patternImg" src={dummyImg?.src} alt="pattern Image" />
    </SectionWrapper>
  );
};

export default InvestmentPortal;
