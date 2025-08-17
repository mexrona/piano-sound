import {Component} from "react";
import {type IPianoProps, type IPianoState} from "../../types/piano";
import _ from "lodash";
import {NOTES, VALID_KEYS, KEY_TO_NOTE} from "../../assets/consts";
import * as SC from "./styles";
import {Key} from "../Key/Key";
import {AudioElement} from "../AudioElement/AudioElement";

class Piano extends Component<IPianoProps, IPianoState> {
    constructor(props: IPianoProps) {
        super(props);
        this.state = {
            pressedKeys: [],
            recording: "",
        };
    }

    playNote = (note: string): void => {
        if (!_.isEmpty(note)) {
            const audioElement = document.getElementById(
                note
            ) as HTMLMediaElement;

            audioElement.volume = this.props.volume;

            audioElement.play();
        }
    };

    handleKeyDown = (event: KeyboardEvent): void => {
        if (event.repeat || this.props.modalIsShow) {
            return;
        }
        const key: string = event.code.slice(-1).toLowerCase();
        const updatedPressedKeys: string[] = [...this.state.pressedKeys];
        if (!updatedPressedKeys.includes(key) && VALID_KEYS.includes(key)) {
            updatedPressedKeys.push(key);
        }
        this.setState({
            pressedKeys: updatedPressedKeys,
        });

        this.playNote(KEY_TO_NOTE[key]);
    };

    handleKeyUp = (event: KeyboardEvent): void => {
        if (this.props.modalIsShow) return;

        const index: number = this.state.pressedKeys.indexOf(
            event.code.slice(-1).toLowerCase()
        );

        if (index > -1) {
            this.setState((state) => ({
                pressedKeys: state.pressedKeys.filter((_, i) => i !== index),
            }));
        }

        const key: string = event.code.slice(-1).toLowerCase();

        if (this.props.isRecording && KEY_TO_NOTE[key]) {
            this.props.recording(key);
        }
    };

    handleClick = (e: MouseEvent) => {
        const key = e.target as HTMLElement;
        const id = key.getAttribute("data-note");

        if (id) {
            const sound = document.getElementById(id) as HTMLMediaElement;

            sound.volume = this.props.volume;
            sound.play();
        }
    };

    componentDidMount(): void {
        window.addEventListener("keydown", this.handleKeyDown);
        window.addEventListener("keyup", this.handleKeyUp);
        window.addEventListener("click", this.handleClick);
    }

    componentWillUnmount(): void {
        window.removeEventListener("keydown", this.handleKeyDown);
        window.removeEventListener("keyup", this.handleKeyUp);
        window.removeEventListener("click", this.handleClick);
    }

    render() {
        const keys = _.map(NOTES, (info, index) => (
            <Key
                key={index}
                index={index}
                text={info.code}
                note={info.note}
                pressedKeys={this.state.pressedKeys}
                isKeysHide={this.props.isKeysHide}
                isNotesHide={this.props.isNotesHide}
            />
        ));

        const audioFiles = _.map(NOTES, (info, index) => (
            <AudioElement key={index} note={info.note} code={info.code} />
        ));

        return (
            <SC.PianoWrapper>
                <SC.Piano>{keys}</SC.Piano>
                <div>{audioFiles}</div>
            </SC.PianoWrapper>
        );
    }
}

export {Piano};
