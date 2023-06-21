import { IAttribute } from "./IAttribute";

export interface IElement {
    type: string;
    text?: string;
    name?: string;
    comment?: string;
    cdata?: string;
    instruction?: string;
    elements?: IElement[];
    attributes?: IAttribute[];
}
