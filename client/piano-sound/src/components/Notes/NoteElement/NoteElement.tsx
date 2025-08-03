import {useParams} from "react-router-dom";
import {type IParams} from "../../../types/noteElement";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {Title} from "../../Title/styled";
import {Panel} from "../../Panel/Panel";
import {Piano} from "../../Piano/Piano";
import {useLocalStorage} from "../../../hooks/useLocalStorage";
import {Button} from "../../Button/Button";

export const NoteElement: React.FC = () => {
    const {title} = useParams<IParams>();
    const {getLocalStorage} = useLocalStorage();
    const notes = getLocalStorage("notes");

    console.log(notes);

    const isKeysHide = useAppSelector((state) => state.keyboard.isKeysHide);
    const isNotesHide = useAppSelector((state) => state.keyboard.isNotesHide);
    const volume = useAppSelector((state) => state.volume.value);

    return (
        <>
            <Title>{title}</Title>
            {notes.map((note: any) => {
                if (note.title === title) {
                    return (
                        <div>
                            <Panel
                                key={note._id}
                                id={note._id}
                                defaultValue={note.body}></Panel>
                            <div>
                                <Button $color="#b558cf">Autoplay</Button>
                            </div>
                        </div>
                    );
                }
            })}
            <Piano
                isKeysHide={isKeysHide}
                isNotesHide={isNotesHide}
                volume={volume}
            />
        </>
    );
};
