import React, { useContext } from "react";

import { RichUtils, Modifier, EditorState } from "draft-js";
import jsPDF from "jspdf";

import { Box, IconButton, Button } from "@mui/material";

import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";

import { CvGeneratorContext } from "../../context/cvGeneratorContext";

const FONT_SIZE = {
  FONT_SIZE_10: { label: "10px", style: "FONT_SIZE_10" },
  FONT_SIZE_12: { label: "12px", style: "FONT_SIZE_12" },
  FONT_SIZE_14: { label: "14px", style: "FONT_SIZE_14" },
  FONT_SIZE_16: { label: "16px", style: "FONT_SIZE_16" },
  FONT_SIZE_18: { label: "18px", style: "FONT_SIZE_18" },
  FONT_SIZE_20: { label: "20px", style: "FONT_SIZE_20" },
};

const INLINE_STYLES = {
  BOLD: { style: "BOLD", icon: <FormatBold /> },
  ITALIC: { style: "ITALIC", icon: <FormatItalic /> },
  UNDERLINE: { style: "UNDERLINE", icon: <FormatUnderlined /> },
};

const STYLE_MAP = {
  // font size
  FONT_SIZE_10: { fontSize: "10px" },
  FONT_SIZE_12: { fontSize: "12px" },
  FONT_SIZE_16: { fontSize: "16px" },
  FONT_SIZE_18: { fontSize: "18px" },
  FONT_SIZE_20: { fontSize: "20px" },
  FONT_SIZE_22: { fontSize: "22px" },
  FONT_SIZE_24: { fontSize: "24px" },
  FONT_SIZE_26: { fontSize: "26px" },
  FONT_SIZE_28: { fontSize: "28px" },
  FONT_SIZE_30: { fontSize: "30px" },
};

export default function BlockEditToolbar({ element = null }) {
  const cvGeneratorProvider = useContext(CvGeneratorContext);
  const { cvGeneratorState } = cvGeneratorProvider;

  const generatePDF = (e) => {
    const doc = new jsPDF("portrait", "pt", "a4");
    doc.setFont("san-serif", "normal");
    doc.html(document.querySelector("#cv-template"), {
      callback: (pdf) => {
        pdf.save("mypdf.pdf");
      },
    });
  };

  const _changFontSize = (inlineStyle) => {
    if (FONT_SIZE[inlineStyle]) {
      element?.current._changeStatePublic((editorState) => {
        const selection = editorState.getSelection();

        // Let's just allow one color at a time. Turn off all active colors.
        const nextContentState = Object.keys(STYLE_MAP).reduce(
          (contentState, font) => {
            return Modifier.removeInlineStyle(contentState, selection, font);
          },
          editorState.getCurrentContent()
        );

        let nextEditorState = EditorState.push(
          editorState,
          nextContentState,
          "change-inline-style"
        );

        const currentStyle = editorState.getCurrentInlineStyle();

        if (selection.isCollapsed()) {
          nextEditorState = currentStyle.reduce((state, color) => {
            return RichUtils.toggleInlineStyle(state, color);
          }, nextEditorState);
        }

        if (!currentStyle.has(FONT_SIZE[inlineStyle])) {
          nextEditorState = RichUtils.toggleInlineStyle(
            nextEditorState,
            FONT_SIZE[inlineStyle]
          );
        }

        return nextEditorState;
      });
    }
  };

  const _changeInlineStyle = (inlineStyle) => {
    if (INLINE_STYLES[inlineStyle] && cvGeneratorState) {
      cvGeneratorState.current.changeState((state, onChange) => {
        onChange(
          RichUtils.toggleInlineStyle(
            state.editorState,
            INLINE_STYLES[inlineStyle].style
          )
        );
      });
    }
  };

  return (
    <Box>
      <Box>
        {Object.values(INLINE_STYLES).map((value, indx) => (
          <IconButton
            key={indx}
            onClick={() => _changeInlineStyle(value.style)}
          >
            {value.icon}
          </IconButton>
        ))}
        <Button onClick={generatePDF}>Convert PDF</Button>
      </Box>
    </Box>
  );
}
