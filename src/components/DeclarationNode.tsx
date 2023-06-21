import * as React from "react";

import {
    IAttribute,
    ITheme
} from "../models";
import { Attributes } from "./Attributes";

export interface IProps {
    attributes: IAttribute[];
    indentation: string;
    theme: ITheme;
}

export const DeclarationNode = ({ attributes, indentation, theme }: IProps) => {
    return <>
        <span style={{ color: theme.separatorColor }}>
            {`${indentation}<?`}
        </span>
        <span style={{ color: theme.tagColor }}>
            {"xml"}
        </span>
        <Attributes attributes={attributes} theme={theme}/>
        <span style={{ color: theme.separatorColor }}>
            {"?>"}
        </span>
    </>;
};
