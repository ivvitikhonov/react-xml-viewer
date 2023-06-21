import * as React from "react";

import {
    IAttribute,
    IElement,
    ITheme
} from "../models";
import { Attributes } from "./Attributes";
import { CollapseIndicator } from "./CollapseIndicator";
import { Nodes } from "./Nodes";

export interface IProps {
    name: string;
    elements: IElement[];
    attributes: IAttribute[];
    collapsible: boolean;
    indentation: string;
    indentSize: number;
    theme: ITheme;
}

export const any = <T,>(array?: T[]): boolean  => !!array && array.length > 0;

export const getIndentationString = (size: number)  => new Array(size + 1).join(" ");

export const isTextElement = (elements: IElement[]) => elements.length === 1 && elements[0].type === "text";

export const XmlNode = ({ name, elements, attributes, theme, indentation, indentSize, collapsible }: IProps) => {
    const [collapsed, setCollapsed] = React.useState(false);
    const cursor = (collapsible && any(elements)) ? "pointer" : "text";

    const handleCollapseClick = React.useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        if (!collapsible || !any(elements)) {
            return;
        }

        event.stopPropagation();
        setCollapsed(!collapsed);
    }, [collapsible, elements, collapsed]);

    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div
            style={{ whiteSpace: "pre", cursor }}
            onClick={handleCollapseClick}
        >
            <span style={{ color: theme.separatorColor }}>
                {`${indentation}`}
                {
                    any(elements) && <CollapseIndicator
                        collapsed={collapsed}
                        theme={theme}
                    />
                }
                <span>{"<"}</span>
            </span>
            <span style={{ color: theme.tagColor }}>
                {name}
            </span>
            {
                !collapsed && <Attributes attributes={attributes} theme={theme}/>
            }
            <span style={{ color: theme.separatorColor }}>
                {(any(elements) ? ">" : " />")}
            </span>
            {
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                any(elements) && !collapsed && <span onClick={(e) => e.stopPropagation()}>
                    <Nodes
                        elements={elements}
                        collapsible={collapsible}
                        indentSize={indentSize}
                        indentation={indentation + getIndentationString(indentSize)}
                        theme={theme}
                    />
                </span>
            }
            {
                any(elements) && <span style={{ color: theme.separatorColor }}>
                    {`${(isTextElement(elements) || collapsed) ? "" : indentation}</`}
                </span>
            }
            {
                any(elements) && <span style={{ color: theme.tagColor }}>{name}</span>
            }
            {
                any(elements) && <span style={{ color: theme.separatorColor }}>{">"}</span>
            }
        </div>
    );
};
