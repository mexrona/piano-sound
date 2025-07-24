import _ from "lodash";
import {Component, type JSX} from "react";
import {NOTE_TO_KEY} from "../../assets/consts";
import {type IKeyProps} from "../../types/key";
import * as SC from "./styles";

class Key extends Component<IKeyProps> {
    noteIsFlat = (note: string): boolean => {
        return note.length > 1;
    };

    keyIsPressed = (note: string, pressedKeys: string[]): boolean => {
        return _.includes(pressedKeys, NOTE_TO_KEY[note]);
    };

    render() {
        let keyClassName: string = "key";
        const noteIsFlat: boolean = this.noteIsFlat(this.props.note);
        const keyIsPressed: boolean = this.keyIsPressed(
            this.props.note,
            this.props.pressedKeys
        );

        if (noteIsFlat) {
            keyClassName += " flat";
        }

        if (keyIsPressed) {
            keyClassName += " pressed";
        }

        let key: JSX.Element;

        if (noteIsFlat) {
            key = <div className={keyClassName}></div>;
        } else {
            key = (
                <div className={keyClassName}>
                    <SC.KeyText>{this.props.note.toUpperCase()}</SC.KeyText>
                </div>
            );
        }

        return key;
    }
}

export {Key};
