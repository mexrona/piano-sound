export interface IPianoProps {
    isKeysHide: boolean;
    isNotesHide: boolean;
    volume: number;
    isRecording?: boolean;
    recording?: any;
    modalIsShow?: boolean;
}

export interface IPianoState {
    pressedKeys: string[];
    recording: string;
}
