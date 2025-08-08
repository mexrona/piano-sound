import {type IAudioElement} from "../../types/audioelement";

export const AudioElement: React.FC<IAudioElement> = ({note, code}) => {
    return (
        <audio
            id={note.slice(0, -1)}
            data-code={code}
            src={`../../keys/${note.slice(0, -1)}.mp3`}
        />
    );
};
