import {useParams} from "react-router-dom";
import {type IParams} from "../../../types/noteElement";
import {Title} from "../../Title/styled";

export const NoteElement: React.FC = () => {
    const {title} = useParams<IParams>();

    return <Title>{title}</Title>;
};
