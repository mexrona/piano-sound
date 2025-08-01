import {type IAudioElement} from "../../types/audioelement";

export const AudioElement: React.FC<IAudioElement> = ({note}) => {
    return (
        <audio
            id={note.slice(0, -1)}
            src={`../../keys/${note.slice(0, -1)}.mp3`}
        />
    );
};
