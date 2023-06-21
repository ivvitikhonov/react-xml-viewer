import * as React from "react";

import { ITheme } from "../models";

export interface IProps {
    cdata: string;
    indentation: string;
    theme: ITheme;
}

export const CdataNode = ({ cdata, theme, indentation }: IProps) => {
    return <div style={{ color: theme.cdataColor }}>
        {`${indentation}<![CDATA[${cdata}]]>`}
    </div>;
};
