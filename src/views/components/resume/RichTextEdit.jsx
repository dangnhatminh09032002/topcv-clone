import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
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
      styleMap: {},
    };

    this.onChange = this.onChange.bind(this);
    this.setStyleMap = this.setStyleMap.bind(this);
    this.changeEditorState = this.changeEditorState.bind(this);
    this.changeStyleMap = this.changeStyleMap.bind(this);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  onChange(editorState) {
    this.setState({ editorState });
  }
  setStyleMap(styleMap) {
    this.setState({ styleMap });
  }

  changeEditorState(
    callback = (state = this.state, setEditorState = this.onChange) => {}
  ) {
    callback(this.state, this.onChange);
  }

  changeStyleMap(
    callback = (state = this.state, setStyleMap = this.setStyleMap) => {}
  ) {
    callback(this.state, this.setStyleMap);
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      this.onChange(newState);
      return "handled";
    }

    return "not-handled";
  }

  render() {
    return (
      <Box sx={STYLE_CSS.hoverEvent}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          handleKeyCommand={this.handleKeyCommand}
          customStyleMap={this.state.styleMap}
          {...this.props?.editorProps}
        />
      </Box>
    );
  }
}
