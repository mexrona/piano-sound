import {Title} from "../../components/Title/Title";
import {Controller} from "../../components/Controller/Controller";
import {Piano} from "../../components/Piano/Piano";
import {useAppSelector} from "../../hooks/useAppSelector";
import {Panel} from "../../components/Panel/Panel";
import {Button} from "../../components/Button/Button";
import {useDispatch} from "react-redux";
import {setIsRecording} from "../../store/reducers/recordReducer";

export const PianoPage: React.FC = () => {
    const isKeysHide = useAppSelector((state) => state.keyboard.isKeysHide);
    const isNotesHide = useAppSelector((state) => state.keyboard.isNotesHide);
    const volume = useAppSelector((state) => state.volume.value);
    const isRecording = useAppSelector((state) => state.record.isRecording);

    const dispatch = useDispatch();

    const stopRecording = () => {
        dispatch(setIsRecording(false));
    };

    return (
        <>
            <Title>Piano</Title>
            <Controller isKeysHide={isKeysHide} isNotesHide={isNotesHide} />
            {isRecording && (
                <div>
                    <Panel id="Notes" />
                    <div className="wrapper">
                        <Button onClick={stopRecording} $color="#9bcf58">
                            Save
                        </Button>
                        <Button onClick={stopRecording} $color="#cf5858">
                            Delete
                        </Button>
                    </div>
                </div>
            )}
            <Piano
                isKeysHide={isKeysHide}
                isNotesHide={isNotesHide}
                volume={volume}
            />
        </>
    );
};
