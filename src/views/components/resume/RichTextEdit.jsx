import React from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

import { Box } from "@mui/material";

const STYLE_CSS = {
  hoverEvent: {
    width: "100%",
    overflow: "hidden",
    border: "1px dashed transparent",
    ":hover": { border: `1px dashed ${"black"}` },
  },
};

export default class RichTextEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
    this.onChange = (editorState) => this.setState({ editorState });
  }

  changeState(callback = (state = this.state, onChange = this.onChange) => {}) {
    callback(this.state, this.onChange);
  }

  render() {
    return (
      <Box sx={STYLE_CSS.hoverEvent}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          {...this.props?.editorProps}
        />
      </Box>
    );
  }
}
