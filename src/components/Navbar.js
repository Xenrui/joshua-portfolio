"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
	{ id: "hero", label: "Home" },
	{ id: "projects", label: "Projects" },
	{ id: "technologies", label: "Technologies" },
	{ id: "contact", label: "Contact" },
];

const Navbar = () => {
	const [activeSection, setActiveSection] = useState("hero");

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight / 2;

			for (let i = sections.length - 1; i >= 0; i--) {
				const section = document.getElementById(sections[i].id);
				if (section && section.offsetTop <= scrollPosition) {
					setActiveSection(sections[i].id);
					break;
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<nav className="sticky top-0 right-0 md:flex h-screen items-center justify-end pr-8 hidden">
			<div className="relative">
				{/* Vertical line */}
				<div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 -translate-x-1/2" />

				{/* Timeline dots */}
				<div className="relative flex flex-col gap-30">
					{sections.map((section) => {
						const isActive = activeSection === section.id;

						return (
							<div key={section.id} className="relative flex items-center">
								{/* Dot */}
								<button
									onClick={() => scrollToSection(section.id)}
									className="relative z-10 group"
									aria-label={`Go to ${section.label}`}>
									<motion.div
										className={`w-5 h-5 rounded-full border-2 transition-colors hover:cursor-pointer  ${
											isActive ? "bg-gray-500 border-gray-500" : (
												"bg-gray-900 border-gray-600 group-hover:border-gray-400 "
											)
										}`}
										animate={{
											scale: isActive ? 1.3 : 1,
										}}
										transition={{ duration: 0.3 }}
									/>

									{isActive && (
										<motion.div
											className="absolute inset-0 rounded-full bg-gray-500 hover:cursor-pointer"
											initial={{ scale: 1, opacity: 0.5 }}
											animate={{ scale: 2, opacity: 0 }}
											transition={{
												duration: 1.5,
												repeat: Infinity,
												repeatType: "loop",
											}}
										/>
									)}
								</button>
								{/* Label */}
								<motion.span
									initial={{ opacity: 0, x: -10 }}
									animate={{
										opacity: isActive ? 1 : 0,
										x: isActive ? 10 : 20,
									}}
									transition={{ duration: 0.3 }}
									className="absolute left-8 text-sm font-medium whitespace-nowrap text-white">
									{section.label}
								</motion.span>
							</div>
						);
					})}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
