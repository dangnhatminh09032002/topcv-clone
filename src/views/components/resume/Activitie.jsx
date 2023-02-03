import React, { Component, useContext, useRef } from "react";
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

export default function Activitie() {
  const refs = {
    ref_1: useRef(),
    ref_2: useRef(),
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
        ref={refs.ref_1}
        editorProps={{
          placeholder: "Các Hoạt Động",
          onFocus: onFocus("ref_1"),
        }}
      />
      <GreenLine />
      <Box>
        <List sx={STYLE_CSS.hoverEvent}>
          <RichTextEdit
            ref={refs.ref_2}
            editorProps={{
              placeholder: "Mô tả hoạt động",
              onFocus: onFocus("ref_2"),
            }}
          />
        </List>
      </Box>
    </Box>
  );
}
