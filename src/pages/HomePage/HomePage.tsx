import '../../styles/typography.css';
import './HomePage.css';


const name = "Kathryn Louie";
const title = "Industrial Design";
const intro = "Hi! I’m a creative with a background in ID, based in Vancouver, Canada."

interface ProjectCardProps {
    imageUrl: string;
    title: string;
    description: string;
    date: string;
}

const unsplashUrl = "https://source.unsplash.com/random/1024x768";

const junkText = "Viral cornhole fixie seitan PBR&B, pop-up church-key waistcoat tacos semiotics palo santo shabby chic sartorial ugh hella. Hexagon heirloom microdosing cold-pressed, cloud bread truffaut etsy fingerstache actually gluten-free readymade biodiesel pork belly schlitz.";

const projectCards: Array<ProjectCardProps> = [
    {
        imageUrl: `${unsplashUrl}?cb=0`,
        title: "Active Seating",
        description: junkText,
        date: "This is a date lul"
    },
    {
        imageUrl: `${unsplashUrl}?cb=1`,
        title: "Active Seating",
        description: junkText,
        date: "This is a date lul"
    },
    {
        imageUrl: `${unsplashUrl}?cb=2`,
        title: "Active Seating",
        description: junkText,
        date: "This is a date lul"
    },
    {
        imageUrl: `${unsplashUrl}?cb=3`,
        title: "Active Seating",
        description: junkText,
        date: "This is a date lul"
    }
]


const ProjectCard = (props: ProjectCardProps): JSX.Element => {
    const { imageUrl, title, description, date } = props;
    return <div className="project-card">
        <img className="project-card-image" alt={title} src={imageUrl} />
        <div className="project-card-details-container">
            <div className="project-card-title">{title}</div>
            <div className="project-card-subtitle">{description}</div>
            <div className="project-card-date">{date}</div>    
        </div>
        
    </div>
}


export const HomePage = (): JSX.Element => {
    return <div>
        <div className="centered-block">
            <div className="text-block">
                <div className="paragraph">{name}</div>
                <div className="paragraph-light">{title}</div>
                <div className="heading1">{intro}</div>
            </div>
        </div>
        <div className="grid">
            {projectCards.map(card => <ProjectCard {...card} />)}
        </div>
    </div>
}