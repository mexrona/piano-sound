import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useEffect} from "react";
import {useActions} from "../../../hooks/useActions";
import {useLocalStorage} from "../../../hooks/useLocalStorage";
import {Title} from "../../Title/Title";
import {LinkNav} from "../../LinkNav/LinkNav";
import {Loader} from "../../Loader/Loader";

export const NotesList: React.FC = () => {
    const {notes, error, loading} = useTypedSelector((state) => state.note);
    const {fetchNotes} = useActions();
    const {setLocalStorage} = useLocalStorage();

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
        return <h1>{error}</h1>;
    }

    return (
        <div>
            <Title>Notes</Title>
            {notes.map((note) => (
                <LinkNav
                    key={note.id}
                    to={`/notes/${note.title}`}
                    $color="#2fa7f3">
                    {note.title}
                </LinkNav>
            ))}
        </div>
    );
};
