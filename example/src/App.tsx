import * as React from "react";

import { XmlViewer } from "react-xml-viewer";

const xml = "<?xml version=\"1.0\"?><example description=\"XML Example\">" +
  "<hello>World</hello>" +
  "<!-- <comment>example</comment> -->" +
  "<cdata><![CDATA[<foo></bar>]]></cdata>" +
  "<?go example?></example>";

export const App = () => <XmlViewer xml={xml} />;

