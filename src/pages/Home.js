import Belief from '../components/Belief';

import '../App.css';

import mollie from '../images/mollie.jpg';

function Home() {
  return (
    <div className="MainContainer">
      <div class="main">
        {/* "some text" */}
        <div class="item5">
            <p>this is a small paragraph that will say something cute</p>
        </div>

        {/* Mollies profile picture */}
        <div class="item6">
            <img src={mollie} alt="Mollie Cox" class="responsive"  />
        </div>

        {/* about Mollie */}
        <div class="item7">
            <p>hello. i am a product designer happily 
                creating experiences for over 15 years. i 
                want to live in a world where collaboration 
                is never an after thought, products and 
                functionality are always created with a 
                user-centered design, and great design is 
                considered a moral imperative.
            </p>
        </div>

        <div class="item8">
            <h2>things i believe</h2>
        </div>

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
          title="work should be structure and clean."
          description="Design should not contain information 
                    which is irrelevant or rarely needed. 
                    The design should bear this in mind 
                    both informationally and aesthetically." />  

        <Belief 
          classId="item14"
          title="live in the now, build for the future."
          description="All functionality is created to be
                    relevant to the current situation, 
                    fully extendable and scalable for 
                    future iterations." />

        {/* the text "meet my skills" */}
        <div class="headline2">
            <h1>meet my <span>skills.</span> </h1>
        </div>  
        
        {/* long text (subgrid) */}
        <div class="item15">
            <h3>user experience design.</h3>
                <p>I create the product’s logic. 
                    I love user research and user
                    testing. I’m people driven as
                    well as data influenced. 
                    I enhance people’s satisfaction 
                    with a product by refining the 
                    usability, accessibility, and 
                    pleasure given in the interaction between 
                    a person and a product.
                </p>       
        </div>
        {/* long text (subgrid) */}
        <div class="item16">
            <h3>interaction design.</h3>
                <p>I think about what the interface does 
                    after a person touches it, speaks to it,
                    or looks at it — I make interactive 
                    experiences. I prototype and do user 
                    testing. I create animations, 
                    transitions, haptics, and other 
                    interactivity to guide and delight.
                </p>       
        </div>
        {/* long text (subgrid) */}
        <div class="item17">
            <h3>user interface design.</h3>
                <p>I think about the aesthetics and 
                    interface elements: typography, 
                    color, space, shapes, texture, buttons, 
                    headers, images, icons, illustrations, etc. 
                    I make sure a person’s interaction with 
                    those elements is as captivating, 
                    efficient and straightforward as possible.
                </p>       
        </div>
        {/* long text (subgrid) */}
        <div class="item18">
            <h3>information architecture.</h3>
                <p>I help with user flow, journey mapping, 
                    how a person performs and completes 
                    tasks — How they get from A to B.
                </p>       
        </div>
      </div>
      {/* Let's get Familiar */}
      <div class="headline">
          <h1>let's get <span>familiar.</span> </h1>
      </div>   
    </div>
  );
}

export default Home;
