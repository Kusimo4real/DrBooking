import { useState } from "react";
import { Button } from "../components/button/button.styled";
import { Link } from "react-router-dom";
import {
  Footer,
  FooterTop,
  Hamburger,
  HeroContainer,
  HeroPara,
  HeroText,
  Item,
  Li,
  Main,
  Nav,
  Navlink,
  Para,
  Section,
  Service,
  ServicesContainer,
  WhyUs,
} from "./landingPage.styled";
import logoDark from "../assets/logo/drbooking-logo-dark.png";
import logoLite from "../assets/logo/drbooking-logo-lite.png";
import doctorIllustration from "../assets/illustration/doctor-appointment.svg";
import img1 from "../assets/images/hospital.jpg";
import { Figure, Img } from "../components/img/img.styled";
import {
  FaCalendarCheck,
  FaFileMedical,
  FaBell,
} from "react-icons/fa";
import {
  TiSocialFacebookCircular,
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import {
  SecHeading,
  SubHeading,
} from "../components/heading/heading.component";
import { Header } from "../components/header/header.styled";
import { Icon } from "../components/icon/icon.styled";
import TeamComponent from "../components/team/team.component";
import ProductComponent from "../components/product/product.component";
import { MdClose } from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";
import Sidemenu from "../components/Sidemenu/Sidemenu.component";

const LandingPage = () => {
  const [menu, setMenu] = useState(false);
  const openMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <Header lp>
        <Link to="/">
          <Figure logo>
            <Img src={logoDark} alt="DrBooking logo dark" />
          </Figure>
        </Link>
        <Hamburger>
          {menu ? (
            <MdClose onClick={openMenu} />
          ) : (
            <RiMenu4Fill onClick={openMenu} />
          )}
        </Hamburger>
        <Sidemenu display={menu} closeBar={openMenu} />
        <Nav>
          <Navlink href="#home">
            <p>Home</p>
          </Navlink>
          <Navlink href="#services">
            <p>Services</p>
          </Navlink>
          <Navlink href="#about-us">
            <p>About Us</p>
          </Navlink>
          <Navlink href="#contact-us">
            <p>Contact Us</p>
          </Navlink>
          <Link to="/signin">
            <Button primary>Get Started</Button>
          </Link>
        </Nav>
      </Header>
      <Main>
        <Section home id="home">
          <div>
            <HeroText>
              Book Appointments with Your Doctor,
              <br />
              Anytime, Anywhere
            </HeroText>
            <HeroPara>
              Simplifying doctor-patient appointments for a healthier future.
            </HeroPara>
            <HeroContainer>
              <Link to='/signin'><Button primary>Get Started</Button></Link>
              <a href="#about-us">
                <p>Learn more</p>
              </a>
            </HeroContainer>
          </div>
          <Figure hero>
            <Img src={doctorIllustration} alt="Doctor appointment illustration" />
          </Figure>
        </Section>
        <Section peek>
          <SecHeading peek>Take a Peek</SecHeading>
          <Para peek>
            DrBooking aims to streamline the appointment process for both patients and doctors.
          </Para>
          <ProductComponent />
        </Section>
        <section id="services">
          <SecHeading center>Our Services</SecHeading>
          <ServicesContainer>
            <Service>
              <Icon service>
                <FaCalendarCheck />
              </Icon>
              <SubHeading>Appointment Booking</SubHeading>
              <Para>
                Easily schedule your appointments with our seamless booking system.
              </Para>
            </Service>
            <Service>
              <Icon service>
                <FaFileMedical />
              </Icon>
              <SubHeading>Medical Records</SubHeading>
              <Para>
                Access and manage your medical records securely and conveniently.
              </Para>
            </Service>
            <Service>
              <Icon service>
                <FaBell />
              </Icon>
              <SubHeading>Reminders</SubHeading>
              <Para>
                Receive timely reminders for your upcoming appointments.
              </Para>
            </Service>
          </ServicesContainer>
          <WhyUs>
            <Figure whyus>
              <Img src={img1} alt="Doctor and patient interaction" />
            </Figure>
            <div>
              <SubHeading>What Makes Us Unique?</SubHeading>
              <ul style={{ padding: "5px 0 15px 0" }}>
                <Li>Easy appointment scheduling</Li>
                <Li>24/7 access to your medical records</Li>
                <Li>Qualified and experienced doctors</Li>
                <Li>Personalized healthcare reminders</Li>
              </ul>
              <Link to="/signin">
                <Button>Get Started</Button>
              </Link>
            </div>
          </WhyUs>
        </section>
        <section id="about-us" style={{ margin: "50px 0" }}>
          <SecHeading center>About Us</SecHeading>
          <Para about>
            DrBooking is dedicated to improving the healthcare system by providing an easy-to-use platform for booking appointments and managing medical records, ensuring seamless experiences for patients and healthcare providers alike.
          </Para>
          <div style={{ margin: "50px 0" }}>
            <SecHeading center>Meet The Developer</SecHeading>
            <TeamComponent />
          </div>
        </section>
      </Main>
      <Footer>
        <FooterTop>
          <div>
            <Figure logo>
              <Img src={logoLite} alt="DrBooking logo lite" />
            </Figure>
            <p style={{ padding: "20px 0" }}>
              DrBooking is committed to making healthcare more accessible and efficient for everyone.
            </p>
            <Button alt>Request Demo</Button>
          </div>
          <div>
            <h3>Quick Links</h3>
            <nav>
              <Navlink ft href="#home">
                <Item>Home</Item>
              </Navlink>
              <Navlink ft href="#services">
                <Item>Services</Item>
              </Navlink>
              <Navlink ft href="#about-us">
                <Item>About Us</Item>
              </Navlink>
              <Navlink ft href="#contact-us">
                <Item>Contact Us</Item>
              </Navlink>
            </nav>
          </div>
          <div>
            <h3>Services</h3>
            <Item>Appointment Booking</Item>
            <Item>Medical Records</Item>
            <Item>Reminders</Item>
          </div>
          <div>
            <h3>Support</h3>
            <Item>Help Center</Item>
            <Item>Terms and Conditions</Item>
            <Item>Privacy Policy</Item>
          </div>
          <div>
            <h3>Contact</h3>
            <Navlink ft href="mailto:info@drbooking.com">
              <Item>info@drbooking.com</Item>
            </Navlink>
            <Navlink ft href="tel:+2348001234567">
              <Item>+234 800 123 4567</Item>
            </Navlink>
            <Item>123 Healthcare Ave, Lagos</Item>
            <Item>FAQ</Item>
            <ServicesContainer>
              <Icon ft>
                <TiSocialTwitterCircular />
              </Icon>
              <Icon ft>
                <TiSocialFacebookCircular />
              </Icon>
              <Icon ft>
                <TiSocialLinkedinCircular />
              </Icon>
              <Icon ft>
                <IoLogoInstagram />
              </Icon>
            </ServicesContainer>
          </div>
        </FooterTop>
        <section style={{ textAlign: "center", padding: "10px 0" }}>
          DrBooking &copy; 2024. All Rights Reserved
        </section>
      </Footer>
    </>
  );
};

export default LandingPage;
