import React  from 'react';
import Link from 'next/link'
function LogoutPage(props){
    
    return(
        <>
            			
			<Link href ={'#'} title="READ MORE"   className="site-button" >
				<i className="fa fa-lock"></i> Logout 
			</Link>
        </>
    )
} 


export default LogoutPage;