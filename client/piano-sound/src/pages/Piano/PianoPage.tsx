import {useEffect} from "react";
import {Title} from "../../components/Title/Title";
import {Controller} from "../../components/Controller/Controller";
import {Piano} from "../../components/Piano/Piano";
import {useAppSelector} from "../../hooks/useAppSelector";
import {Panel} from "../../components/Panel/Panel";
import {Button} from "../../components/Button/Button";
import {useDispatch} from "react-redux";
import {
    setIsRecording,
    recording,
    clean,
} from "../../store/reducers/recordReducer";
import {Input} from "../../components/Input/Input";
import {Modal} from "../../components/Modal/Modal";
import {useState} from "react";
import {useActionNotes} from "../../hooks/useActionNotes";
import {Message} from "../../components/Message/Message";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Loader} from "../../components/Loader/Loader";

export const PianoPage: React.FC = () => {
    const isKeysHide = useAppSelector((state) => state.keyboard.isKeysHide);
    const isNotesHide = useAppSelector((state) => state.keyboard.isNotesHide);
    const volume = useAppSelector((state) => state.volume.value);
    const isRecording = useAppSelector((state) => state.record.isRecording);
    const notes = useAppSelector((state) => state.record.notes);
    const allNotes = useTypedSelector((state) => state.note.notes);
    const {loading} = useTypedSelector((state) => state.note);
    const {fetchNotes} = useActions();

    const [modalIsShow, setModalIsShow] = useState(false);
    const [titleValue, setTitleValue] = useState("");
    const [messageText, setMessageText] = useState("");

    const sendNotes = useActionNotes;

    const dispatch = useDispatch();

    const {setLocalStorage, getLocalStorage} = useLocalStorage();

    useEffect(() => {
        fetchNotes();
    }, []);

    useEffect(() => {
        setLocalStorage("notes", allNotes);
    }, [allNotes]);

    if (loading) {
        return <Loader />;
    }

    const setRedordingNotes = (value: any) => {
        dispatch(recording(value));
    };

    const sendMessage = (message: string) => {
        setMessageText(message);

        setTimeout(() => {
            setMessageText("");
        }, 2000);
    };

    const saveNotes = () => {
        if (!notes) {
            sendMessage("Вы ничего не ввели");
            return;
        }

        setModalIsShow(true);
        document.getElementsByTagName("body")[0].classList.add("no-scroll");
    };

    const deleteNotes = () => {
        if (!notes) {
            sendMessage("Вы ничего не ввели");
            return;
        }

        dispatch(clean());
    };

    const addNotes = (url: string, type: string, body: any, e: any) => {
        if (!titleValue) {
            sendMessage("Пожалуйста, добавьте заголовок!");
            return;
        }

        const sameTitle = getLocalStorage("notes").filter(
            (note: any) => note.title === titleValue
        );

        if (sameTitle.length) {
            sendMessage("Этот заголовок уже используется");
            return;
        }

        dispatch(clean());
        setModalIsShow(false);
        document.getElementsByTagName("body")[0].classList.remove("no-scroll");

        sendNotes(url, type, body, e);

        setTitleValue("");
        dispatch(setIsRecording(false));
        sendMessage("Ноты успешно добавлены!");

        setTimeout(() => {
            location.reload();
        }, 1000);
    };

    const cancel = () => {
        setModalIsShow(false);
        document.getElementsByTagName("body")[0].classList.remove("no-scroll");
        setTitleValue("");
    };

    const close = () => {
        dispatch(setIsRecording(false));
        dispatch(clean());
    };

    return (
        <>
            <Title>Piano</Title>
            <Controller isKeysHide={isKeysHide} isNotesHide={isNotesHide} />
            {isRecording && (
                <div>
                    <Panel id="Notes" defaultValue={notes} disabled={true} />
                    <div className="wrapper">
                        <Button onClick={saveNotes} $color="#9bcf58">
                            Save
                        </Button>
                        <Button onClick={deleteNotes} $color="#cf5858">
                            Delete
                        </Button>
                        <Button onClick={close} $color="#5873cf">
                            Close
                        </Button>
                    </div>
                </div>
            )}
            <Piano
                isKeysHide={isKeysHide}
                isNotesHide={isNotesHide}
                volume={volume}
                isRecording={isRecording}
                recording={setRedordingNotes}
                modalIsShow={modalIsShow}
            />
            <Modal modalIsShow={modalIsShow}>
                <Input
                    placeholder="Title"
                    onChange={(e: any) => setTitleValue(e.target.value)}
                    value={titleValue}
                />
                <div className="wrapper modal">
                    <Button
                        onClick={(e: any) =>
                            addNotes(
                                "add",
                                "post",
                                {title: titleValue, body: notes},
                                e
                            )
                        }
                        $color="#9bcf58">
                        Save
                    </Button>
                    <Button onClick={cancel} $color="#cf5858">
                        Cancel
                    </Button>
                </div>
            </Modal>
            <Message messageText={messageText} message={messageText} />
        </>
    );
};
