"use client";

import { motion } from "motion/react";

const ProjectCard = () => {
	return (
		<div className="h-full">
			<motion.div
				className="group bg-white/5 rounded-xl border border-white/10 hover:border-white/25"
				whileHover={{ y: -3 }}>
				<div className="h-48 bg-gray-200 rounded-t-xl overflow-hidden"></div>
				<div className="p-4 flex flex-col justify-between gap-5">
					<div className="">
						<h3 className="text-3xl mb-2">One Juan</h3>
						<p className="text-xs text-white/50">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, quae esse sint placeat rem
							doloremque vero quibusdam ex facere dolorum?
						</p>
					</div>
					<div className="flex gap-2 text-sm items-center">
						<div className="bg-white/20 px-3 py-1 rounded-full flex items-center">
							<span className="font-medium text-xs">Java</span>
						</div>
						<div className="bg-white/20 px-3 py-1 rounded-full flex items-center">
							<span className="font-medium text-xs">MySQL</span>
						</div>
						<div className="bg-white/20 px-3 py-1 rounded-full flex items-center">
							<span className="font-medium text-xs">JavaFX</span>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default ProjectCard;
