export interface IPianoProps {
    isKeysHide: boolean;
    isNotesHide: boolean;
    volume: number;
}

export interface IPianoState {
    pressedKeys: string[];
}
