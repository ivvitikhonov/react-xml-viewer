import * as React from "react";

import { ITheme } from "../models";

export interface IProps {
    name: string;
    instruction: string;
    indentation: string;
    theme: ITheme;
}

export const InstructionNode = ({ name, instruction, indentation, theme }: IProps) => {
    return <>
        <span style={{ color: theme.separatorColor }}>
                {`${indentation}<?`}
        </span>
        <span style={{ color: theme.tagColor }}>
                {name}
        </span>
        <span style={{ color: theme.attributeKeyColor }}>
                {` ${instruction}`}
        </span>
        <span style={{ color: theme.separatorColor }}>
                {"?>"}
        </span>
    </>;
};
