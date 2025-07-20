import * as SC from "./styled";

interface ITitle {
    children: any;
    text: string;
}

export const Title: React.FC<ITitle> = ({text}) => <SC.Title>{text}</SC.Title>;
