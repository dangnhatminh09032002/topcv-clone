import React, { useContext, useRef } from "react";
import RichTextEdit from "./RichTextEdit";
import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import EmailIcon from "@mui/icons-material/Email";
// import PhoneIcon from "@mui/icons-material/Phone";
// import LanguageIcon from "@mui/icons-material/Language";
// import LocationOnIcon from "@mui/icons-material/LocationOn";

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

export default function PersonalInformation() {
  const refs = {
    infoRef: useRef(),
    emailRef: useRef(),
    phoneRef: useRef(),
    faceRef: useRef(),
    locationRef: useRef(),
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
        ref={refs.infoRef}
        editorProps={{
          placeholder: "Thông tin cá nhân",
          onFocus: onFocus("infoRef"),
        }}
      />
      <GreenLine />
      <Box>
        <List sx={STYLE_CSS.hoverEvent}>
          <ListItem disablePadding sx={STYLE_CSS.hoverEvent}>
            {/* <EmailIcon color="success" sx={{ fontSize: 20 }} /> */}
            <RichTextEdit
              ref={refs.emailRef}
              editorProps={{
                placeholder: "Email",
                onFocus: onFocus("emailRef"),
              }}
            />
          </ListItem>
          <ListItem disablePadding sx={STYLE_CSS.hoverEvent}>
            {/* <PhoneIcon color="success" sx={{ fontSize: 20 }} /> */}
            <RichTextEdit
              ref={refs.phoneRef}
              editorProps={{
                placeholder: "Số điện thoại",
                onFocus: onFocus("phoneRef"),
              }}
            />
          </ListItem>
          <ListItem disablePadding sx={STYLE_CSS.hoverEvent}>
            {/* <LanguageIcon color="success" sx={{ fontSize: 20 }} /> */}
            <RichTextEdit
              ref={refs.faceRef}
              editorProps={{
                placeholder: "Facebook",
                onFocus: onFocus("faceRef"),
              }}
            />
          </ListItem>
          <ListItem disablePadding sx={STYLE_CSS.hoverEvent}>
            {/* <LocationOnIcon color="success" sx={{ fontSize: 20 }} /> */}{" "}
            <RichTextEdit
              ref={refs.locationRef}
              editorProps={{
                placeholder: "Địa chỉ",
                onFocus: onFocus("locationRef"),
              }}
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
