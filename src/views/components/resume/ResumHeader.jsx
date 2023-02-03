import React, { useContext, useRef } from "react";
import RichTextEdit from "./RichTextEdit";
import { Box } from "@mui/material";

import { CvGeneratorContext } from "../../../context/cvGeneratorContext";

const STYLE_CSS = {
  hoverEvent: {
    width: "100%",
    padding: "10px",
    border: "1px solid transparent",
    ":hover": { border: `1px solid ${"green"}` },
  },
  width_100: {
    width: "100%",
  },
  padding_10: {
    padding: "10px",
  },
};

const BlackLine = () => {
  return (
    <Box sx={{ width: "100%", height: "1px", backgroundColor: "black" }}></Box>
  );
};

export default function ResumHeader() {
  const refs = {
    nameRef: useRef(),
    positionRef: useRef(),
    targetRef: useRef(),
  };

  const cvGeneratorProvider = useContext(CvGeneratorContext);
  const { setCvGeneratorState } = cvGeneratorProvider;

  const onFocus = (type) => {
    return (e) => {
      if (refs[type]) setCvGeneratorState(refs[type]);
    };
  };

  return (
    <Box sx={STYLE_CSS.width_100}>
      <Box sx={STYLE_CSS.hoverEvent}>
        <Box sx={STYLE_CSS.padding_10}>
          <RichTextEdit
            ref={refs.nameRef}
            editorProps={{ placeholder: "Họ tên", onFocus: onFocus("nameRef") }}
          />
        </Box>
        <Box sx={STYLE_CSS.padding_10}>
          <RichTextEdit
            ref={refs.positionRef}
            editorProps={{
              placeholder: "Vị trí ứng tuyển",
              onFocus: onFocus("positionRef"),
            }}
          />
        </Box>
      </Box>
      <BlackLine />
      <Box sx={STYLE_CSS.hoverEvent}>
        <Box sx={STYLE_CSS.padding_10}>
          <RichTextEdit
            ref={refs.targetRef}
            editorProps={{
              placeholder: "Mục tiêu nghề nghiệp",
              onFocus: onFocus("targetRef"),
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
