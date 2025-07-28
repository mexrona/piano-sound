import {useState} from "react";
import settings from "../../../public/icons/settings.svg";
import * as SC from "./styles";

export const Settings: React.FC = () => {
    const [showSettings, setShowSettings] = useState(false);

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
                            <SC.Input type="checkbox" />
                        </SC.SettingsItem>
                        <SC.SettingsItem>
                            Notes
                            <SC.Input type="checkbox" />
                        </SC.SettingsItem>
                    </SC.SettingsItems>
                    <SC.SettingsItem>
                        Sound
                        <SC.Input type="range" />
                    </SC.SettingsItem>
                </SC.Settings>
            )}
        </SC.SettingsWrapper>
    );
};
