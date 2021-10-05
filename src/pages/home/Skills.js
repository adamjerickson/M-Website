import styled from 'styled-components';

const SkillsWrapper = styled.div`
  width: 100vw;
`
const HeadlineWrapper = styled.div`
  position: relative;
  height: 263px;
  margin-bottom: 86px;

  @media screen and (max-width: 925px) {
    height: 131px;
    margin-bottom: 43px;
  }
`
const Headline = styled.h1`
  position: absolute;
  top: -38px;
  left: -0.08em;
  margin: 0;
  
  font-weight: 600;
  font-size: 164px;
  // line-height: 10px;

  /* Second line, "familiar" */
  span {
    position: absolute;
    top: 152px;
    left: 235px;
    
  }

  @media screen and (max-width: 925px) {
    font-size: 82px;
    left: -0.08em;

    span {
      top: 70px;
      left: 117px;
    }
  }
`;

const SkillList = styled.div`
  margin: 0px 14% 80px 14%;
`;

const Skill = styled.div`
`;

const SkillTitle = styled.h3`
  color: #b3b3b3;
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 0;
  line-height: 1em;
`;

const SkillDescription = styled.p`
  margin-top: 0.5em;
`;

const Skills = () => {
  return (
    <SkillsWrapper>
      <HeadlineWrapper>
        <Headline>meet my <span>skills.</span></Headline>
      </HeadlineWrapper>

      <SkillList>
        <Skill>
          <SkillTitle>user experience design.</SkillTitle>
          <SkillDescription>I create the product’s logic.
            I love user research and user
            testing. I’m people driven as
            well as data influenced.
            I enhance people’s satisfaction
            with a product by refining the
            usability, accessibility, and
            pleasure given in the interaction between
            a person and a product.
          </SkillDescription>
        </Skill>

        <Skill>
          <SkillTitle>interaction design.</SkillTitle>
          <SkillDescription>I think about what the interface does
            after a person touches it, speaks to it,
            or looks at it — I make interactive
            experiences. I prototype and do user
            testing. I create animations,
            transitions, haptics, and other
            interactivity to guide and delight.
          </SkillDescription>
        </Skill>

        <Skill>
          <SkillTitle>user interface design.</SkillTitle>
          <SkillDescription>I think about the aesthetics and
            interface elements: typography,
            color, space, shapes, texture, buttons,
            headers, images, icons, illustrations, etc.
            I make sure a person’s interaction with
            those elements is as captivating,
            efficient and straightforward as possible.
          </SkillDescription>
        </Skill>

        <Skill>
          <SkillTitle>information architecture.</SkillTitle>
          <SkillDescription>I help with user flow, journey mapping,
            how a person performs and completes
            tasks — How they get from A to B.
          </SkillDescription>
        </Skill>
      </SkillList>
    </SkillsWrapper>
  );
}

export default Skills;
