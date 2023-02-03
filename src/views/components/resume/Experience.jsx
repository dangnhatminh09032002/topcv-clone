import React, { useContext, useRef } from "react";
import RichTextEdit from "./RichTextEdit";
import { Box } from "@mui/material";
import { List } from "@mui/material";
import { CvGeneratorContext } from "../../../context/cvGeneratorContext";

const STYLE_CSS = {
  hoverEvent: {
    border: "1px solid transparent",
    ":hover": { border: `1px solid ${"green"}` },
  },
  width_100: {
    width: "100%",
  },
};

const GreenLine = () => {
  return (
    <Box sx={{ width: "100%", height: "2px", backgroundColor: "green" }}></Box>
  );
};

export default function Experience() {
  const refs = {
    experienceRef: useRef(),
    introRef: useRef(),
  };
  const cvGeneratorProvider = useContext(CvGeneratorContext);
  const { setCvGeneratorState } = cvGeneratorProvider;

  const onFocus = (type) => {
    return (e) => {
      if (refs[type]) setCvGeneratorState(refs[type]);
      else setCvGeneratorState(null);
    };
  };
  return (
    <Box>
      <GreenLine />
      <RichTextEdit
        ref={refs.experienceRef}
        editorProps={{
          placeholder: "Kinh Nghiệm Làm Việc",
          onFocus: onFocus("experienceRef"),
        }}
      />
      <GreenLine />
      <Box>
        <List sx={STYLE_CSS.hoverEvent}>
          <RichTextEdit
            ref={refs.introRef}
            editorProps={{
              placeholder: "Mô tả kinh nghiệm",
              onFocus: onFocus("introRef"),
            }}
          />
        </List>
      </Box>
    </Box>
  );
}
