import * as React from "react";

import { ITheme } from "./models";
import { RootXmlNode } from "./components/RootXmlNode";

interface IProps {
    xml: string;
    collapsible?: boolean;
    indentSize?: number;
    theme?: ITheme;
}

const defaultIndentSize = 4;

const defaultTheme = {
    attributeKeyColor: "#2a7ab0",
    attributeValueColor: "#008000",
    cdataColor: "#1d781d",
    collapseIndicatorColor: "#ae2c4c",
    commentColor: "#aaa",
    overflowBreak: false,
    separatorColor: "#333",
    tagColor: "#d43900",
    textColor: "#333"
};

export const XmlViewer = ({ xml, collapsible, indentSize, theme }: IProps) => {
    const customTheme = { ...defaultTheme, ...theme };

    return <RootXmlNode
        xml={xml}
        collapsible={collapsible ?? true}
        indentSize={indentSize ?? defaultIndentSize}
        indentation={""}
        theme={customTheme}
    />;
};
