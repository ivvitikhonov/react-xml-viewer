import * as React from "react";

import {
    ITheme
} from "../models";

export interface IProps {
    collapsed: boolean;
    theme: ITheme;
}

export const CollapseIndicator = ({ collapsed, theme }: IProps) => {
    return <span style={{ fontWeight: "bold", color: theme.collapseIndicatorColor }}>
        {collapsed ? "+" : "-"}{"  "}
    </span>;
};
