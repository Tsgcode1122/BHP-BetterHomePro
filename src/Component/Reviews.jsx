import React from "react";
import styled from "styled-components";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import Facebook from "../Images/facebook.png";
import r1 from "../Images/r1.jpg";
import r2 from "../Images/r2.jpg";
import r3 from "../Images/r3.jpg";
import r4 from "../Images/r4.jpg";
import r5 from "../Images/r5.jpg";
import r6 from "../Images/r6.jpg";
import Heading from "../FixedComponent/Heading";
import { Colors } from "../Colors/ColorComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  color: #000;
  overflow: hidden;
  padding-bottom: 2rem;
  @media screen and (min-width: 1200px) {
    margin: 0 9rem;
  }
`;

const Headings = styled.h1`
  font-size: 3.2rem;
  font-weight: 100;
  padding: 60px 60px 0 60px;
  line-height: 0.9;
  font-weight: 100;
  color: #1f4ca7;
  margin: 0;
  @media screen and (max-width: 320px) {
    font-size: 2.5rem;
    font-weight: 500;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 2.8rem;
    font-weight: 500;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 3rem;
    font-weight: 500;
  }
`;

const SubHeading = styled.p`
  font-size: 0.8rem;
  color: #555;
  padding: 0 80px;
  margin-bottom: 40px;
  font-weight: 400;
  @media screen and (max-width: 320px) {
    font-size: 0.7rem;
    padding: 0 60px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 0.7rem;
    padding: 0 70px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 0.7rem;
    padding: 0 70px;
  }
  @media screen and (min-width: 800px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.1rem;
  }
  @media screen and (min-width: 800px) {
    font-size: 1rem;
  }
`;

const ReviewCard = styled.div`
  background: ${Colors.lightgreen} !important;
  min-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: left;
  margin: 0 5px;
  border-radius: 10px;
  scroll-snap-align: center;
  @media screen and (max-width: 320px) {
    min-width: 250px;
    padding: 8px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    min-width: 250px;
    padding: 8px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    min-width: 250px;
    padding: 8px;
  }
`;

const ReviewText = styled.p`
  font-size: 0.8rem;
  margin-bottom: 10px;
  min-height: 80px;
  @media screen and (max-width: 320px) {
    font-size: 0.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 0.9rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 0.9rem;
  }
`;

const ReviewDate = styled.p`
  font-size: 0.8rem;
  color: #777;
`;

const Reviewer = styled.div`
  font-size: 0.8rem;
  padding: 0 !important;
  margin: 0;
  font-weight: 600;
  @media screen and (max-width: 320px) {
    font-size: 0.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 0.9rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 0.9rem;
  }
`;

const SlideDiv = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 20px;
  width: 100%;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SpanReview = styled.div`
  background: #f4faf1;
  border-radius: 10px;
  padding: 20px 30px;
`;

const Rev = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const ReviewerDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ReviewerImg = styled.div`
  padding: 0 !important;
  margin: 0;
  img {
    max-width: 100%;
    border-radius: 50%;
  }
`;

const Reviews = () => {
  const reviews = [
    {
      text: "Hired it to clean my air ducts in all my house. Did an excellent job. Fast, efficient, professional and affordable. Greatly recommended.",
      date: "03 June",
      reviewer: "Eno Andoni",
      rating: 5,
      image: r1,
    },
    {
      text: "Jacob did an amazing job! Very professional and good communication about the problem and how to fix it!",
      date: "21 June",
      reviewer: "Grace Walker",
      rating: 4.5,
      image: r2,
    },
    {
      text: "Very nice service. I love the service thank you again",
      date: "20 june",
      reviewer: "Tout Vas Rester",
      rating: 4,
      image: r3,
    },
    {
      text: "Great service, great communication over great person to have come out to get you right. thanks Jacob",
      date: "20 June",
      reviewer: "Riean Cazenave",
      rating: 4,
      image: r4,
    },
    {
      text: "They came and did my ducts for a good price in compare to the other companies I checked with. Technician was very polite and explained everything very good. Highly recommend them",
      date: "6 June",
      reviewer: "Zachery Liu",
      rating: 5,
      image: r5,
    },
    {
      text: "Very professional and cleaned my duct very fast and efficiently!",
      date: "30 May",
      reviewer: "David Bowen Jr",
      rating: 4,
      image: r6,
    },
  ];

  return (
    <Container>
      <Heading>Reviews & Testimonial</Heading>

      <SubHeading>See Why Our Clients Recommend Us</SubHeading>

      <SlideDiv>
        {reviews.map((review, index) => (
          <ReviewCard key={index}>
            <SpanReview>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                {[...Array(5)].map((_, i) => {
                  if (i < Math.floor(review.rating)) {
                    return (
                      <StarFilled
                        key={i}
                        style={{
                          color: "#ffffff",
                          background: "#F26B81",
                          marginRight: "2px",
                        }}
                      />
                    );
                  } else if (i < review.rating) {
                    return (
                      <StarFilled
                        key={i}
                        style={{
                          color: "#ffffff",
                          background:
                            "linear-gradient(90deg, #F26B81 50%, #ccc 50%)",
                          marginRight: "2px",
                        }}
                      />
                    );
                  } else {
                    return (
                      <StarOutlined
                        key={i}
                        style={{
                          color: "#ffffff",
                          background: "#ccc",
                          marginRight: "2px",
                        }}
                      />
                    );
                  }
                })}
                <img
                  src={Facebook}
                  style={{
                    marginLeft: "auto",
                    maxWidth: "100%",
                    height: "20px",
                  }}
                />
              </div>
              <ReviewText>"{review.text}"</ReviewText>

              <ReviewerDetails>
                <Rev>
                  <ReviewerImg>
                    <img
                      src={review.image}
                      style={{
                        marginLeft: "auto",
                        maxWidth: "100%",
                        height: "20px",
                      }}
                    />
                  </ReviewerImg>

                  <Reviewer>{review.reviewer}</Reviewer>
                </Rev>
                <ReviewDate>{review.date}</ReviewDate>
              </ReviewerDetails>
            </SpanReview>
          </ReviewCard>
        ))}
      </SlideDiv>
    </Container>
  );
};

export default Reviews;
