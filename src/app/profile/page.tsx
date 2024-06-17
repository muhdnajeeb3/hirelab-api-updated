"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Form } from 'react-bootstrap';
import Image from 'next/image';
import { CATEGORY_URL, CHECK_CREDENTIALS, UPDATE_PROFILE, IMAGE_URL } from '@/lib/apiEndPoints';
import axios from 'axios';
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { CustomSession } from "@/app/api/auth/[...nextauth]/authOptions";

function Companyprofile() {
  const { data } = useSession();
  const userSession = data as CustomSession;
  const [user,setUser] = useState({});
  const [profileData,setProfileData] = useState({
    company_name: "",
    image : "",
    email : "",
    mobile_number: "",
    website: "",
    founded_date: "",
    category : "",
    country: "",
    description: "",
    city : "",
    zip : "",
    address : "",
    facebook : "",
    twitter : "",
    google : "",
    linkedin : "",
  });
  useEffect(()=>{
    axios.post(CHECK_CREDENTIALS,{
      headers: {
        Authorization:`Bearer ${userSession.user.data.token}`,
      }
    }).then((data) => {
      setProfileData(data.data.user);
      });
  },[]);

  // console.log('session user'+userSession);

  
  const [errors, setErrors] = useState({
    email: [],
    name: [],
    mobile_number: [],
  });
  // const [companyName,setCompanyName]
 
  const [loading,setLoading] = useState(false);
    
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
   
    formData.append('image',profileData.image);
    formData.append('company_name',profileData.company_name);
    formData.append('email',profileData.email);
    formData.append('website',profileData.website);
    formData.append('founded_date',profileData.founded_date);
    formData.append('category',profileData.category);
    formData.append('country',profileData.country);
    formData.append('description',profileData.description);
    formData.append('phone',profileData.phone);
    formData.append('city',profileData.city);
    formData.append('zip',profileData.zip);
    formData.append('address',profileData.address);
    formData.append('facebook',profileData.facebook);
    formData.append('twitter',profileData.twitter);
    formData.append('google',profileData.google);
    formData.append('linkedin',profileData.linkedin);
   
    axios.post(UPDATE_PROFILE, formData, {
      headers: {
        Authorization:`Bearer ${userSession.user.data.token}`,
        Accept: "application/json",
      },
    })
    .then((res) => {
      const response = res.data;
      setLoading(false);

      if (response?.code == 200) {
        // alert('hello');
        toast.success("Profile Updated successfully!", {
          theme: "colored",
        });
      } else if (response?.code == 401) {
        toast.error(response?.message, { theme: "colored" });
      }else if (response?.code == 404) {
        
        setLoading(false);
        setErrors(response?.data?.error);
      }
    })
    .catch((err) => {
      setLoading(false);
      // setErrors(err?.response?.data?.errors);
    });
  }

  
  return (
    <>
      <h1>{JSON.stringify(userSession)}</h1>
      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-full bg-white p-t50 p-b20">
            <div className="container">
            <form method='post' onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="row">
                <div className="col-xl-3 col-lg-4 m-b30">
                  <div className="sticky-top">
                    <div className="candidate-info company-info">
                      <div className="candidate-detail text-center">
                        <div className="canditate-des">
                          <Link href={"#"}>
                            <Image src={`${IMAGE_URL}${profileData?.image}`} alt="Company Logo" width={300} height={300} />
                          </Link>
                         
                        </div>
                        <div className="candidate-title">
                          <h4 className="m-b5"><Link href={"#"}>@COMPANY</Link></h4>
                        </div>
                      </div>
                      <ul>
                        <li><Link href='/profile' className="active">
                          <i className="fa fa-user-o" aria-hidden="true"></i> 
                          <span>Satya Profile</span></Link></li>
                        <li><Link href='/post-job'>
                          <i className="fa fa-file-text-o" aria-hidden="true"></i> 
                          <span>Post A job</span></Link></li>
                        <li><Link href='/credit-earned'>
                          <i className="fa fa-heart-o" aria-hidden="true"></i> 
                          <span>Credit Earned</span></Link></li>
                        <li><Link href='/manage-job'>
                          <i className="fa fa-heart-o" aria-hidden="true"></i> 
                          <span>Manage Jobs</span></Link></li>
                        <li><Link href='/change-password'>
                          <i className="fa fa-key" aria-hidden="true"></i> 
                          <span>Change Password</span></Link></li>
                        <li><Link href='/'>
                          <i className="fa fa-sign-out" aria-hidden="true"></i> 
                          <span>Log Out</span></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-8 m-b30">
                  <div className="job-bx submit-resume">
                    <div className="job-bx-title clearfix">
                      <h5 className="font-weight-700 pull-left text-uppercase">SATYA'S Profile</h5>
                      <Link href={"/company-profile"} className="site-button right-arrow button-sm float-right">Back</Link>
                    </div>
                    
                      <div className="row m-b30">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Company Name</label>
                            <input type="text" 
                              name="company_name" 
                              value={profileData?.company_name}
                              className="form-control"
                              onChange={(e) =>
                                setProfileData({ ...profileData, company_name: e.target.value })
                              } 
                              placeholder="Enter Company Name" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Your Email</label>
                            <input type="email"
                            name="email" 
                            value={profileData?.email}
                            onChange={(e) =>
                              setProfileData({ ...profileData, email: e.target.value })
                            } 
                            className="form-control" placeholder="info@gmail.com" />
                          </div>
                          <span className="text-red-500 text-danger">{errors?.email?.[0]}</span>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Website</label>
                            <input type="text"
                            name="website"
                            value={profileData?.website}
                            onChange={(e) =>
                              setProfileData({ ...profileData, website: e.target.value })
                            } 
                            className="form-control" placeholder="Website Link" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Founded Date </label>
                            <input type="text" 
                            name="founded_date" 
                            value={profileData?.founded_date}
                            className="form-control" 
                            onChange={(e) =>
                              setProfileData({ ...profileData, founded_date: e.target.value })
                            } 
                            placeholder="17/12/2018" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Category</label>
                            <Form.Control as="select" 
                            onChange={(e) =>
                              setProfileData({ ...profileData, category: e.target.value })
                            }
                            
                            name="category" 
                            className="custom-select">
                            <option value="">Select Category</option>
                            
                             <option value="1" selected={profileData?.category_id == '1'}>Website Design</option>
                             <option value="2" selected={profileData?.category_id == '2'}>Website Development</option>
                             <option value="3" selected={profileData?.category_id == '3'}>App Development</option>
                            </Form.Control>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Upload Profile Picture</label>
                            <input type="file" 
                            name="image"
                            onChange={(e) =>
                              setProfileData({ ...profileData, image: e.target.files?.[0] })
                            } 
                            className="form-control" />
                          </div>
                        </div>
                        
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Description:</label>
                            <textarea className="form-control" 
                            onChange={(e) =>
                              setProfileData({ ...profileData, description: e.target.value })
                            }
                            name="description" value={profileData?.description} rows="4">{profileData?.description}</textarea>
                          </div>
                        </div>
                      </div>
                      <div className="job-bx-title clearfix">
                        <h5 className="font-weight-700 pull-left text-uppercase">Contact Information</h5>
                      </div>
                      <div className="row m-b30">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Phone</label>
                            <input type="text" 
                            name="mobile_number"
                            value={profileData?.mobile_number}
                            onChange={(e) =>
                              setProfileData({ ...profileData, mobile_number: e.target.value })
                            } 
                            className="form-control" placeholder="+1 123 456 7890" />
                          </div>
                          <span className="text-red-500 text-danger">{errors?.phone?.[0]}</span>
                        </div>
                        
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Country</label>
                            <input type="text"
                            value={profileData?.country}
                            onChange={(e) =>
                              setProfileData({ ...profileData, country: e.target.value })
                            } 
                              name="country" className="form-control" placeholder="India" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>City</label>
                            <input type="text" 
                            name="city"
                            value={profileData?.city}
                            onChange={(e) =>
                              setProfileData({ ...profileData, city: e.target.value })
                            } 
                            className="form-control" placeholder="Delhi" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Zip</label>
                            <input type="text" 
                            name="zip"
                            value={profileData?.zip}
                            onChange={(e) =>
                              setProfileData({ ...profileData, zip: e.target.value })
                            } 
                             className="form-control" placeholder="504030" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Address</label>
                            <input type="text" 
                            name="address"
                            value={profileData?.address}
                            onChange={(e) =>
                              setProfileData({ ...profileData, address: e.target.value })
                            }  
                            className="form-control" placeholder="New York City" />
                          </div>
                        </div>
                      </div>
                      <div className="job-bx-title clearfix">
                        <h5 className="font-weight-700 pull-left text-uppercase">Map</h5>
                      </div>
                      <div className="row m-b30">
                        <div className="col-lg-12 col-md-12">
                          
                        </div>
                      </div>
                      <div className="job-bx-title clearfix">
                        <h5 className="font-weight-700 pull-left text-uppercase">Social link</h5>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Facebook</label>
                            <input type="text" name="facebook" 
                            value={profileData?.facebook}
                             onChange={(e) =>
                              setProfileData({ ...profileData, facebook: e.target.value })
                            } 
                            className="form-control" placeholder="https://www.facebook.com/" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Twitter</label>
                            <input type="text"
                             name="twitter" 
                             value={profileData?.twitter}
                             onChange={(e) =>
                              setProfileData({ ...profileData, twitter: e.target.value })
                            } 
                             className="form-control" placeholder="https://www.twitter.com/" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          {/* <div className="form-group">
                            <label>Google</label>
                            <input type="text"
                             name="google" 
                             value={user.google}
                             onChange={(e) =>
                              setProfileData({ ...profileData, google: e.target.value })
                            } 
                             className="form-control" placeholder="https://www.google.com/" />
                          </div> */}
                        </div> 
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Linkedin</label>
                            <input type="text" name="linkedin" value={profileData?.linkedin} onChange={(e) =>
                              setProfileData({ ...profileData, linkedin: e.target.value })
                            }  className="form-control" placeholder="https://www.linkedin.com/" />
                          </div>
                        </div>
                      </div>
                      <button type="submit" className="site-button m-b30">Update Setting</button>
                    
                  </div>
                </div>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Companyprofile;
