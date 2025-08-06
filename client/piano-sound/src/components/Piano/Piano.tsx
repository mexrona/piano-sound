import _ from "lodash";
import {Component} from "react";
import * as SC from "./styles";
import {NOTES, VALID_KEYS, KEY_TO_NOTE} from "../../assets/consts";
import {type IPianoProps, type IPianoState} from "../../types/piano";
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
            const noteAudio = new Audio(
                (document.getElementById(note) as HTMLAudioElement).src
            );
            noteAudio.volume = this.props.volume;
            noteAudio.play();
        }
    };

    handleKeyDown = (event: KeyboardEvent): void => {
        if (event.repeat || this.props.modalIsShow) {
            return;
        }
        const key: string = event.key;
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

        const index: number = this.state.pressedKeys.indexOf(event.key);

        if (index > -1) {
            this.setState((state) => ({
                pressedKeys: state.pressedKeys.filter((_, i) => i !== index),
            }));
        }

        const key: string = event.key;

        if (this.props.isRecording && KEY_TO_NOTE[key]) {
            this.props.recording(key);
        }
    };

    componentDidMount(): void {
        window.addEventListener("keydown", this.handleKeyDown);
        window.addEventListener("keyup", this.handleKeyUp);
    }

    render() {
        const keys = _.map(NOTES, (note, index) => (
            <Key
                key={index}
                text={note[note.length - 1]}
                note={note.slice(0, -1)}
                pressedKeys={this.state.pressedKeys}
                isKeysHide={this.props.isKeysHide}
                isNotesHide={this.props.isNotesHide}
            />
        ));

        const audioFiles = _.map(NOTES, (note, index) => (
            <AudioElement key={index} note={note} />
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
