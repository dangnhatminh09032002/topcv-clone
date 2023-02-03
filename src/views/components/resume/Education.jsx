import React, { useContext, useRef } from "react";
import RichTextEdit from "./RichTextEdit";
import { Box } from "@mui/material";
import List from "@mui/material/List";
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

export default function Education() {
  const refs = {
    educationRef: useRef(),
    schoolRef: useRef(),
    courseRef: useRef(),
    startRef: useRef(),
    endRef: useRef(),
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
        ref={refs.educationRef}
        editorProps={{
          placeholder: "Học vấn",
          onFocus: onFocus("educationRef"),
        }}
      />
      <GreenLine />
      <Box>
        <List sx={STYLE_CSS.hoverEvent}>
          <RichTextEdit
            ref={refs.schoolRef}
            editorProps={{
              placeholder: "Tên trường học",
              onFocus: onFocus("schoolRef"),
            }}
          />
          <RichTextEdit
            ref={refs.courseRef}
            editorProps={{
              placeholder: "Ngành học/Môn học",
              onFocus: onFocus("courseRef"),
            }}
          />
          <Box display={"flex"} justifyContent={"start"}>
            <Box minWidth={60}>
              <RichTextEdit
                ref={refs.startRef}
                editorProps={{
                  placeholder: "Bắt đầu",
                  onFocus: onFocus("startRef"),
                }}
              />
            </Box>
            {"-"}
            <Box minWidth={60}>
              <RichTextEdit
                ref={refs.endRef}
                editorProps={{
                  placeholder: "Kết thúc",
                  onFocus: onFocus("endRef"),
                }}
              />
            </Box>
          </Box>
          <RichTextEdit
            ref={refs.introRef}
            editorProps={{
              placeholder: "Mô tả quá trình học tập",
              onFocus: onFocus("introRef"),
            }}
          />
        </List>
      </Box>
    </Box>
  );
}
