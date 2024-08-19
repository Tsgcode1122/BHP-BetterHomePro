import React, { useState, useEffect } from "react";
import { Modal, Spin } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import styled from "styled-components";

import heroimg from "../Images/t13.jpg";
import heroimg2 from "../Images/t8.jpg";
import heroimg3 from "../Images/t21.jpg";
import heroimg4 from "../Images/t20.jpg";

import Heading from "../FixedComponent/Heading";
import { Colors } from "../Colors/ColorComponent";

// Styled components
const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  @media screen and (max-width: 320px) {
    padding: 5px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 10px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 10px;
  }
  @media screen and (min-width: 800px) {
    padding: 5px 2rem;
  }
  @media screen and (min-width: 1000px) {
    padding: 5px 5rem;
  }
  @media screen and (min-width: 1200px) {
    padding: 5px 10rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
  @media screen and (min-width: 800px) {
    width: calc(50% - 20px);
    border-radius: 20px;
  }
  img {
    max-width: 100%;
    /* width: auto; */
    /* height: auto; */
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;
const BlurOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  z-index: 1000;
  display: ${(props) => (props.visible ? "block" : "none")};
`;
const PlayIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
`;

const WaterCircleEffect = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.4);
  pointer-events: none;
`;

const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
`;

const SubHeading = styled.p`
  font-size: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 10px 0 1px 0;
  padding: 5px;
  border-radius: 20px;
  display: inline-block;
  background: ${Colors.lightgreen};
  color: #555;
  text-align: center;
  font-weight: 400;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Example Cloudinary video links
const videos = [
  "https://res.cloudinary.com/dhl0zyg5k/video/upload/v1724037926/RPReplay_Final1723980500_2_a0pd3z.mov",
  "https://res.cloudinary.com/dhl0zyg5k/video/upload/v1724036110/RPReplay_Final1724034988_reizpx.mov",
  "https://res.cloudinary.com/dhl0zyg5k/video/upload/v1723986786/RPReplay_Final1723980761_z8lucn.mov",
  "https://res.cloudinary.com/dhl0zyg5k/video/upload/v1723984777/RPReplay_Final1723980643_dfuwxe.mov",
];

// Example images associated with the videos
const images = [heroimg, heroimg2, heroimg3, heroimg4];

const VideoGallery = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  const showModal = (url) => {
    setVideoUrl(url);
    setIsModalVisible(true);
    setLoading(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setVideoUrl(null);
    setLoading(false);
  };

  useEffect(() => {
    if (videoUrl) {
      const videoElement = document.getElementById("video-player");
      if (videoElement) {
        videoElement.onloadeddata = () => {
          setLoading(false);
        };
      }
    }
  }, [videoUrl]);

  return (
    <Container>
      <SubHeading>Click to Watch Videos.</SubHeading>
      <GalleryWrapper>
        {/* Remaining four images with custom width and height */}
        {images.map((image, index) => (
          <ImageWrapper
            key={index + 1}
            onClick={() => showModal(videos[index])}
          >
            <img src={image} alt={`Thumbnail ${index + 2}`} />
            <PlayIconWrapper>
              <WaterCircleEffect
                animate={{ scale: [0.6, 1, 0.7], opacity: [0.8, 0.4, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <PlayCircleOutlined
                style={{ fontSize: "48px", color: "#fff", zIndex: 1 }}
              />
            </PlayIconWrapper>
          </ImageWrapper>
        ))}
      </GalleryWrapper>
      <BlurOverlay visible={isModalVisible} />
      <Modal
        title="Watch Video"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
      >
        <VideoWrapper>
          <video
            id="video-player"
            width="100%"
            controls
            src={videoUrl}
            autoPlay
          />
        </VideoWrapper>
      </Modal>
    </Container>
  );
};

export default VideoGallery;
