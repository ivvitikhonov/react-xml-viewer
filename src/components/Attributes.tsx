import * as React from "react";

import {
    IAttribute,
    ITheme
} from "../models";

export interface IProps {
    attributes: IAttribute[];
    theme: ITheme;
}

export const Attributes = ({ attributes, theme }: IProps) => {
    const attributeList = [];

    for (const key in attributes) {
        attributeList.push(
            <span key={`attr-${key}[${attributes[key]}]`}>
                <span style={{ color: theme.attributeKeyColor }}>
                    {` ${key}`}
                </span>
                <span style={{ color: theme.separatorColor }}>
                    {"="}
                </span>
                <span style={{ color: theme.attributeValueColor }}>
                    {`"${attributes[key]}"`}
                </span>
            </span>
        );
    }

    return <>
        {
            theme.overflowBreak
                ? <span style={{ ...{ overflowWrap: "break-word", whiteSpace: "normal" } }}>
                    {attributeList}
                </span>
                : <span>{attributeList}</span>
        }
    </>;
};
