import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

// Styled component for the container
const Container = styled.div`
  display: inline-block;
`;

const DownToUp = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Adjust the delay between animations
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 30, // Start slightly below the original position
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 40,
        duration: 0.3,
      },
    },
  };

  return (
    <Container
      as={motion.div}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </Container>
  );
};

export default DownToUp;
