import {Title} from "../../components/Title/Title";
import {Controller} from "../../components/Controller/Controller";
import {Piano} from "../../components/Piano/Piano";

export const PianoPage: React.FC = () => (
    <>
        <Title>Piano</Title>
        <Controller />
        <Piano />
    </>
);
