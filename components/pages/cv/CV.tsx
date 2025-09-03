import {Container} from "@mui/material";
import {getJobs} from "@/services/jobs/service";
import {Certification, Education, Job} from "@/data/model/types";
import {getCertifications, getDegrees, getEducation} from "@/services/education/service";
import JobSection from "@/components/ui/cv/sections/JobSection/JobSection";
import EducationSection from "@/components/ui/cv/sections/EducationSection/EducationSection";
import CertificationSection from "@/components/ui/cv/sections/CertificationSection/CertificationSection";
import DegreeSection from "@/components/ui/cv/sections/DegreeSection/DegreeSection";
import SectionHeader from "@/components/ui/headers/SectionHeader/SectionHeader";


export default function CV() {
    const jobs: Job[] = getJobs();
    const education: Education[] = getEducation();
    const certifications: Certification[] = getCertifications();
    const degrees: Certification[] = getDegrees();

    return (
        <Container sx={{paddingY: 3, marginBottom: 5}} maxWidth="md" id="cv">

            <SectionHeader icon="lucide:briefcase" label="Professional Journey"/>
            {jobs.map((job, index) => <JobSection key={"job" + index} job={job}/>)}

            <SectionHeader icon="lucide:graduation-cap" label="Educational Journey"/>
            {education.map((ed, index) => <EducationSection key={"education" + index} ed={ed}/>)}
            <DegreeSection degrees={degrees}/>

            <SectionHeader icon="lucide:file-badge" label="Certifications"/>
            <CertificationSection certifications={certifications}/>

        </Container>
    );
}