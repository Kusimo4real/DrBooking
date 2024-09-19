import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Figure, Img } from "../img/img.styled";
import { Dropdown, Header, Nav } from "./header.styled";
import drBookingLogo from "../../assets/logo/drbooking-logo-dark.png"; // Update logo
import userAvatar from "../../assets/images/user-avatar.png";
import { BsQuestionCircle } from "react-icons/bs"; // Changed icon for help
import { IoMdNotificationsOutline } from "react-icons/io";
import { Icon } from "../icon/icon.styled";

const HeaderComponent = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Handle Logout
  const handleLogout = () => {
    setOpen(!open);
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <Header dashboard>
      <Figure logo>
        <Link to="/dashboard">
          <Img src={drBookingLogo} alt="DrBooking logo" /> {/* Update logo */}
        </Link>
      </Figure>
      <Nav>
        <Icon header>
          <BsQuestionCircle title="Help" /> {/* Updated help icon */}
        </Icon>
        <Icon header>
          <IoMdNotificationsOutline title="Notifications" />
        </Icon>
        <Nav avatar onClick={() => setOpen(!open)}>
          <Figure avi>
            <Img src={userAvatar} alt="User avatar" />
          </Figure>
          <p>{localStorage.getItem("fullname") || "User"}</p>
        </Nav>
        {open ? (
          <Dropdown>
            <Link to="/profile" onClick={() => setOpen(!open)}>
              <p>Profile</p>
            </Link>
            <Link to="/appointments" onClick={() => setOpen(!open)}>
              <p>My Appointments</p> {/* Added Appointments link */}
            </Link>
            <p
              style={{ color: "red", cursor: "pointer" }}
              onClick={handleLogout}
            >
              Sign Out
            </p>
          </Dropdown>
        ) : null}
      </Nav>
    </Header>
  );
};

export default HeaderComponent;
