import React from 'react';
import Fade from 'react-reveal/Fade';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Container from 'common/components/UI/Container';
import NormalClock from './timer';
const deadline = new Date("2023-03-15T00:00:00-08:00");
import SectionWrapper, { ContentWrapper } from './countdown.style';

const CountDownSection = () => {
  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <Heading content="Our products starting in: " />
          <Fade up>
            <div className="timerCount">
              <NormalClock countdown={deadline} divider="true" />
            </div>
          </Fade>
          <Button className="primary" title="Connect Wallet (coming soon)" disabled />
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default CountDownSection;
