import React, { useState, useEffect } from "react";
import { Modal, Spin } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import styled from "styled-components";

import heroimg from "../Images/t13.jpg";
import heroimg2 from "../Images/t2.jpg";
import heroimg3 from "../Images/t4.jpg";
import heroimg4 from "../Images/t8.jpg";
import heroimg5 from "../Images/t6.jpg";
import Heading from "../FixedComponent/Heading";
import { Colors } from "../Colors/ColorComponent";

// Styled components
const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const ImageWrapper = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;

  img {
    width: ${(props) => props.width || "200px"};
    min-height: ${(props) => props.height || "250px"};
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.05);
  }
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
  min-height: 450px;
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
  "https://res.cloudinary.com/demo/video/upload/w_800,c_limit,ar_16:9/vc_auto/sample.mp4",
  "https://res.cloudinary.com/demo/video/upload/w_800,c_limit,ar_16:9/vc_auto/sample2.mp4",
  "https://res.cloudinary.com/demo/video/upload/w_800,c_limit,ar_16:9/vc_auto/sample3.mp4",
  "https://res.cloudinary.com/demo/video/upload/w_800,c_limit,ar_16:9/vc_auto/sample4.mp4",
  "https://res.cloudinary.com/demo/video/upload/w_800,c_limit,ar_16:9/vc_auto/sample5.mp4",
];

// Example images associated with the videos
const images = [heroimg, heroimg2, heroimg3, heroimg4, heroimg5];

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
      <Heading>Men At Work</Heading>
      <SubHeading>Click to Watch Videos.</SubHeading>
      <GalleryWrapper>
        {/* First image taking full screen */}
        <ImageWrapper
          width="100%"
          height="auto"
          onClick={() => showModal(videos[0])}
        >
          <img src={images[0]} alt="Thumbnail 1" />
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

        {/* Remaining four images with custom width and height */}
        {images.slice(1).map((image, index) => (
          <ImageWrapper
            key={index + 1}
            max-width="calc(500px - 20px)"
            min-height="250px"
            onClick={() => showModal(videos[index + 1])}
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

      <Modal
        title="Watch Video"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={800}
      >
        <VideoWrapper>
          {loading ? (
            <Spin size="large" />
          ) : (
            <video
              id="video-player"
              width="100%"
              controls
              src={videoUrl}
              autoPlay
            />
          )}
        </VideoWrapper>
      </Modal>
    </Container>
  );
};

export default VideoGallery;
