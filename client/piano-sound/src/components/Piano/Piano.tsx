import _ from "lodash";
import {Component} from "react";
import * as SC from "./styles";
import {NOTES, VALID_KEYS, KEY_TO_NOTE} from "../../assets/consts";
import {type IPianoState} from "../../types/piano";
import {Key} from "../Key/Key";
import {Title} from "../Title/Title";

class Piano extends Component<{}, IPianoState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            pressedKeys: [],
        };
    }

    playNote = (note: string): void => {
        if (!_.isEmpty(note)) {
            const noteAudio = new Audio(
                (document.getElementById(note) as HTMLAudioElement).src
            );
            noteAudio.play();
        }
    };

    handleKeyDown = (event: KeyboardEvent): void => {
        if (event.repeat) {
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
        const index: number = this.state.pressedKeys.indexOf(event.key);
        if (index > -1) {
            this.setState((state) => ({
                pressedKeys: state.pressedKeys.filter((_, i) => i !== index),
            }));
        }
    };

    componentDidMount(): void {
        window.addEventListener("keydown", this.handleKeyDown);
        window.addEventListener("keyup", this.handleKeyUp);
    }

    render() {
        const keys = _.map(NOTES, (note, index) => (
            <Key key={index} note={note} pressedKeys={this.state.pressedKeys} />
        ));

        const audioFiles = _.map(NOTES, (note, index) => (
            <audio id={note} key={index} src={`../../keys/${note}.mp3`} />
        ));

        return (
            <>
                <Title>Piano</Title>
                <SC.PianoWrapper>
                    <SC.Piano>{keys}</SC.Piano>
                    <div>{audioFiles}</div>
                </SC.PianoWrapper>
            </>
        );
    }
}

export {Piano};
