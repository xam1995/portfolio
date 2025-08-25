import {getProjectBySlug, getProjects} from "@/services/projects/service";
import ProjectPageClient from "@/components/pages/projects/Project";

export async function generateStaticParams() {
    const slugs = getProjects().map(proj => proj.slug);
    return slugs.map((slug) => ({slug}));
}

export default async function ProjectPage({params}: { params: { slug: string } }) {
    const project = await getProjectBySlug(params.slug);
    return (<ProjectPageClient project={project}/>);
}