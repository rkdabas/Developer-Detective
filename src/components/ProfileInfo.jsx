import React from "react";
import "./ProfileInfo.css";

const ProfileInfo = ({ title, content, link, icon }) => (
  <div className="profile-info">
    <div className="bottom-icons">
      <img src={icon} alt={title} />
    </div>
    {link ? (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {content || "Not Available"}
      </a>
    ) : (
      <p>{content || "Not Available"}</p>
    )}
  </div>
);

export default ProfileInfo;
