import Hero from "@/components/Hero";

const Home = () => {
	return (
		<div className="relative col-span-4 items-center min-h-screen">
			<main className="text-foreground">
				<section aria-label="Hero" className="relative flex  min-h-screen w-full items-center">
					<div className="relative">
						<Hero />
					</div>
				</section>

			</main>
		</div>
	);
};

export default Home;
