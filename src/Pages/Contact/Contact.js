import React from 'react';
import styled from 'styled-components';

import ContactForm from '../../Components/ContactForm';

const ContentContainer = styled.div`
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  margin-bottom: 3rem;

  @media (max-width: 900px) {
    padding: 0 0.25rem;
  }
`;

const Content = styled.section`
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
  border-radius: 10px;
  background-color: #f4f4f4;
  color: #333;
  padding: 2rem;

  div {
    padding: 2rem;
  }

  p {
    text-align: left;
  }

  a {
    color: #7fdbff;
  }
`;

const Contact = props => {
  return (
    <ContentContainer>
      <Content>
        <h2>Contact Me</h2>
        <p>
          Reach out using this form to discuss your QuickBooks®
          bookkeeping needs.
        </p>

        <ContactForm />

        <p>
          <b>Email:</b>{' '}
          <a href="mailto:lindaquickbooks@gmail.com">
            lindaquickbooks@gmail.com
          </a>
        </p>

        <p>
          <b>Phone:</b> <a href="tel:6032790407">(603) 279-0407</a>
        </p>
      </Content>
    </ContentContainer>
  );
};

export default Contact;
