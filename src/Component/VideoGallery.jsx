import React, { useState, useEffect } from "react";
import { Modal, Spin } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { motion } from "framer-motion";
import heroimg from "../Images/t5.jpg";
import heroimg2 from "../Images/t2.jpg";
import heroimg3 from "../Images/t4.jpg";
import heroimg4 from "../Images/t8.jpg";
import heroimg5 from "../Images/t6.jpg";
// Styled components
const GalleryWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

const ImageWrapper = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 200px;
    height: 150px;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.05);
  }

  &:hover .play-icon {
    opacity: 1;
  }
`;

const PlayIconWrapper = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

const WaterCircleEffect = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
    <>
      <GalleryWrapper>
        {images.map((image, index) => (
          <ImageWrapper key={index} onClick={() => showModal(videos[index])}>
            <img src={image} alt={`Thumbnail ${index + 1}`} />
            <PlayIconWrapper
              className="play-icon"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <PlayCircleOutlined style={{ fontSize: "48px", color: "#fff" }} />
              <WaterCircleEffect
                animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0.4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ width: 100, height: 100 }}
              />
            </PlayIconWrapper>
          </ImageWrapper>
        ))}
      </GalleryWrapper>

      <Modal
        title="Watch Video"
        visible={isModalVisible}
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
    </>
  );
};

export default VideoGallery;
