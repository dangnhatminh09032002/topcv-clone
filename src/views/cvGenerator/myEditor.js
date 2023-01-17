import React from "react";
import { Editor, EditorState, RichUtils, Immutable } from "draft-js";
import { Box } from "@mui/system";
import "draft-js/dist/Draft.css";

class MyCustomBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="MyCustomBlock">
        {/* here, this.props.children contains a <section> container, as that was the matching element */}
        {this.props.children}
      </div>
    );
  }
}

const blockRenderMap = Immutable.Map({
  MyCustomBlock: {
    // element is used during paste or html conversion to auto match your component;
    // it is also retained as part of this.props.children and not stripped out
    element: "section",
    wrapper: <MyCustomBlock />,
  },
});

function myBlockRenderer(contentBlock) {
  const type = contentBlock.getType();
  if (type === "atomic") {
    return {
      component: <h1>Hello</h1>,
      editable: false,
      props: {
        foo: "bar",
      },
    };
  }
}

function MyEditor() {
  const [infoState, setInfoState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const [targetState, setTargetState] = React.useState(() =>
    EditorState.createEmpty()
  );

  function _onBoldClick() {
    setInfoState(RichUtils.toggleInlineStyle(infoState, "BOLD"));
    setTargetState(RichUtils.toggleInlineStyle(targetState, "BOLD"));
  }
  function _onItalicClick() {
    setInfoState(RichUtils.toggleInlineStyle(infoState, "BOLD"));
    setTargetState(RichUtils.toggleInlineStyle(targetState, "BOLD"));
  }

  return (
    <Box>
      <button onClick={_onBoldClick}>Bold</button>
      <button onClick={_onItalicClick}>Italic</button>
      <Box
        sx={{
          width: "100%",
          height: "min-content",
          padding: "10px 10px 10px 20px",
          border: "1px solid transparent",
        }}
      >
        <Editor
          editorState={infoState}
          onChange={setInfoState}
          placeholder="Họ và tên"
          blockRendererFn={myBlockRenderer}
          blockRenderMap={blockRenderMap}
        />
        {/* <Editor
          editorState={targetState}
          onChange={setTargetState}
          placeholder="Mục tiêu nghề nghiệp"
        /> */}
      </Box>
    </Box>
  );
}

export default MyEditor;
