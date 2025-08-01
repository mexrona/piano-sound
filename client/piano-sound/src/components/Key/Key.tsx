import _ from "lodash";
import {Component, type JSX} from "react";
import {NOTE_TO_KEY} from "../../assets/consts";
import {type IKeyProps} from "../../types/key";

class Key extends Component<IKeyProps> {
    noteIsFlat = (note: string): boolean => {
        return note.length > 2;
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
            key = (
                <div className={keyClassName}>
                    <div>
                        {!this.props.isKeysHide && (
                            <div>"{this.props.text}"</div>
                        )}

                        {!this.props.isNotesHide && (
                            <div>
                                {this.props.note
                                    .replace(/b/, "#")
                                    .toUpperCase()}
                            </div>
                        )}
                    </div>
                </div>
            );
        } else {
            key = (
                <div className={keyClassName}>
                    <div>
                        {!this.props.isKeysHide && (
                            <div>"{this.props.text}"</div>
                        )}
                        {!this.props.isNotesHide && (
                            <div>{this.props.note.toUpperCase()}</div>
                        )}
                    </div>
                </div>
            );
        }

        return key;
    }
}

export {Key};
