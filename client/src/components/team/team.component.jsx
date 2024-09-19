import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SubHeading } from "../heading/heading.component";
import { Icon } from "../icon/icon.styled";
import { Figure, TeamContainer } from "./team.styled";

const TeamComponent = () => {
  return (
    <TeamContainer>
      <div>
        <Figure developer></Figure>
        <SubHeading>Abdulsemiu Kusimo</SubHeading>
        <p>Software Engineer - Fullstack Developer</p>
        <TeamContainer member>
          <Icon team>
            <a
              href="https://github.com/Kusimo4real"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub title="Github" />
            </a>
            <a href="https://www.linkedin.com/in/abdulsemiu-kusimo-121644168/" target="_blank" rel="noreferrer">
              <FaLinkedin title="Linkedin" />
            </a>
            <a href="https://x.com/Semiukusimo" target="_blank" rel="noreferrer">
              <FaTwitter title="Linkedin" />
            </a>
          </Icon>
        </TeamContainer>
      </div>
      
    </TeamContainer>
  );
};

export default TeamComponent;
