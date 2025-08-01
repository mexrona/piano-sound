import {useState} from "react";
import settings from "../../../public/icons/settings.svg";
import * as SC from "./styles";
import type {ISettings} from "../../types/settings";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../hooks/useAppSelector";
import {showKeys, showNotes} from "../../store/reducers/keyboardReducer";
import {setVolume} from "../../store/reducers/volumeReducer";

export const Settings: React.FC<ISettings> = ({isKeysHide, isNotesHide}) => {
    const [showSettings, setShowSettings] = useState(false);

    const dispatch = useDispatch();
    const volume = useAppSelector((state) => state.volume.value);

    const onMouseOver = () => {
        setTimeout(() => {
            setShowSettings(true);
        }, 100);
    };

    const onMouseLeave = () => {
        setTimeout(() => {
            setShowSettings(false);
        }, 100);
    };

    const onKeysChange = (state: any) => {
        dispatch(showKeys(state));
    };

    const onNotesChange = (state: any) => {
        dispatch(showNotes(state));
    };

    return (
        <SC.SettingsWrapper
            className="icon-wrapper"
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}>
            <img className="icon icon--small" src={settings} alt="Settings" />
            {showSettings && (
                <SC.Settings>
                    <SC.SettingsItems>
                        <SC.SettingsItem>
                            Keys
                            <SC.Input
                                type="checkbox"
                                onChange={() => onKeysChange(isKeysHide)}
                                checked={!isKeysHide}
                            />
                        </SC.SettingsItem>
                        <SC.SettingsItem>
                            Notes
                            <SC.Input
                                type="checkbox"
                                onChange={() => onNotesChange(isNotesHide)}
                                checked={!isNotesHide}
                            />
                        </SC.SettingsItem>
                    </SC.SettingsItems>
                    <SC.SettingsItem>
                        Sound <SC.Volume>({volume * 100}%)</SC.Volume>
                        <SC.Input
                            type="range"
                            min={0}
                            max={100}
                            step={1}
                            value={volume * 100}
                            onChange={(e) =>
                                dispatch(
                                    setVolume(Number(e.target.value) / 100)
                                )
                            }
                        />
                    </SC.SettingsItem>
                </SC.Settings>
            )}
        </SC.SettingsWrapper>
    );
};
