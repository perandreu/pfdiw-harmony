import { useParams } from "react-router-dom";
import PersonalView from "./PersonalView";

const PersonalViewWrapper = ({ type }) => {
    const { id } = useParams();
    return <PersonalView type={type} id={id} />;
  }

export default PersonalViewWrapper;