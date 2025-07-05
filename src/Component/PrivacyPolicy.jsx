import React from "react";
import styled from "styled-components";

const PrivacyPolicyContainer = styled.div`
  max-width: 1000px;
  background-color: white;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: "Arial", sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
  color: #000000;
`;

const SubTitle = styled.h2`
  font-size: 1.3rem;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #000000;
  @media screen and (max-width: 320px) {
    font-size: 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1.1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 1.1rem;
  }
`;

const Section = styled.div`
  margin-bottom: 1px;
  line-height: 1.8;
  @media screen and (max-width: 320px) {
    font-size: 1rem;
    line-height: 1.5;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 16px;
    line-height: 1.5;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 18px;
    line-height: 1.7;
  }
`;

const List = styled.ul`
  padding-left: 20px;
  margin: 0;
`;

const ContactDetails = styled.div`
  line-height: 1.8;
`;
const Info = styled.div`
  border: 1px solid #f0f0f0;
  padding: 10px;
  border-radius: 10px;
  margin: 1rem 0;
`;

const PrivacyPolicy = () => {
  return (
    <PrivacyPolicyContainer>
      <Info>
        <SubTitle>Introduction</SubTitle>
        <Section>
          The Better Home Pros ("we", "our", or "us") respects your privacy and
          is committed to protecting your personal information. This Privacy
          Policy describes how we collect, use, and share your information when
          you visit our website or interact with us through other digital
          platforms.
        </Section>
      </Info>
      <Info>
        <SubTitle>Information We Collect</SubTitle>
        <Section>
          We may collect the following types of personal information from you:
          <List>
            <li>Full name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Residential address</li>
            <li>Preferred service type</li>
            <li>Requested service date</li>
            <li>
              Any other information you provide via contact forms, phone calls,
              WhatsApp, SMS, Facebook, Instagram, or other channels
            </li>
          </List>
        </Section>
      </Info>
      <Info>
        <SubTitle>How We Collect Information</SubTitle>
        <Section>
          Information is collected when you:
          <List>
            <li>Fill out a lead form or contact form on our website</li>
            <li>Call or text us</li>
            <li>
              Message us through WhatsApp, Facebook Messenger, or Instagram
            </li>
            <li>Interact with our ads on Facebook, Instagram, or Google</li>
            <li>Use our website (through cookies or analytics tools)</li>
          </List>
        </Section>
      </Info>
      <Info>
        <SubTitle>How We Use Your Information</SubTitle>
        <Section>
          We may use your information to:
          <List>
            <li>Provide our air duct cleaning and related services</li>
            <li>Schedule appointments</li>
            <li>Contact you about your service requests</li>
            <li>Send you promotions, reminders, or service updates</li>
            <li>Improve our services and website experience</li>
            <li>Conduct remarketing and advertising campaigns</li>
            <li>
              Track marketing performance (via Facebook Pixel, Google Ads, CRM,
              etc.)
            </li>
          </List>
          <i>
            By opting in to receive SMS communications from Better Home Pros,
            you agree to receive text messages regarding appointments,
            promotions, service updates, and other relevant information.
          </i>
          <br />
          <br />
          Your SMS consent is{" "}
          <strong>not shared with third parties or affiliates</strong> under any
          circumstances. You may opt out of receiving text messages at any time
          by replying STOP, and request help by replying HELP.
          <br />
          <br />
          <i>Message frequency may vary. Message and data rates may apply.</i>
        </Section>
      </Info>
      <Info>
        <SubTitle> Cookies and Tracking Technologies</SubTitle>
        <Section>
          We may use cookies, tracking pixels, and related technologies to:
          <List>
            <li>Understand user behavior on our site</li>
            <li>Provide personalized ads</li>
            <li>Measure ad performance</li>
            <li>Improve website functionality</li>
          </List>
          <i>
            You can disable cookies through your browser settings, but this may
            affect your experience.
          </i>
        </Section>
      </Info>
      <Info>
        <SubTitle> Sharing of Information</SubTitle>
        <Section>
          We may share your information with:
          <List>
            <li>
              Third-party service providers (CRM, hosting, analytics,
              advertising platforms)
            </li>
            <li>
              Facebook, Google, or other advertising platforms for remarketing
            </li>
            <li>
              Authorized employees and contractors who need it to provide
              services
            </li>
          </List>
          <i>We do not sell your personal information.</i>
        </Section>
      </Info>
      <Info>
        <SubTitle> Your Rights</SubTitle>
        <Section>
          Depending on your location, you may have rights to:
          <List>
            <li>Access the data we have about you</li>
            <li>Correct or delete your data</li>
            <li>Opt out of marketing communications</li>
            <li>Request that we do not track you via cookies</li>
          </List>
          <i>
            To exercise your rights, contact us at:
            contact@thebetterhomepros.com
          </i>
        </Section>
      </Info>
      <Info>
        <SubTitle> Data Retention</SubTitle>
        <Section>
          We retain your data only as long as necessary to fulfill service
          requests, maintain business records, and meet legal requirements.
        </Section>
      </Info>
      <Info>
        <SubTitle> Security</SubTitle>
        <Section>
          We take reasonable steps to protect your information but cannot
          guarantee absolute security of data transmitted over the internet.
        </Section>
      </Info>
      <Info>
        <SubTitle>Children’s Privacy</SubTitle>
        <Section>
          Our services are intended for adults over the age of 18yrs. We do not
          knowingly collect personal data from children under 13yrs.
        </Section>
      </Info>
      <Info>
        <SubTitle>Changes to This Policy</SubTitle>
        <Section>
          We may update this Privacy Policy from time to time. The "Effective
          Date" at the top of the page indicates the most recent update. We
          recommend reviewing this policy periodically.
        </Section>
      </Info>
      <Info>
        <SubTitle>Contact Us</SubTitle>
        <ContactDetails>
          If you have any questions about this Privacy Policy or how we handle
          your information, please contact us at:
          <br />
          📧{" "}
          <a
            href="mailto:contact@thebetterhomepros.com"
            style={{ color: "black", textDecoration: "none" }}
          >
            contact@thebetterhomepros.com
          </a>
          <br />
          📍{" "}
          <a
            href="https://www.google.com/maps/search/?api=1&query=8001+Raintree+Ln+Ste+213,+Charlotte,+NC+28277"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black", textDecoration: "underline" }}
          >
            8001 Raintree Ln Ste 213, Charlotte, NC 28277
          </a>
        </ContactDetails>
      </Info>
    </PrivacyPolicyContainer>
  );
};

export default PrivacyPolicy;
