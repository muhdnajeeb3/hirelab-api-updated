"use client"
import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import PageTitle from '../../markup/Layout/PageTitle'
import Sidebar from '../../markup/Element/Sidebar';

var bnr = require('./../../images/banner/bnr1.jpg');

const blogGride = [
	{ image: require("../../images/blog/grid/pic4.jpg") },
	{ image: require("../../images/blog/grid/pic4.jpg") },
	{ image: require("../../images/blog/grid/pic4.jpg") },
	{ image: require("../../images/blog/grid/pic4.jpg") },
	{ image: require("../../images/blog/grid/pic4.jpg") },
	{ image: require("../../images/blog/grid/pic4.jpg") },
]

function Blogs(){
	return(
		<>
			<div className="page-content bg-white">
				<div className="dez-bnr-inr overlay-black-middle" style={{backgroundImage:"url(" + bnr.default.src +" )" }}>
					<PageTitle motherName="Home" activeName="Blog Detailed Grid Sidebar" />
				</div>
				<div className="content-area">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-md-7 col-sm-12">							
								<div id="masonry" className="dez-blog-grid-3 row">
								{blogGride.map((item, index)=>(
									<div className="post card-container col-lg-6 col-md-6 col-sm-6" key={index}>
										<div className="blog-post blog-grid blog-style-1">
											<div className="dez-post-media dez-img-effect radius-sm"> 
												<Link href={"/blog-details"}><Image src={item.image} alt="" /></Link> 
											</div>
											<div className="dez-info">
												 <div className="dez-post-meta">
													<ul className="d-flex align-items-center">
														<li className="post-date"><i className="fa fa-calendar"></i>September 18, 2017</li>
														<li className="post-comment"><i className="fa fa-comments-o"></i><Link href={"#"}>5k</Link> </li>
													</ul>
												</div>
												<div className="dez-post-title ">
													<h5 className="post-title font-20"><Link href={"/blog-details"}>Do you have a job that the average person doesnӴ even know exists?</Link></h5>
												</div>
												<div className="dez-post-text">
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
												</div>
												<div className="dez-post-readmore blog-share"> 
													<Link href={"/blog-details"} title="READ MORE" rel="bookmark" className="site-button-link"><span className="fw6">READ MORE</span></Link>
												</div>
											</div>
										</div>
									</div>
								))}
								</div>
								<div className="pagination-bx clearfix text-center">
									<ul className="pagination">
										<li className="previous"><Link href={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
										<li className="active"><Link href={"#"}>1</Link></li>
										<li><Link href={"#"}>2</Link></li>
										<li><Link href={"#"}>3</Link></li>
										<li className="next"><Link href={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
									</ul>
								</div>
							</div>
							<div className="col-lg-4 col-md-5 col-sm-12 sticky-top">
								<Sidebar />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Blogs;