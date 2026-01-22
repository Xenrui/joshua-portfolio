"use client";

import { IconBrandFacebookFilled } from "@tabler/icons-react";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Hero = () => {
	return (
		<div className="relative">
			<div className="flex gap-4 items-baseline mb-5">
				<h1 className="text-5xl sm:text-6xl lg:text-7xl text-foreground font-bold">
					Joshua Delos Reyes
					<span className="text-secondary-accent/50 text-2xl md:text-3xl font-semibold ml-4">/xenrui</span>
				</h1>
			</div>

			<div className="text-3xl sm:text-4xl md:text-5xl mb-8 flex gap-3 font-semibold text-secondary-fg items-center">
				<span>&mdash;</span>
				<Typewriter
					options={{
						strings: ["a learner", "a dreamer", "a builder"],
						autoStart: true,
						loop: true,
						delay: 50,
						deleteSpeed: 30,
						cursor: "_",
					}}
				/>
			</div>

			<div className="mb-20">
				<p className="text-xl font-light font-roboto text-white/60 ">
					A 3rd Year IT Student at Polytechnic University of the Philippines. Passionate about learning tech
					and building cool stuff
				</p>
			</div>
			<div className="">
				<div className="flex gap-13">
					<a
						className="transition-all hover:scale-105"
						href="https://www.facebook.com/joshua.delosreyes277/"
						target="_blank">
						<FaFacebook className="text-secondary w-9 h-9" />
					</a>
					<a className="transition-all hover:scale-105" href="https://github.com/Xenrui" target="_blank">
						<FaGithub className="text-secondary w-9 h-9" />
					</a>
					<a
						className="px-4 py-2 font-inter font-bold bg-secondary rounded-full hover:bg-secondary/80 transition-all hover:scale-105 bg-white text-black"
						href="/assets/Joshua-DelosReyes-CV.pdf"
						target="_blank"
						rel="noopener noreferrer">
						Download CV
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
