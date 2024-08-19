import React, { useState } from "react";
import styled from "styled-components";
import Modal from "antd/es/modal";

// Importing images
import img1 from "../Images/b.jpg";
import img2 from "../Images/bb.jpg";
import img3 from "../Images/bbb.jpg";
import img4 from "../Images/t7.jpg";
import img5 from "../Images/t1.jpg";
import img6 from "../Images/t2.jpg";
import img7 from "../Images/t3.jpg";
import img8 from "../Images/t4.jpg";
import img9 from "../Images/t5.jpg";
import img10 from "../Images/t6.jpg";
import img11 from "../Images/ceo3.jpg";
import img12 from "../Images/ceo2.jpg";
import img13 from "../Images/ceo1.jpg";
import img14 from "../Images/t8.jpg";
import img15 from "../Images/t9.jpg";
import img16 from "../Images/t10.jpg";
import VideoGallery from "./VideoGallery";

const images = [
  img1,
  img2,

  img3,
  img4,
  img11,
  img5,
  img6,
  img7,
  img8,
  img12,
  img9,
  img13,
  img10,
  img15,
  img16,
  img14,
];

const GalleryContent = () => {
  const [visible, setVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const showModal = (imgSrc) => {
    setCurrentImage(imgSrc);
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
    setCurrentImage(null);
  };

  return (
    <>
      <GalleryContainer>
        {images.map((image, index) => (
          <ImageWrapper key={index} onClick={() => showModal(image)}>
            <img src={image} alt={`Gallery Image ${index + 1}`} />
          </ImageWrapper>
        ))}
      </GalleryContainer>

      <Modal visible={visible} footer={null} onCancel={handleCancel}>
        <ModalImage src={currentImage} alt="Full Image" />
      </Modal>

      <VideoGallery />
    </>
  );
};

export default GalleryContent;

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  padding: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media screen and (min-width: 800px) {
    padding: 20px 2rem;
  }
  @media screen and (min-width: 1000px) {
    padding: 20px 6rem;
  }
  @media screen and (min-width: 1200px) {
    padding: 20px 8rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    border-radius: 10px;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
`;
