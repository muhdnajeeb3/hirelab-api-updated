"use client";
import
function UserNav() {
    return(
        <div className="sticky-top">
                    <div className="candidate-info company-info">
                      <div className="candidate-detail text-center">
                        <div className="canditate-des">
                          <Link href={"#"}>
                            <Image src={`${IMAGE_URL}${profileData.image}`} alt="Company Logo" width={300} height={300} />
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
    );
}

export default UserNav;