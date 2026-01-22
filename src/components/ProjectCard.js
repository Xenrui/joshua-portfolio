"use client";

import { motion } from "motion/react";

const ProjectCard = ({ project }) => {
	return (
		<div className="h-full">
			<motion.div
				className="group bg-white/5 rounded-xl border border-white/10 hover:border-white/25 h-full flex flex-col"
				whileHover={{ y: -3 }}>
				<div className="h-48 bg-gray-200 rounded-t-xl overflow-hidden"></div>
				<div className="p-4 flex flex-col justify-between gap-5 flex-1">
					<div className="">
						<h3 className="text-3xl mb-2">{project.title}</h3>
						<p className="text-xs text-white/50">{project.description}</p>
					</div>
					<div className="flex flex-wrap gap-2 text-sm items-center">
						{project.tech.map((tools) => {
							return (
								<div className="bg-white/20 px-3 py-1 rounded-full flex items-center">
									<span className="font-medium text-xs">{tools}</span>
								</div>
							);
						})}
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default ProjectCard;
