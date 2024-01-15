import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function MembershipPage() {
  
	return (
		<div>
			<section id="pricing" className="pricing-content section-padding">
	<div className="container">					
		<div className="section-title text-center">
			<h1 className='pricing-heading'>Pricing Plan</h1>
			<p className='pricing-ptag'>Select from the Range of Plans that suites you the best.</p>
		</div>					
		<div className="row text-center">									
			<div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
				<div className="single-pricing">
					<div className="price-head">								
						<h2>Starter</h2>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<h1 className="price">$29</h1>
					<h5>Monthly</h5>
					<ul>
						<li>5 Personal Training Sesion</li>
						<li>Personalized Diet Plan</li>
						<li>Common Gym Facilities</li>
					</ul>
					<a href="#/">Get start</a>
				</div>
			</div>	
			<div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
				<div className="single-pricing">
					<div className="price-head">								
						<h2>popular</h2>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<h1 className="price">$49</h1>
					<h5>Monthly</h5>
					<ul>
						<li>10 Personal Training Sesion</li>
						<li>Personalized Diet Plan</li>
						<li>Personalized Training Plan</li>
						<li>Weekly Update Sessions</li>
						<li>Special Access to Private Gym Facilities</li>
					</ul>
					<a href="#/">Get start</a>
				</div>
			</div>	
			<div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0">
				<div className="single-pricing single-pricing-white">
					<div className="price-head">								
						<h2>Advance</h2>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<span className="price-label">Best</span>
					<h1 className="price">$69</h1>
					<h5>Monthly</h5>
					<ul>
						<li>25 Personal Training Sesion</li>
						<li>Personalized Diet and Training Plan</li>
						<li>Regular Update Session</li>
						<li>Speical Access to Gym Facilities</li>
						<li>Acesss to Gym Swimming Pool</li>
						<li>Permanent Locker</li>
					</ul>
					<a href="#/">Get start</a>
				</div>
			</div>			  
		</div>
	</div>
</section>
		</div>
	);
}
export default MembershipPage;