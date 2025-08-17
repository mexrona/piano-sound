import {Component, type JSX} from "react";
import {type IKeyProps} from "../../types/key";
import _ from "lodash";
import {NOTE_TO_KEY} from "../../assets/consts";

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
                <div
                    className={keyClassName}
                    role="button"
                    tabIndex={this.props.index}
                    aria-pressed={false}
                    data-note={this.props.note}>
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
                <div
                    className={keyClassName}
                    role="button"
                    tabIndex={this.props.index}
                    aria-pressed={false}
                    data-note={this.props.note}>
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
