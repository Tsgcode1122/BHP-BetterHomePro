import React, { useState } from "react";
import styled from "styled-components";
import { Skeleton } from "antd";

const AppointmentContent = () => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };
  return (
    <>
      <Container>
        {loading && (
          <SkeletonContainer>
            <Skeleton active paragraph={{ rows: 10 }} /> {/* Skeleton effect */}
          </SkeletonContainer>
        )}
        <Iframe
          src="https://thebetterhomepros.setmore.com/amitai"
          title="Appointment Scheduling"
          frameBorder="0"
          onLoad={handleLoad} // Call handleLoad when iframe has loaded
          style={{ display: loading ? "none" : "block" }} // Hide iframe while loading
        />
      </Container>
    </>
  );
};

export default AppointmentContent;
const Content = styled.p`
  font-weight: 100 !important;
  padding: 1rem;
  color: Black;
  text-align: center;
  margin-bottom: 1rem;
  font-family: "Philosopher", sans-serif !important;
  @media screen and (max-width: 320px) {
    margin-bottom: 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    margin-bottom: 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 1000px) {
    font-size: 1.2rem;
    padding: 2rem 3rem;
  }

  @media screen and (min-width: 1200px) {
    font-size: 1.2rem;
    padding: 2rem 8rem;
  }
`;
const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SkeletonContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;
