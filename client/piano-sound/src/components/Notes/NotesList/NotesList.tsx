import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useEffect} from "react";
import {useActions} from "../../../hooks/useActions";
import {useLocalStorage} from "../../../hooks/useLocalStorage";
import {Title} from "../../Title/Title";
import {LinkNav} from "../../LinkNav/LinkNav";
import {Loader} from "../../Loader/Loader";
import * as SC from "./styles";

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
        return <SC.Warn>{error}</SC.Warn>;
    }

    return (
        <div>
            <Title>Notes</Title>
            {notes.map((note: any) => (
                <LinkNav
                    key={note._id}
                    to={`/notes/${note.title}`}
                    $color="#ffffff">
                    {note.title}
                </LinkNav>
            ))}
        </div>
    );
};
