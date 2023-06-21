import * as React from "react";

import { ITheme } from "../models";

export interface IProps {
    comment: string | undefined;
    indentation: string;
    theme: ITheme;
}

export const CommentNode = ({ comment, theme, indentation }: IProps) => {
    return <div style={{ color: theme.commentColor }}>
        {`${indentation}<!-- ${comment} -->`}
    </div>;
};
