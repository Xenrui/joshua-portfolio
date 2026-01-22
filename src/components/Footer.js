import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-black/40 w-full">
			<div className="max-w-5xl py-15 mx-auto">
				<div className="grid grid-cols-2">
					<div className="text-3xl">Joshua Delos Reyes</div>
                    <div className="flex flex-col items-end gap-2">
                        <h5 className='font-inter font-bold'>Navigation</h5>
					<div className="flex justify-end items-center gap-5 text-xs text-white/50">
						<a href="#hero" className="hover:text-white/80">Home</a>
						<a href="#projects" className="hover:text-white/80">Projects</a>
						<a href="#technologies" className="hover:text-white/80">Technologies</a>
						<a href="#blogs" className="hover:text-white/80">Blogs</a>
						<a href="#about" className="hover:text-white/80">About</a>
					</div>
                    </div>
				</div>
				<div className="border-b border-white/40 my-10" />
				<div className="grid grid-cols-2">
					<div className="">
						<span className="text-xs">© 2026 All rights reserved. Joshua Delos Reyes. </span>
					</div>
					<div className="flex justify-end gap-7">
						<a
							className="transition-all hover:scale-105 hover:text-white"
							href="https://www.facebook.com/joshua.delosreyes277/"
							target="_blank">
							<FaFacebook className="text-secondary w-5 h-5 " />
						</a>
						<a
							className="transition-all hover:scale-105"
							href="https://www.linkedin.com/in/joshualdelosreyes/"
							target="_blank">
							<FaLinkedin className="text-secondary w-5 h-5" />
						</a>
						<a className="transition-all hover:scale-105" href="https://github.com/Xenrui" target="_blank">
							<FaGithub className="text-secondary w-5 h-5" />
						</a>
						<a
							className="transition-all hover:scale-105"
							href="mailto:joshua123.jdr@gmail.com"
							target="_blank">
							<FaEnvelope className="text-secondary w-5 h-5" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
