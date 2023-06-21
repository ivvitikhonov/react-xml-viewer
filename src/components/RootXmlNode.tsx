import * as React from "react";
import { IAttribute, ITheme } from "../models";

import convert from "xml-js";
import { DeclarationNode } from "./DeclarationNode";
import { Nodes } from "./Nodes";

interface IProps {
    xml: string;
    collapsible: boolean;
    indentSize: number;
    indentation: string;
    theme: ITheme;
}

const invalidXml = (<div>Invalid XML!</div>);

export  const RootXmlNode = ({ xml, collapsible, indentSize, indentation, theme }: IProps) => {
    let structure;
    try {
        structure = convert.xml2js(xml, { compact: false });
        if (!Array.isArray(structure.elements)) {
            return invalidXml;
        }
    } catch (e) {
        return invalidXml;
    }

    return <div>
        {
            !!structure?.declaration?.attributes && <DeclarationNode
                attributes={structure.declaration.attributes as IAttribute[]}
                indentation={indentation ?? ""}
                theme={theme}
            />
        }
        <Nodes
            elements={structure.elements}
            collapsible={collapsible}
            indentSize={indentSize}
            indentation={indentation ?? ""}
            theme={theme}
        />
    </div>;
};
