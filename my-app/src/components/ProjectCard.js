import { Link } from 'react-router-dom';
import styled from "styled-components";

const Card = styled.div`
    width: 75%;
    margin: auto;
    background-color: var(--light-grey);
    border: 1px solid var(--white);
    padding: 20px;
    border-radius: 1%;
    margin-bottom: 50px;

    &:hover {
        transform: scale(1.05);
        transition-duration: 0.75s;
    }

`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: var(--white);
`;

function ProjectCard({ title, description, image }) {
    return (
        <Card>
          <StyledLink to='/portfolio-site/about' className='project-card'>
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={image}/>
          </StyledLink>
        </Card>
    );
}

export default ProjectCard;