"use client";

import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { techstack } from "@/lib/techstack";
import { FaChevronRight } from "react-icons/fa";
import StackIcon from "tech-stack-icons";
import { useEffect, useState } from "react";
import TechCard from "@/components/ui/tech-card";

const Home = ({ projects }) => {
	const [quote, setQuote] = useState();

	useEffect(() => {
		const fetchQuote = async () => {
			try {
				const response = await fetch("https://thequoteshub.com/api");
				const data = await response.json();
				setQuote(data);
				setLoading(false);
			} catch (err) {
				console.log(err);
			}
		};

		fetchQuote();
	}, []);

	return (
		<div className="relative col-span-4 items-center min-h-screen">
			<main className="text-foreground">
				<section id="hero" aria-label="Hero" className="relative flex min-h-screen w-full items-center">
					<div className="relative">
						<Hero />
					</div>
				</section>

				<section id="projects" aria-label="projects" className="py-20">
					<div className="flex justify-between items-end mb-8 pb-4 border-b border-white/50">
						<h2 className="text-2xl md:text-4xl">Featured Projects</h2>
						<div className="flex items-center gap-1">
							<span className="text-sm md:text-md">View all Projects</span>
							<FaChevronRight />
						</div>
					</div>
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{projects.map((project) => (
							<ProjectCard key={project.slug} project={project} />
						))}
					</div>
				</section>

				<section id="technologies" aria-label="technologies" className="py-20">
					<h2 className="text-2xl md:text-4xl mb-8">Technologies</h2>
					<div className="grid grid-cols-3 lg:grid-cols-6 gap-2">
						{Object.values(techstack)
							.filter((techstack) => techstack.feat === true)
							.map((techstack) => {
								return <TechCard key={techstack.label} tech={techstack} />;
							})}
					</div>
				</section>
				{quote && (
					<section className="py-32 flex items-center justify-center">
						<div className="max-w-3xl">
							<div className="relative">
								<div className="absolute -top-6 -left-3 text-4xl text-white/50 font-bold">"</div>
								<h3 className="text-2xl md:text-4xl text-center text-white/50 font-serif leading-relaxed px-8">
									{quote?.text}
								</h3>
								<div className="absolute -bottom-6 -right-3 text-4xl text-white/50 font-bold">"</div>
							</div>
							<p className="text-center text-white/60 text-xl mt-16 italic font-light">
								— {quote?.author}
							</p>
						</div>
					</section>
				)}
			</main>
		</div>
	);
};

export default Home;
