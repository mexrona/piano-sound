import {Title} from "../../../components/Title/Title";
import {useLocalStorage} from "../../../hooks/useLocalStorage";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {type IParams} from "../../../types/noteElement";
import {Panel} from "../../../components/Panel/Panel";
import {Button} from "../../../components/Button/Button";
import {Piano} from "../../../components/Piano/Piano";
import {useState} from "react";
import {useActionNotes} from "../../../hooks/useActionNotes";
import {useActions} from "../../../hooks/useActions";
import {Message} from "../../../components/Message/Message";
import {Input} from "../../../components/Input/Input";
import {useNavigate} from "react-router-dom";

export const EditNote: React.FC = () => {
    const {title} = useParams<IParams>();
    const {getLocalStorage} = useLocalStorage();

    const isKeysHide = useAppSelector((state) => state.keyboard.isKeysHide);
    const isNotesHide = useAppSelector((state) => state.keyboard.isNotesHide);
    const volume = useAppSelector((state) => state.volume.value);

    const [messageText, setMessageText] = useState("");
    const [titleValue, setTitleValue] = useState(String(title));
    const [panelValue, setPanelValue] = useState("");

    const notes = getLocalStorage("notes");

    const editNotes = useActionNotes;
    const {fetchNotes} = useActions();
    const navigate = useNavigate();

    const sendMessage = (message: string) => {
        setMessageText(message);

        setTimeout(() => {
            setMessageText("");
        }, 2000);
    };

    const editOnClick = (url: string, type: string, body: object, e: any) => {
        editNotes(url, type, body, e);
        fetchNotes();

        sendMessage("Ноты успешно редактированы!");

        navigate(`/notes/${titleValue}/edit`);
    };

    return (
        <div>
            <Title>Edit</Title>
            <label className="wrapper">
                <h2>Title:</h2>
                <Input
                    placeholder={titleValue}
                    onChange={(e: any) => setTitleValue(e.target.value)}
                    value={titleValue}
                />
            </label>
            {notes.map((note: any) => {
                if (note.title === title) {
                    return (
                        <div key={note._id}>
                            <Panel
                                id={note._id}
                                defaultValue={
                                    panelValue ? panelValue : note.body
                                }
                                onChange={(e: any) =>
                                    setPanelValue(e.target.value)
                                }
                                disabled={false}></Panel>
                            <div className="wrapper">
                                <Button
                                    $color="#cf2270"
                                    onClick={(e: any) =>
                                        editOnClick(
                                            "edit",
                                            "put",
                                            {
                                                title: note.title,
                                                newTitle: titleValue,
                                                body: note.body,
                                                newBody: panelValue,
                                            },
                                            e
                                        )
                                    }>
                                    Save
                                </Button>
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
            <Message messageText={messageText} message={messageText} />
        </div>
    );
};
