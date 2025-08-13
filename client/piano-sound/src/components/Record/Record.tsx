import {useAppSelector} from "../../hooks/useAppSelector";
import {useDispatch} from "react-redux";
import {setIsRecording} from "../../store/reducers/recordReducer";
import {RecordCircle} from "../RecordCircle/RecordCircle";
import record from "../../../public/icons/record.svg";

export const Record: React.FC = () => {
    const isRecording = useAppSelector((state) => state.record.isRecording);
    const dispatch = useDispatch();

    return (
        <div
            className={isRecording ? "icon-wrapper circle" : "icon-wrapper"}
            onClick={() => dispatch(setIsRecording(true))}>
            {isRecording ? (
                <RecordCircle />
            ) : (
                <img
                    className="icon icon--small"
                    src={record}
                    alt="Record"
                    title="Record"
                />
            )}
        </div>
    );
};
