import styled from 'styled-components';

const BeliefWrapper = styled.div`
    position: relative;
    height: 275px;
    width: 308px;
`;

const Title = styled.h4`
    position: absolute;
    border: 1px solid green;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0;
    top: 34%;
    left: -50%;
    height: 60px;
    width: 275px;
    transform: rotate(-90deg);
    white-space: pre-wrap;
    text-align: left; 
    line-height: 1em;
    margin-top: .5em;
    margin-bottom: .5em;
`;

const Description = styled.p`
    border: 1px solid blue;
    position: relative;
    text-align: left;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: .75em;
    margin-right: 0;
`;

const Belief = (props) => {
    return (
        <BeliefWrapper className={props.classId}>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
        </BeliefWrapper>
    )
}

export default Belief;