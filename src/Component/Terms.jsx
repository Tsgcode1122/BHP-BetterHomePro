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
    font-size: 0.9rem;

    line-height: 1.4;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 0.9rem;

    line-height: 1.4;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 0.9rem;

    line-height: 1.4;
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

const Terms = () => {
  return (
    <PrivacyPolicyContainer>
      <Info>
        <SubTitle>Acceptance of Terms</SubTitle>
        <Section>
          By accessing or using our website and services, including SMS
          communications, you agree to these Terms and Conditions. If you do not
          agree, please do not use our site or services.
        </Section>
      </Info>
      <Info>
        <SubTitle>Services Provided</SubTitle>
        <Section>
          Better Home Pros provides residential air duct cleaning, dryer vent
          cleaning, HVAC maintenance, and related services in North and South
          Carolina. We may update or modify our service offerings at any time
          without prior notice.
        </Section>
      </Info>
      <Info>
        <SubTitle>Website Use</SubTitle>
        <Section>
          You agree to:
          <List>
            <li>Use our site lawfully and respectfully</li>
            <li>
              Not attempt to hack, damage, or misuse the website or its systems
            </li>
            <li>Provide accurate information when submitting forms</li>
          </List>
        </Section>
      </Info>
      <Info>
        <SubTitle>Scheduling and Appointments</SubTitle>
        <Section>
          All appointments are subject to availability and confirmation. By
          requesting an appointment, you consent to us contacting you via phone,
          email, or SMS to confirm, update, or reschedule the service.
        </Section>
      </Info>
      <Info>
        <SubTitle>Pricing and Payments</SubTitle>
        <Section>
          Pricing may vary depending on the scope of work, home size, and
          condition. Payments are collected in person or over the phone — we do
          not process payments through our website at this time.
        </Section>
      </Info>
      <Info>
        <SubTitle> Cancellation Policy</SubTitle>
        <Section>
          Please notify us at least 24 hours in advance to cancel or change a
          scheduled service. We reserve the right to reschedule due to weather,
          safety, or logistical reasons.
        </Section>
      </Info>
      <Info>
        <SubTitle>SMS Terms and Conditions</SubTitle>
        <Section>
          By opting in to receive SMS communications from Better Home Pros, you
          agree to receive messages that may include:
          <List>
            <li>Appointment reminders or updates</li>
            <li>Special offers or promotions</li>
            <li>Service notifications</li>
            <li>General business-related messages</li>
          </List>
          <i>
            Message frequency may vary. Message and data rates may apply based
            on your mobile provider. You may opt out of receiving text messages
            at any time by replying STOP. For assistance, reply HELP or contact
            us at contact@thebetterhomepros.com. We do not share your SMS
            consent with third parties or affiliates. See our Privacy Policy for
            full details.
          </i>
        </Section>
      </Info>
      <Info>
        <SubTitle> Intellectual Property</SubTitle>
        <Section>
          All content on this website, including text, graphics, logos, and
          images, is the property of Better Home Pros LLC and may not be used
          without written consent.
        </Section>
      </Info>
      <Info>
        <SubTitle> Third-Party Links</SubTitle>
        <Section>
          Our website may link to third-party websites. We are not responsible
          for their content, policies, or accuracy.
        </Section>
      </Info>
      <Info>
        <SubTitle>Disclaimer of Warranties</SubTitle>
        <Section>
          We strive for accuracy and quality, but the website and services are
          provided "as is." We are not liable for:
          <List>
            <li>Temporary site unavailability</li>
            <li>Errors or omissions in content</li>
            <li>Indirect damages resulting from use</li>
          </List>
        </Section>
      </Info>
      <Info>
        <SubTitle>Governing Law</SubTitle>
        <Section>
          These terms are governed by the laws of the State of North Carolina.
          Any disputes shall be resolved in courts within Mecklenburg County,
          NC.
        </Section>
      </Info>
      <Info>
        <SubTitle>Contact Information</SubTitle>
        <ContactDetails>
          For questions about these Terms or anything else, please contact us:
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

export default Terms;
