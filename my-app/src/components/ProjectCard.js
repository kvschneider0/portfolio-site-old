import { Link } from 'react-router-dom';
import styled from "styled-components";

const Card = styled.div`
    width: 50%;
    margin: auto;
    background-color: var(--light-grey);
    border: 1px solid var(--white);
    padding: 20px;
    border-radius: 1%;
    margin-bottom: 50px;
    transition: 0.5s;

    &:hover {
        transform: scale(1.05);
    }

`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: var(--white);
`;

function ProjectCard({ title, description, image, route }) {
    return (
        <Card>
          <StyledLink to={route} className='project-card'>
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={image}/>
          </StyledLink>
        </Card>
    );
}

export default ProjectCard;