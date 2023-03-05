import styled from 'styled-components'

export default styled.button`
    border: none;
    color: var(--black);
    text-decoration: none;

    &:active, &:focus, &:hover, &.active {
		    color: var(--white)
    }
`