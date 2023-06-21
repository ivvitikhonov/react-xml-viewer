import * as React from "react";

import { ITheme } from "../models";

export interface IProps {
    text: string;
    theme: ITheme;
}

export const TextNode = ({ text, theme }: IProps) => {
    return <>
        {
            theme.overflowBreak
                ? <span
                    style={{ color: theme.textColor, cursor: "auto", ...{ overflowWrap: "break-word", whiteSpace: "normal" } }}>
                    {text}
                </span>
                : <span style={{ color: theme.textColor, cursor: "auto" }}>
                    {text}
                </span>
        }
    </>;
};
