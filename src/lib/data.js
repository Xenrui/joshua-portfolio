import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function loadProjects() {
  const projectsDirectory = path.join(process.cwd(), "src/content/projects");
  
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(projectsDirectory);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(projectsDirectory, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data: frontmatter } = matter(fileContents);
      
      return {
        slug: file.replace(".md", ""),
        ...frontmatter,
      };
    })
    .filter((project) => project.featured === true)
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}