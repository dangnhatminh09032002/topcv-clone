import React, { useState, useRef } from "react";
import { Box, Button } from "@mui/material";
import { Grid } from "@mui/material";

import AvatarEdit from "../components/resume/Avatar";
import BlockEditToolbar from "../components/BlockEditToolbar";
import ResumHeader from "../components/resume/ResumHeader";
import PersonalInformation from "../components/resume/PersonalInformation";
import Education from "../components/resume/Education";
import Skill from "../components/resume/Skill";
import Experience from "../components/resume/Experience";
import Project from "../components/resume/Project";
import Certificate from "../components/resume/Certificate";
import Activitie from "../components/resume/Activitie";

export default function CVGenerator() {
  const [refElement, setRefElement] = useState(null);

  return (
    <React.Fragment>
      <Box
        sx={{
          paddingTop: "168px",
          paddingBottom: "20px",
          backgroundColor: "#f1f2f6",
        }}
      >
        <BlockEditToolbar element={refElement} />
        <Box id="cv-template" sx={STYLE_CSS.CVTemplate}>
          <Grid container>
            <Grid item md={4} border={STYLE_CSS.borderDef}>
              <Box sx={STYLE_CSS.padding_10}>
                <Box sx={{ ...STYLE_CSS.flexBox, ...STYLE_CSS.hoverEvent }}>
                  <AvatarEdit />
                </Box>
              </Box>
            </Grid>
            <Grid item md={8} border={STYLE_CSS.borderDef}>
              <Box sx={STYLE_CSS.padding_10}>
                <ResumHeader />
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item md={4} border={STYLE_CSS.borderDef}>
              <Box sx={STYLE_CSS.padding_10}>
                <PersonalInformation />
              </Box>
            </Grid>
            <Grid item md={4} border={STYLE_CSS.borderDef}>
              <Box sx={STYLE_CSS.padding_10}>
                <Education />
              </Box>
            </Grid>
            <Grid item md={4} border={STYLE_CSS.borderDef}>
              <Box sx={STYLE_CSS.padding_10}>
                <Skill />
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item md={12} border={STYLE_CSS.borderDef}>
              <Box sx={STYLE_CSS.padding_10}>
                <Experience />
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item md={12} border={STYLE_CSS.borderDef}>
              <Box sx={STYLE_CSS.padding_10}>
                <Project />
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item md={6} border={STYLE_CSS.borderDef}>
              <Box sx={STYLE_CSS.padding_10}>
                <Certificate />
              </Box>
            </Grid>
            <Grid item md={6} border={STYLE_CSS.borderDef}>
              <Box sx={STYLE_CSS.padding_10}>
                <Activitie />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
}

const STYLE_CSS = {
  padding_10: {
    width: "100%",
    padding: "10px",
  },
  hoverEvent: {
    border: "1px solid #c5c5c5",
    ":hover": { border: `1px solid ${"green"}` },
  },
  flexBox: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  borderDef: "1px solid #c5c5c5",
  CVTemplate: {
    width: 595,
    minHeight: 841,
    margin: "auto",
    backgroundColor: "white",
  },
};
