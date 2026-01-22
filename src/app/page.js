import Home from "@/app/Home";
import { loadProjects } from "@/lib/data";
import React from "react";

const Page = () => {
	const projects = loadProjects();
	return <Home projects={projects} />;
};

export default Page;