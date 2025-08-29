import {getProjectBySlug, getProjects} from "@/services/projects/service";
import ProjectPageClient from "@/components/pages/projects/Project";

export async function generateStaticParams() {
    const slugs = getProjects().map(proj => proj.slug);
    return slugs.map((slug) => ({slug}));
}

export const dynamicParams = false;
export const revalidate = false;

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
    const {slug} = await props.params;
    const project = await getProjectBySlug(slug);
    return (project && <ProjectPageClient project={project}/>);
}