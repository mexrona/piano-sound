import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {MainPage} from "./pages/Main/MainPage";
import {PianoPage} from "./pages/Piano/PianoPage";
import {NotesPage} from "./pages/Notes/NotesPage/NotesPage";
import {NotePage} from "./pages/Notes/NotePage/NotePage";
import {Menu} from "./components/Menu/Menu";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/piano" element={<PianoPage />} />
                <Route path="/notes" element={<NotesPage />} />
                <Route path="/notes/:title" element={<NotePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
