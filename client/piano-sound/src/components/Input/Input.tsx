import {type IInput} from "../../types/input";
import * as SC from "./styles";

export const Input: React.FC<IInput> = ({placeholder, onChange, value}) => (
    <SC.Input
        placeholder={placeholder}
        name={placeholder}
        onChange={onChange}
        value={value}
        autoFocus
    />
);
