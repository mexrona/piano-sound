import {type IAudioElement} from "../../types/audioelement";

export const AudioElement: React.FC<IAudioElement> = ({note, code}) => {
    return <audio id={note} data-code={code} src={`/keys/${note}.mp3`} />;
};
