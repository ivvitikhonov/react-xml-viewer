import * as React from "react";

import { render } from "@testing-library/react";
import { XmlViewer } from "./index";

const xml = "<?xml version=\"1.0\"?><example description=\"XML Example\">" +
    "<hello>World</hello>" +
    "<!-- <comment>example</comment> -->" +
    "<cdata><![CDATA[<foo></bar>]]></cdata>" +
    "<?go example?></example>";

describe("XmlViewer", () => {
    test("renders the XmlViewer component", () => {
        render(<XmlViewer
            xml={xml}
            collapsible={true}
        />);
    });
});
