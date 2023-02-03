import React, { useContext, useState } from "react";

import { RichUtils } from "draft-js";
import jsPDF from "jspdf";

import {
  Box,
  IconButton,
  Button,
  Popover,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import ColorPicker from "material-ui-color-picker";
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";

import { CvGeneratorContext } from "../../context/cvGeneratorContext";

const CircleBox = (props) => {
  return (
    <Box
      sx={{
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        border: "1px solid #c5c5c5",
        m: "6px",
        backgroundColor: props.color || "#000",
      }}
      {...props}
    />
  );
};

export default function BlockEditToolbar({ element = null }) {
  const [colorPopover, setColorPopover] = useState({
    color: "#000",
  });
  const [fontSizePopover, setFontSizePopover] = useState(null);

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

  const _changeColor = (newColor) => {
    if (!cvGeneratorState) return;
    if (newColor) {
      setColorPopover({ ...colorPopover, color: newColor });
      return;
    }

    // add new style
    cvGeneratorState.current.changeStyleMap((state, setStyleMap) => {
      const newStyleMap = { ...state.styleMap };
      newStyleMap[colorPopover.color] = colorPopover;
      setStyleMap(newStyleMap);
    });

    cvGeneratorState.current.changeEditorState((state, setEditorState) => {
      setEditorState(
        RichUtils.toggleInlineStyle(state.editorState, colorPopover.color)
      );
    });
  };

  const _changeInlineStyle = (inlineStyle) => {
    if (INLINE_STYLES[inlineStyle] && cvGeneratorState) {
      cvGeneratorState.current.changeEditorState((state, setEditorState) => {
        setEditorState(
          RichUtils.toggleInlineStyle(
            state.editorState,
            INLINE_STYLES[inlineStyle].style
          )
        );
      });
    }
  };

  const _changeFontSize = (size) => {
    if (!cvGeneratorState) return;

    const fontSize = `font-size_${size}`;

    // add new style
    cvGeneratorState.current.changeStyleMap((state, setStyleMap) => {
      const newStyleMap = { ...state.styleMap };
      newStyleMap[fontSize] = { fontSize: size };
      setStyleMap(newStyleMap);
    });

    // change style
    cvGeneratorState.current.changeEditorState((state, setEditorState) => {
      const { editorState } = state;
      setEditorState(RichUtils.toggleInlineStyle(editorState, fontSize));
    });
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      p={"5px"}
      mb={"5px"}
      backgroundColor={"white"}
    >
      <Box sx={{ mx: 1 }}>
        {Object.values(INLINE_STYLES).map((value, indx) => (
          <IconButton
            key={indx}
            onClick={() => _changeInlineStyle(value.style)}
          >
            {value.icon}
          </IconButton>
        ))}
      </Box>
      <Box sx={{ mx: 1 }}>
        <CircleBox
          onClick={() => {
            const colorPicker = document.getElementById("color-picker");
            colorPicker.click();
          }}
          color={colorPopover.color}
        />
        <ColorPicker
          id="color-picker"
          name="color"
          onChange={_changeColor}
          style={{ display: "none" }}
        />
      </Box>
      <Box sx={{ mx: 1 }}>
        <Button
          variant="contained"
          onClick={(e) => setFontSizePopover(e.currentTarget)}
        >
          Font Size
        </Button>
        <Popover
          open={Boolean(fontSizePopover)}
          anchorEl={fontSizePopover}
          onClose={() => setFontSizePopover(null)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <List>
            <ListItem disablePadding>
              {FONT_SIZE.map((size, indx) => (
                <ListItemButton
                  key={indx}
                  onClick={() => _changeFontSize(size)}
                >
                  {size}
                </ListItemButton>
              ))}
            </ListItem>
          </List>
        </Popover>
      </Box>
      <Box sx={{ mx: 1 }}>
        <Button variant="contained" onClick={generatePDF}>
          Convert PDF
        </Button>
      </Box>
    </Box>
  );
}

const FONT_SIZE = ["12px", "14px", "16px", "18px", "24px", "32px"];

const INLINE_STYLES = {
  BOLD: { style: "BOLD", icon: <FormatBold /> },
  ITALIC: { style: "ITALIC", icon: <FormatItalic /> },
  UNDERLINE: { style: "UNDERLINE", icon: <FormatUnderlined /> },
};
