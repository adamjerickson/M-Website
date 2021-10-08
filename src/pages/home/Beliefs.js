import styled from 'styled-components'
import Belief from '../../components/Belief';

const BeliefsWrapper = styled.div`
  width: 100vw;
  margin-top: 115px;
  margin-bottom: 86px;

  @media screen and (max-width: 925px) {
    margin-top: 57px;
    margin-bottom: 66px;
  }
`
const BeliefsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  text-align: right;
  width: 100%;
  margin-bottom: 86px;

  h2 {
    color: white;
    background-color: black;
    font-size: 72px;
    font-weight: 600;
    padding: 0.43em 0 0.43em 0;
    margin: 0 -0.15em 0 0;
    width: 66%;
  }

  @media screen and (max-width: 925px) {
    margin-bottom: 43px;

    h2 {
      font-size: 36px;
    }
  }
`

const BeliefsGrid = styled.div`
  margin-left: 8vw;
  display: grid;
  align-items: center;
  grid-template-columns: 308px 308px 308px;
  column-gap: 68px;
  row-gap: 86px;

  @media screen and (min-width: 2430px) {
    grid-template-columns: 308px 308px 308px 308px 308px 308px;
    row-gap: 43px;
  }

  @media screen and (max-width: 1226px) {
    grid-template-columns: 308px 308px;
    row-gap: 43px;
  }

  @media screen and (max-width: 737px) {
    grid-template-columns: 275px;
    row-gap: 43px;
  }

`

function Beliefs() {
  return (
    <div>
      <BeliefsHeader>
        <h2>things i believe</h2>
      </BeliefsHeader>
      <BeliefsWrapper>
      

      <BeliefsGrid>
        <Belief
          classId="item9"
          title="it's all about the user."
          description="All functionality is created out of a user
                      need and from a user perspective. 
                      Asking the questions; As a user… What 
                      problem does this solve for me? 
                      Does this make me happy? Is 
                      it better than the alternative?" />

        <Belief
          classId="item10"
          title={"systems should match\n the real world."}
          description="The product should speak the users' 
                        language, with words, phrases and
                        concepts familiar to the user, 
                        rather than system-oriented terms.
                        Follow real-world conventions,
                        making information appear in a 
                        natural and logical order." />

        <Belief
          classId="item11"
          title="assume nothing."
          description="Functionalities are created based 
                      on research and conventions. 
                      Any further design decisions should
                      be the result of user testing. 
                      Personal preference does not enter 
                      the equation." />

        <Belief
          classId="item12"
          title="test often."
          description="Test early. Get the feedback loop 
                      moving with users. Use this information 
                      to iterate and test again." />

        <Belief
          classId="item13"
          title={`work should be clean.`}
          description="Design should not contain information 
                      which is irrelevant or rarely needed. 
                      The design should bear this in mind 
                      both informationally and aesthetically." />

        <Belief
          classId="item14"
          title={`live in the now, \nbuild for the future.`}
          description="All functionality is created to be
                      relevant to the current situation, 
                      fully extendable and scalable for 
                      future iterations." />
      </BeliefsGrid>
    </BeliefsWrapper>
    </div>
    
  );
}

export default Beliefs;