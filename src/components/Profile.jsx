import React from "react";
import "./Profile.css"; // Create a CSS file for Profile
import ProfileInfo from "./ProfileInfo";

const Profile = ({ profileData }) => {
  if (!profileData) {
    return <div className="profile-container">No data available</div>;
  }

  const {
    avatar_url,
    name,
    login,
    html_url,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    location,
    blog,
    twitter_username,
    company,
  } = profileData;

  const date = new Date(created_at);
  const formattedDate = `${date.getDate()} ${
    [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ][date.getMonth()]
  } ${date.getFullYear()}`;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img id="avatar" src={avatar_url} alt="Avatar" />
        <div className="profile-info-wrapper">
          <div className="profile-name">
            <h2 id="name">{name || login}</h2>
            <a href={html_url} target="_blank" rel="noopener noreferrer">
              @{login}
            </a>
          </div>
          <p id="date">Joined {formattedDate}</p>
        </div>
      </div>
      <p id="bio">{bio || "This profile has no bio"}</p>
      <div className="profile-stats-wrapper">
        <div className="profile-stat">
          <p className="stat-title">Repos</p>
          <p id="repos">{public_repos}</p>
        </div>
        <div className="profile-stat">
          <p className="stat-title">Followers</p>
          <p id="followers">{followers}</p>
        </div>
        <div class="profile-stat">
          <p className="stat-title">Following</p>
          <p id="following">{following}</p>
        </div>
      </div>
      <div className="profile-bottom-wrapper">
        <ProfileInfo
          title="Location"
          content={location}
          icon="/src/assets/images/location-icon.svg"
        />
        <ProfileInfo
          title="Website"
          content={blog}
          link={blog}
          icon="/src/assets/images/website-icon.svg"
        />
        <ProfileInfo
          title="Twitter"
          content={twitter_username}
          link={`https://twitter.com/${twitter_username}`}
          icon="/src/assets/images/twitter-icon.svg"
        />
        <ProfileInfo
          title="Company"
          content={company}
          icon="/src/assets/images/company-icon.svg"
        />
      </div>
    </div>
  );
};

export default Profile;
