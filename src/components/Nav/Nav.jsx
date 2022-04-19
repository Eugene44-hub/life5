import React, { useState } from 'react';
import WildLife from '../../assets/images/Wild-life-white 3.svg';
import Twitter from '../../assets/images/Twitter.svg';
import Facebook from '../../assets/images/facebook.svg';
import Instagram from '../../assets/images/instagram.svg';
import Play from '../../assets/images/play.svg';
import Hamburger from '../../assets/images/hamburger.svg';

const Navigations = [ 'artist', 'services', 'discography', 'about', 'contact' ];
const handles = [ Twitter, Facebook, Instagram, Play ];
function Nav() {
	const [ toggle, setToggle ] = useState(false);

	return (
		<div className="container p-5 md:pl-[100px] md:pr-[57px]">
			<div className="flex justify-between">
				<img src={WildLife} alt="" />
				<img onClick={() => setToggle(!toggle)} src={Hamburger} />
			</div>

			<div
				className={`h-full sideNav ${toggle
					? 'w-[215px]'
					: 'w-[0px]'} fixed z-10 bg-[rgba(255, 99, 71, 0.4)] top-0 left-0 overflow-hidden transition-all`}
			>
				<img src={WildLife} className="mt-[130px] m-auto" alt="wildlife" />
				<ul className="mt-[113px] md:mb-[154px] mb-[50px] text-white text-center">
					{Navigations.map((item, index) => (
						<li key={index} className="mb-[14px] ">
							<button className='uppercase font-bold'> {item}</button>
						</li>
					))}
				</ul>
				<div className="flex justify-center">
					{handles.map((item, index) => <img key={index} className="mx-4 mt-[50px]" src={item} />)}
				</div>
			</div>

			<div className="fixed top-0 left-0 bg-black  md:w-[92px] w-[0px] overflow-hidden flex h-full">
				<div className="mt-[190px] mx-auto">
					<img className="mb-[5rem]" src={Twitter} alt="" />
					<img className="mb-[5rem]" src={Facebook} alt="" />
					<img className="mb-[5rem]" src={Instagram} alt="" />
					<img className="mb-[5rem]" src={Play} alt="" />
				</div>
			</div>
		</div>
	);
}

export default Nav;
