# @ivvitikhonov/react-xml-viewer

[![NPM](https://img.shields.io/npm/v/@ivvitikhonov/react-xml-viewer.svg)](https://www.npmjs.com/package/@ivvitikhonov/react-xml-viewer)

![xml-react-viewer](https://github.com/ivvitikhonov/react-xml-viewer/assets/10895409/08137b8e-b98d-4c41-a69f-f5e0695cf140)

## Install

```bash
npm install --save @ivvitikhonov/react-xml-viewer
```

## Usage

```tsx
import * as React from "react";

import { XmlViewer } from "@ivvitikhonov/react-xml-viewer";

const xml = "<hello>World</hello>";

export const App = () => <XmlViewer xml={xml} />;
```

## Props

| Name | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| **xml** | string | | **Yes** | The XML to display. XML should have `UTF-8` character encoding, other encodings are not supported |
| **collapsible** | boolean | `true` | No | Whether the tree start as collapsed or not |
| **indentSize** | number | `4` | No | The number of spaces to indent each level |
| **theme** | object | `undefined` | No | The theme to use. When `undefined`, it uses the standard theme |

### Theme

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| attributeKeyColor | `string` | `"#2a7ab0"` | Set the attribute key color (`<tag attribute-key="hello" />`) |
| attributeValueColor | `string` | `"#008000"` | Set the attribute value color (` <tag attr="Attribute value">`) |
| cdataColor | `string` | `"#1d781d"` | Set the cdata element color (`<![CDATA[some stuff]]>`) |
| collapseIndicatorColor | `string` | `"#ae2c4c"` | Set the collapse indicator color (`+/-`)
| commentColor | `string` | `"#aaa"` | Set the comment color (`<!-- this is a comment -->`)
| separatorColor | `string` | `"#333"` | Set the separators colors (`<, >, </, />, =, <?, ?>`)
| tagColor | `string` | `"#d43900"` | Set the tag name color (`<tag-name />`) |
| textColor | `string` | `"#333"` | Set the text color (`<tag>Text</tag>`) |
| overflowBreak | `boolean` | `false` | Adjust the xml to fit in the parent width without overflowing |

## Acknowledgement

This XML Viewer is based on `react-xml-viewer`, see the original [here](https://github.com/alissonmbr/react-xml-viewer).

## License

MIT © [ivvitikhonov](https://github.com/ivvitikhonov)
