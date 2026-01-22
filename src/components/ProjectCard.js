"use client";

import { motion } from "motion/react";
import { techstack } from "@/lib/techstack";
import StackIcon from "tech-stack-icons";
import Image from "next/image";

const ProjectCard = ({ project }) => {
	return (
		<div className="h-full">
			<motion.div
				className="group bg-white/5 rounded-xl border border-white/10 hover:border-white/25 h-full flex flex-col"
				whileHover={{ y: -3 }}>
				<div className="relative h-48 w-full bg-gray-200 rounded-t-xl overflow-hidden">
					<Image src={project.image} fill alt={project.title} />
				</div>
				<div className="p-4 flex flex-col justify-between gap-5 flex-1">
					<div className="">
						<h3 className="text-2xl mb-2">{project.title}</h3>
						<p className="text-xs text-white/50">{project.description}</p>
					</div>
					<div className="flex flex-wrap gap-2 text-sm items-center">
						{project.tech.map((tech) => {
							const techData = techstack[tech];
							if (!techData) return null;
							return (
								<div
									key={tech}
									className="bg-white/10 border border-white/20 px-3 py-1 rounded-full flex gap-1 items-center">
									<div className="h-5 w-5">
										<StackIcon name={techData.icon} />
									</div>
									<span className="font-medium text-xs text-white/80">{techData.label}</span>
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
