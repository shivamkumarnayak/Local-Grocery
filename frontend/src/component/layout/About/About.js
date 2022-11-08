import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
const About = () => {
  const visitLinkedInShivam = () => {
    window.location = "https://www.linkedin.com/in/shivamkumarnayak/";
  };
  const visitLinkedInSaurabh = () => {
    window.location = "https://www.linkedin.com/in/saurabh-sharma-b606631a5/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dtdetet1t/image/upload/v1667800671/avatars/Professional_Image_JPG_ybfx5c.jpg"
              alt="Founder"
            />
            <Typography>Shivam Kumar Nayak</Typography>
            <Button onClick={visitLinkedInShivam} color="primary" target="blank" >
              Visit Linked IN
            </Button>
            <span>
            I am a student with a strong personality, hard-working, honest, and a good learner as well. I can easily work under pressure and meet deadlines when given the opportunity. As a fresher, I am looking for a job in an organization where I get a platform to put my skills to the best use. 
            </span>
          </div>
          <div className="aboutSectionContainer2">            
          <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dtdetet1t/image/upload/v1667800722/avatars/Saurabh_nokc8z.jpg"
              alt="CoFounder"
            />
            <Typography>Saurabh Kumar Sharma</Typography>
            <Button onClick={visitLinkedInSaurabh} color="primary" target="blank" >
              Visit Linked IN
            </Button>
            <span>
            I am a student with a strong personality, hard-working, honest, and a good learner as well. I can easily work under pressure and meet deadlines when given the opportunity. As a fresher, I am looking for a job in an organization where I get a platform to put my skills to the best use. 
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
