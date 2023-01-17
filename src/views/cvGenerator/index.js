import React, { useLayoutEffect, useState } from "react";
import { Box, Button, Avatar, IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import jsPDF from "jspdf";

import MyEditor from "./myEditor";

import "./style.css";

export default function CVGenerator() {
  const [fileImage, setFileImage] = useState(null);

  const generatePDF = (e) => {
    const doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#cv-template"), {
      callback: (pdf) => {
        pdf.save("mypdf.pdf");
      },
    });
  };

  const handleUploadClick = (e) => {
    if (e.target.files && e.target.files.length > 0)
      setFileImage(e.target.files[0]);
  };

  return (
    <React.Fragment>
      <Button onClick={generatePDF}>Convert PDF</Button>
      <Box
        id="cv-template"
        sx={{
          width: 595,
          height: 841,
          margin: "auto",
          border: "2px solid #000000",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "50%",
            height: "100%",
            background: "blue",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: 250,
              padding: "10px",
              borderTop: "2px solid transparent",
              borderBottom: "2px solid transparent",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                border: "2px solid black",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                variant="square"
                src={(fileImage && URL.createObjectURL(fileImage)) || null}
                sx={{
                  width: 200,
                  height: 200,
                }}
              >
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                  <input hidden type="file" onChange={handleUploadClick} />
                  <PhotoCamera />
                </IconButton>
              </Avatar>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: "50%", height: "100%", background: "red" }}>
          <MyEditor />
        </Box>
      </Box>
    </React.Fragment>
  );
}
