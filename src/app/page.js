import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { FaChevronRight } from "react-icons/fa";

const Home = () => {
	return (
		<div className="relative col-span-4 items-center min-h-screen">
			<main className="text-foreground">
				<section id="hero" aria-label="Hero" className="relative flex min-h-screen w-full items-center">
					<div className="relative">
						<Hero />
					</div>
				</section>


				<section id="projects" aria-label="projects" className="my-5">
					<div className="flex justify-between items-end mb-8">
						<h2 className="text-4xl">Featured Projects</h2>
						<div className="flex items-center gap-2">
							<span>View all Project</span>
							<FaChevronRight />
						</div>
					</div>
					<div className="grid gap-6 lg:grid-cols-3">
						<ProjectCard />
					</div>
				</section>


			</main>
		</div>
	);
};

export default Home;
