import './styles.css'
import './creationDialogue.css'
import ellipse52 from "./assets/ellipse52.svg";
import ellipse5 from "./assets/ellipse5.svg";
import pulkitPfp from "./assets/pulkitPfp.svg";
import profilePicture from "./assets/profilePicture.svg";
import nilePfp from "./assets/nilePfp.svg";
import ellipse51 from "./assets/ellipse51.svg";
import TypeSelectionfixed from "./components/TypeSelectionfixed.tsx";
import TypeSelectionmeetup from "./components/TypeSelectionmeetup.tsx";

const propsData = {
  typeSelectionfixed1: {
    zrsdtnyrxkqmk: "\u{1F44D}",
    ellipse52: ellipse52,
    fixed: "fixed",
  },
  typeSelectionmeetup: {
    meetup: "meetup",
    ellipse51: ellipse51,
    spqpkpzrfcaek: "\u{1F91D}",
  },
  typeSelectionfixed: {
    flex: "flex",
    ghpnbyzybzfpl: "\u{1F64C}",
    ellipse5: ellipse5,
  },
};
function CreationDialogue() {
  return (
    <div className="creation-dialogue">
      <div className="header">
        <span className="sync">sync</span>
        <span className="calendar">calendar</span>
        <img className="profile-picture" src={profilePicture} />
      </div>
      <span className="title">create event</span>
      <div className="flex-container">
        <div className="flex-container-1">
          <span className="tnoxlkdwnkyrw">😄</span>
          <img className="nile-pfp" src={nilePfp} />
          <img className="pulkit-pfp" src={pulkitPfp} />
        </div>
        <div className="flex-container-2">
          <div className="flex-container-3">
            <span className="invite">Invite</span>
            <div className="rectangle-2">
              <span className="hbtjbauuqsdka">+</span>
            </div>
          </div>
          <span className="nile-camai">Nile Camai</span>
          <span className="pulkit-singhal">Pulkit Singhal</span>
        </div>
        <TypeSelectionfixed
          className="type-selectionfixed-1-instance-1"
          {...propsData.typeSelectionfixed1}
        />
        <TypeSelectionmeetup
          className="type-selectionmeetup-instance-1"
          {...propsData.typeSelectionmeetup}
        />
        <TypeSelectionfixed
          className="type-selectionfixed-instance-1"
          {...propsData.typeSelectionfixed}
        />
      </div>
      <div className="flex-container-4">
        <span className="eqsqurdkgnzyj">👍</span>
        <div className="rectangle-16">DubHacks ‘22</div>
      </div>
      <div className="flex-container-5">
        <span className="tixusyzftdhhr">📍</span>
        <div className="rectangle-16-1">University of Washington</div>
      </div>
      <div className="flex-container-6">
        <span className="pradpiulgjnxh">🕒</span>
        <div className="rectangle-2-1">10&#x2F;22</div>
        <div className="rectangle-2-2">
          <span className="num-700-pm">7:00 pm</span>
        </div>
        <span className="to">to</span>
        <div className="rectangle-2-3">
          <span className="num-800-pm">8:00 pm</span>
        </div>
        <div className="rectangle-2-4">10&#x2F;22</div>
      </div>
      <div className="flex-container-7">
        <span className="fpgmmgctuszoc">📝</span>
        <div className="rectangle-16-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </div>
      </div>
    </div>
  );
}

export default CreationDialogue;