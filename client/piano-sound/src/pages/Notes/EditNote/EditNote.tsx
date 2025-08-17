import {useParams} from "react-router-dom";
import {type IParams} from "../../../types/noteElement";
import {useLocalStorage} from "../../../hooks/useLocalStorage";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {useState} from "react";
import {requestNotes} from "../../../utilities/requestNotes";
import {useActions} from "../../../hooks/useActions";
import {useNavigate} from "react-router-dom";
import {Title} from "../../../components/Title/Title";
import {Input} from "../../../components/Input/Input";
import {Panel} from "../../../components/Panel/Panel";
import {Button} from "../../../components/Button/Button";
import {Piano} from "../../../components/Piano/Piano";
import {Message} from "../../../components/Message/Message";
import {sendMessage} from "../../../components/sendMessage/sendMessage";

export const EditNote: React.FC = () => {
    const {title} = useParams<IParams>();
    const {getLocalStorage, setLocalStorage} = useLocalStorage();

    const isKeysHide = useAppSelector((state) => state.keyboard.isKeysHide);
    const isNotesHide = useAppSelector((state) => state.keyboard.isNotesHide);
    const volume = useAppSelector((state) => state.volume.value);

    const [messageText, setMessageText] = useState("");
    const [titleValue, setTitleValue] = useState(String(title));
    const [panelValue, setPanelValue] = useState("");

    const notes = getLocalStorage("notes");

    const editNotes = requestNotes;
    const {fetchNotes} = useActions();
    const navigate = useNavigate();

    const editOnClick = (url: string, type: string, body: any, e: any) => {
        if (panelValue === "") {
            sendMessage("Вы не добавили изменения", setMessageText);
            return;
        }

        const notes = getLocalStorage("notes").filter(
            (note: any) => note.title !== title
        );

        const sameTitle = notes.filter(
            (note: any) => note.title === titleValue
        );

        if (sameTitle.length) {
            sendMessage("Этот заголовок уже используется", setMessageText);
            return;
        }

        notes.push({
            _id: body.id,
            title: body.newTitle,
            body: body.newBody,
        });
        setLocalStorage("notes", notes);

        editNotes(url, type, body, e);
        fetchNotes();

        sendMessage("Ноты успешно редактированы!", setMessageText);

        navigate(`/notes/${titleValue}`);
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
                                                body: note.body,
                                                id: note._id,
                                                newTitle: titleValue,
                                                newBody: panelValue,
                                            },
                                            e
                                        )
                                    }>
                                    Save
                                </Button>
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
