import Hero from "@/components/Hero";
import { FaChevronRight } from "react-icons/fa";

const Home = () => {
	return (
		<div className="relative col-span-4 items-center min-h-screen">
			<main className="text-foreground">
				<section aria-label="Hero" className="relative flex  min-h-screen w-full items-center">
					<div className="relative">
						<Hero />
					</div>
				</section>

				<section aria-label="projects" className="min-h-screen">
					<div className="flex justify-between items-end">
						<h2 className="text-4xl">Featured Projects</h2>
						<div className="flex items-center gap-2">
							<span>View all Project</span>
							<FaChevronRight />
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Home;
