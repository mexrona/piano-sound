import {useParams} from "react-router-dom";
import {Title} from "../../Title/styled";

interface IParams {
    [title: string]: string;
}

export const NoteElement: React.FC = () => {
    const {title} = useParams<IParams>();

    return <Title>{title}</Title>;
};
