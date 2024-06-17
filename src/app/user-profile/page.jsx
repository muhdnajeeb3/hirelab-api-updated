"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import profilePic from "../../../public/images/pic.png" // Update the path to the profile picture
import { toast } from "react-toastify";
import axios from "axios";
import { LOGOUT_URL } from "@/lib/apiEndPoints";
import { signOut } from "next-auth/react";

const ProfileDropdown = ({session}) => {
 
  
  const [isOpen, setIsOpen] = useState(true);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
    
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
		axios.get(LOGOUT_URL,{},{
			headers:{
				Authorization:`Bearer ${session.user.data.token}`
			}
		})
		.then((res) => {
			toast.success("Logout successfully!",{theme:"colored"})
			signOut({
				callbackUrl:'/login',
				redirect:true
			});
		})
		.catch((error) => {
			toast.error("Something Went Wrong.Please try again",{theme:'colored'});
		})
	}

  return (
    <div className="profile-dropdown" ref={dropdownRef}>
      <div className="profile-header" onClick={toggleDropdown}>
        <Image src={profilePic} className="profile-image" alt="Profile Image" style={{ width: "41px", height: "41px" }} />
        <span className="profile-name">PROFILE</span>
        <span className="dropdown-arrow">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="14" viewBox="0 0 25 14" fill="none">
              <path d="M0.811014 13.0151C0.995183 13.1951 1.24243 13.2958 1.49989 13.2958C1.75735 13.2958 2.00459 13.1951 2.18876 13.0151L12.4992 2.96458L22.8076 13.0151C22.9917 13.1951 23.239 13.2958 23.4965 13.2958C23.7539 13.2958 24.0012 13.1951 24.1853 13.0151C24.2751 12.9277 24.3465 12.8232 24.3953 12.7077C24.444 12.5922 24.4691 12.4681 24.4691 12.3428C24.4691 12.2174 24.444 12.0933 24.3953 11.9779C24.3465 11.8624 24.2751 11.7578 24.1853 11.6704L13.219 0.982517C13.0264 0.794801 12.7681 0.689742 12.4992 0.689742C12.2303 0.689742 11.972 0.794801 11.7794 0.982517L0.813077 11.6704C0.723268 11.7578 0.651887 11.8624 0.603148 11.9779C0.554408 12.0933 0.529297 12.2174 0.529297 12.3428C0.529297 12.4681 0.554408 12.5922 0.603148 12.7077C0.651887 12.8232 0.723268 12.9277 0.813077 13.0151L0.811014 13.0151Z" fill="black"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
              <path d="M28.189 10.9849C28.0048 10.8049 27.7576 10.7042 27.5001 10.7042C27.2426 10.7042 26.9954 10.8049 26.8112 10.9849L16.5008 21.0354L6.19242 10.9849C6.00826 10.8049 5.76101 10.7042 5.50355 10.7042C5.24609 10.7042 4.99884 10.8049 4.81467 10.9849C4.72486 11.0723 4.65348 11.1768 4.60474 11.2923C4.55601 11.4078 4.5309 11.5319 4.5309 11.6572C4.5309 11.7826 4.55601 11.9067 4.60474 12.0221C4.65348 12.1376 4.72486 12.2422 4.81467 12.3296L15.781 23.0175C15.9736 23.2052 16.2319 23.3103 16.5008 23.3103C16.7697 23.3103 17.028 23.2052 17.2206 23.0175L28.1869 12.3296C28.2767 12.2422 28.3481 12.1376 28.3969 12.0221C28.4456 11.9067 28.4707 11.7826 28.4707 11.6572C28.4707 11.5319 28.4456 11.4078 28.3969 11.2923C28.3481 11.1768 28.2767 11.0723 28.1869 10.9849L28.189 10.9849Z" fill="black"/>
            </svg>
          )}
        </span>
      </div>
      {isOpen && (
        <div className="profile-sidebar">
          <div className="profile-details">
            <Image src={profilePic} className="profile-image-large" alt="Profile Image" />
            <h2 className="profile-name-tab">{session.user.data.name}</h2>
            
          </div>
          <ul className="profile-menu">
            <li>
              <Link href="/dashboard">
                <div className="menu-item">
                  {/* <DashboardIcon className="menu-icon" /> */}
                  <span className="menu-text">Dashboard</span>
                </div>
              </Link>
              <hr />
            </li>
            <li>
              <Link href="/profile">
                <div className="menu-item">
                  {/* <ProfileIcon className="menu-icon" /> */}
                  <span className="menu-text">Profile</span>
                </div>
              </Link>
              <hr />
            </li>
            <li>
              <Link href="/my-resume">
                <div className="menu-item">
                  {/* <ResumeIcon className="menu-icon" /> */}
                  <span className="menu-text">My Resume</span>
                </div>
              </Link>
              <hr />
            </li>
            <li>
              <Link href="/saved-jobs">
                <div className="menu-item">
                  {/* <SavedJobsIcon className="menu-icon" /> */}
                  <span className="menu-text">Saved Jobs</span>
                </div>
              </Link>
              <hr />
            </li>
            <li>
              <Link href="/apply-jobs">
                <div className="menu-item">
                  {/* <AppliedJobsIcon className="menu-icon" /> */}
                  <span className="menu-text">Applied Jobs</span>
                </div>
              </Link>
              <hr />
            </li>
            <li>
              <Link href="/job-alert">
                <div className="menu-item">
                  {/* <JobAlertsIcon className="menu-icon" /> */}
                  <span className="menu-text">Job Alerts</span>
                </div>
              </Link>
              <hr />
            </li>
            <li>
              <Link href="/my-resume">
                <div className="menu-item">
                  {/* <CVManagerIcon className="menu-icon" /> */}
                  <span className="menu-text">CV Manager</span>
                </div>
              </Link>
              <hr />
            </li>
            <li>
              <Link href="/change-password">
                <div className="menu-item">
                  {/* <ChangePasswordIcon className="menu-icon" /> */}
                  <span className="menu-text">Change Password</span>
                </div>
              </Link>
              <hr />
            </li>
            <li>
              <Link href="/logout">
                <div className="menu-item">
                  {/* <LogoutIcon className="menu-icon" /> */}
                  <span onClick={handleLogout} className="menu-text">Logout</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      )}
      <style jsx>{`
        .profile-dropdown {
          position: relative;
        }
        .profile-header {
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        .profile-image {
          border-radius: 50%;
          margin-right: 10px;
        }
        .profile-name {
          color: #000;
          font-family: Lato;
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: 21px; /* 150% */
          text-transform: uppercase;
          margin-right: 10px;
          margin-left: 10px;
        }
        .profile-name-tab {
          margin-top: 19px;
        }
        .dropdown-arrow {
          display: flex;
          align-items: center;
        }
        .profile-sidebar {
          position: absolute;
          top: 100%;
          left: -50px;
          background: white;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          z-index: 10;
          width: 250px;
          padding: 20px;
        }
        .profile-details {
          text-align: center;
        }
        .profile-image-large {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin-bottom: 10px;
        }
        .profile-menu {
          display: block;
          justify-content: center;
          list-style: none;
          margin-top: 26px;
          padding: 0;
          text-align: center;
        }
        .profile-menu li {
          margin-left: 40px;
          padding: 10px 0;
        }
        .menu-item {
          display: flex;
          align-items: center;
          justify-content: start;
          gap: 10px;
          color: #232323 !important;
          font-family: Lato;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px; /* 150% */
          text-decoration: none;
        }
        .menu-item:hover {
          background-color: #f0f0f0;
        }
        .profile-menu hr {
          margin: 5px 0;
          border: none;
          border-top: 1px solid #ddd;
          width: 100%;
        }
        .menu-icon {
          width: 24px;
          height: 24px;
        }
      `}</style>
    </div>
  );
};

export default ProfileDropdown;