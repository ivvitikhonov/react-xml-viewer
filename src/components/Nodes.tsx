import * as React from "react";

import {
    IElement,
    ITheme
} from "../models";
import { CdataNode } from "./CdataNode";
import { CommentNode } from "./CommentNode";
import { InstructionNode } from "./InstructionNode";
import { TextNode } from "./TextNode";
import { XmlNode } from "./XmlNode";

export interface IProps {
    elements: IElement[];
    collapsible: boolean;
    indentSize: number;
    indentation: string;
    theme: ITheme;
}

const getNode = (theme: ITheme, indentation: string, indentSize: number, collapsible: boolean) => (element: IElement, index: number) => {
    switch (element.type) {
        case "text":
            return <TextNode
                key={index}
                text={element.text ?? ""}
                theme={theme}
            />;
        case "element":
            return <XmlNode
                key={index}
                name={element.name ?? ""}
                elements={element.elements ?? []}
                attributes={element.attributes ?? []}
                indentation={indentation}
                indentSize={indentSize}
                collapsible={collapsible}
                theme={theme}
            />;
        case "comment":
            return <CommentNode
                key={index}
                comment={element.comment ?? ""}
                indentation={indentation}
                theme={theme}
            />;
        case "cdata":
            return <CdataNode
                key={`${index}`}
                cdata={element.cdata ?? ""}
                indentation={indentation}
                theme={theme}
            />;
        case "instruction":
            return <InstructionNode
                key={index}
                instruction={element.instruction ?? ""}
                name={element.name ?? ""}
                indentation={indentation}
                theme={theme}
            />;
        default:
            return null;
    }
};

export const Nodes = ({ elements, theme, indentation, indentSize, collapsible }: IProps) => {
    return <>
        {
            elements.map(getNode(theme, indentation, indentSize, collapsible))
        }
    </>;
};
