import {useTypedSelector} from "../hooks/useTypedSelector";
import {useEffect} from "react";
import {useActions} from "../hooks/useActions";
import {useLocalStorage} from "../hooks/useLocalStorage";

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
        return <h1>Идёт загрузка...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div>
            {notes.map((note) => (
                <div key={note.id}>{note.title}</div>
            ))}
        </div>
    );
};
