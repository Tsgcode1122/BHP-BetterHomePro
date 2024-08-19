import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import {
  MailOutlined,
  WhatsAppOutlined,
  SendOutlined,
  HomeOutlined,
  GiftOutlined,
  CreditCardOutlined,
  DashboardOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { IoMdArrowDropright } from "react-icons/io";
import logo from "../Images/Logoo.png";
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };
  const handleProfileClick = () => {
    setModalVisible(true);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <>
      <StyledNavbar style={{ top: visible ? 0 : "-5rem" }}>
        <HeadSpace>
          <Link to="/">
            <img src={logo} />
          </Link>
          <MenuToggle onClick={toggleSidebar}>
            <Hamburger
              toggled={isSidebarOpen}
              toggle={setIsSidebarOpen}
              color="#FFFFFF"
            />
          </MenuToggle>
        </HeadSpace>
      </StyledNavbar>
      <NavHeight></NavHeight>
      <Sidebar isOpen={isSidebarOpen} ref={sidebarRef}>
        <SidebarContent>
          <LinkContainer>
            <LinkCont to="/" onClick={closeSidebar}>
              <span>Home</span>
              <IoMdArrowDropright />
            </LinkCont>
            <LinkCont to="/about" onClick={closeSidebar}>
              <span>About Us</span>
              <IoMdArrowDropright />
            </LinkCont>
            <LinkCont to="/services" onClick={closeSidebar}>
              <span>Services</span>
              <IoMdArrowDropright />
            </LinkCont>

            <LinkCont to="/contact" onClick={closeSidebar}>
              <span>Contact Us</span>
              <IoMdArrowDropright />
            </LinkCont>
            <LinkCont to="/appointment" onClick={closeSidebar}>
              <span>Book a Service</span>
              <IoMdArrowDropright />
            </LinkCont>
            <LinkCont to="/gallery" onClick={closeSidebar}>
              <span>Gallery</span>
              <IoMdArrowDropright />
            </LinkCont>
          </LinkContainer>
        </SidebarContent>
      </Sidebar>

      {isSidebarOpen && <Overlay onClick={closeSidebar} />}

      <BigNav>
        <BigCon>
          <Link to="/">
            <img src={logo} />
          </Link>

          <LinkBig>
            <LinkC to="/">
              <span>Home</span>
            </LinkC>
            <LinkC to="/about">
              <span>About Us</span>
            </LinkC>
            <LinkC to="/services">
              <span>Services</span>
            </LinkC>
            <LinkC to="/contact">
              <span>Contact Us</span>
            </LinkC>
            <LinkC to="/appointment">
              <span>Book a Service</span>
            </LinkC>
            <LinkC to="/gallery">
              <span>Gallery</span>
            </LinkC>
          </LinkBig>
        </BigCon>
      </BigNav>
    </>
  );
};
const BigNav = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  display: none;
  @media screen and (min-width: 820px) {
    display: block;
  }
  z-index: 999 !important;
  background-color: black;
  img {
    max-width: 100%;
    height: 50px;
  }
`;
const BigCon = styled.div`
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 800px) {
    padding: 10px 50px;
  }
  @media screen and (min-width: 1000px) {
    padding: 10px 70px;
  }
  @media screen and (min-width: 1200px) {
    padding: 10px 140px;
  }
`;
const LinkBig = styled.div`
  background-color: #e5efdc;
  display: flex;
  border-radius: 20px;
  align-items: center;
  padding: 0 2rem;
  gap: 20px;
  justify-content: space-between;
`;
const LinkC = styled(Link)`
  display: flex;
  text-decoration: none;
  color: black;
  justify-content: space-between;
`;
const LinkCont = styled(Link)`
  display: flex;
  justify-content: space-between;
`;
const LinkContA = styled.a`
  display: flex;
  justify-content: space-between;
`;
const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  border-radius: 5px;
  margin-bottom: 10px;
`;

const NavHeight = styled.div`
  height: 3rem;
`;

const StyledNavbar = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999 !important;
  background-color: black;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: top 0.3s;
  img {
    max-width: 100%;
    height: 40px;
  }
  @media screen and (min-width: 820px) {
    display: none;
  }
`;

const HeadSpace = styled.div`
  align-items: center;
  display: flex;
  margin: 1px 20px;
  justify-content: space-between;
  img {
    height: 40px;
  }
`;

const MenuToggle = styled.div`
  margin: 0;
  cursor: pointer;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 3rem;
  right: ${({ isOpen }) => (isOpen ? "0" : "-300px")};
  width: 300px;
  height: 100vh;
  background-color: #ffffff;

  border-left: 0.5px solid #313538;
  transition: right 0.5s ease-in-out;
  z-index: 1000;
  overflow-x: hidden;
  @media screen and (max-width: 320px) {
    width: 250px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    width: 280px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
  }
`;

const SidebarContent = styled.div`
  padding: 10px;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  list-style: none;
  a {
    text-decoration: none;
    font-size: 18px;
    color: black;
    align-items: center;
    background: #f6f6f6;
    border-radius: 10px;

    padding: 8px;
    display: flex;

    gap: 20px;
    img {
      max-width: 100%;
      height: 25px;
    }
    @media screen and (max-width: 320px) {
      font-size: 14px;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      font-size: 16px;
    }
    @media (min-width: 400px) and (max-width: 499px) {
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

export default Navbar;
