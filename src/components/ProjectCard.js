"use client";

import { motion } from "motion/react";
import { techstack } from "@/lib/techstack";
import Image from "next/image";
import Link from "next/link";
import TechBadge from "@/components/ui/tech-badge";

const ProjectCard = ({ project: { title, description, image, tech, links } }) => {
	return (
		<a className="h-full" href={links.github}>
			<motion.div
				className="group bg-white/5 rounded-xl border border-white/10 hover:border-white/25 h-full flex flex-col"
				whileHover={{ y: -3 }}>
				<div className="relative h-48 w-full bg-gray-200 rounded-t-xl overflow-hidden">
					<Image src={image} fill alt={title} />
				</div>
				<div className="p-4 flex flex-col justify-between gap-5 flex-1">
					<div className="">
						<h3 className="text-2xl mb-2 font-inter font-bold">{title}</h3>
						<p className="text-xs text-white/50">{description}</p>
					</div>
					<div className="flex flex-wrap gap-2 text-sm items-center">
						{tech.map((tech) => {
							const techData = techstack[tech];
							if (!techData) return null;
							return <TechBadge key={tech} tech={techData} />;
						})}
					</div>
				</div>
			</motion.div>
		</a>
	);
};

export default ProjectCard;
