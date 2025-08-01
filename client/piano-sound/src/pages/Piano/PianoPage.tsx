import {Title} from "../../components/Title/Title";
import {Controller} from "../../components/Controller/Controller";
import {Piano} from "../../components/Piano/Piano";
import {useAppSelector} from "../../hooks/useAppSelector";

export const PianoPage: React.FC = () => {
    const isKeysHide = useAppSelector((state) => state.keyboard.isKeysHide);
    const isNotesHide = useAppSelector((state) => state.keyboard.isNotesHide);

    const volume = useAppSelector((state) => state.volume.value);

    return (
        <>
            <Title>Piano</Title>
            <Controller isKeysHide={isKeysHide} isNotesHide={isNotesHide} />
            <Piano
                isKeysHide={isKeysHide}
                isNotesHide={isNotesHide}
                volume={volume}
            />
        </>
    );
};
