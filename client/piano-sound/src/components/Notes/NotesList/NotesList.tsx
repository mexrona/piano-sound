import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useEffect} from "react";
import {useActions} from "../../../hooks/useActions";
import {useLocalStorage} from "../../../hooks/useLocalStorage";
import {Title} from "../../Title/Title";
import {LinkNav} from "../../LinkNav/LinkNav";
import {Loader} from "../../Loader/Loader";
import {useActionNotes} from "../../../hooks/useActionNotes";
import * as SC from "./styles";

export const NotesList: React.FC = () => {
    const {notes, error, loading} = useTypedSelector((state) => state.note);
    const {fetchNotes} = useActions();
    const {setLocalStorage} = useLocalStorage();

    const deleteNotes = useActionNotes;

    useEffect(() => {
        fetchNotes();
    }, []);

    useEffect(() => {
        setLocalStorage("notes", notes);
    }, [notes]);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <SC.Warn>{error}</SC.Warn>;
    }

    if (!notes.length) {
        return <SC.Warn>Список пуст</SC.Warn>;
    }

    const deleteOnClick = (url: string, type: string, body: object) => {
        deleteNotes(url, type, body);
        fetchNotes();
        location.reload();
    };

    return (
        <div>
            <Title>Notes</Title>
            {notes.map((note: any) => (
                <SC.NotesListItem key={note._id}>
                    <LinkNav to={`/notes/${note.title}`} $color="#ffffff">
                        {note.title}
                    </LinkNav>
                    <SC.Delete
                        onClick={() =>
                            deleteOnClick("delete", "delete", {
                                title: note.title,
                                body: note.body,
                            })
                        }>
                        Удалить
                    </SC.Delete>
                </SC.NotesListItem>
            ))}
        </div>
    );
};
