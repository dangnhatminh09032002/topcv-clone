import React, { useState } from "react";
import { Box, Button, Dialog } from "@mui/material";
import Avatar from "react-avatar-edit";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

export default function AvatarEdit() {
  const [preview, setPreview] = useState(null);
  const [open, setOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => setIsHovering(true);
  const handleMouseOut = () => setIsHovering(false);

  const onClose = () => setPreview(null);
  const onCrop = (preview) => setPreview(preview);

  const showDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);
  const isShowUploadButton = () => (!preview || isHovering ? true : false);

  return (
    <React.Fragment>
      {/* --- Show Avatar --- */}
      <Box
        sx={{
          width: 200,
          height: 200,
          position: "relative",
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {preview && (
          <img
            style={{}}
            src={preview}
            alt="Preview"
            width={"100%"}
            height={"100%"}
          />
        )}
        {isShowUploadButton() && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: "0",
              width: "100%",
              height: "100%",
            }}
          >
            <Button variant="contained" onClick={showDialog}>
              <PhotoCamera />
            </Button>
          </Box>
        )}
      </Box>
      {/* --- Set Avatar --- */}
      <Dialog onClose={closeDialog} open={open}>
        <Box
          sx={{
            width: 400,
            height: 400,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Avatar
            width={200}
            height={200}
            onCrop={onCrop}
            onClose={onClose}
            cropRadius={0}
            exportAsSquare={true}
            backgroundColor="none"
          />
        </Box>
        <Button variant="contained" onClick={closeDialog}>
          Done
        </Button>
      </Dialog>
    </React.Fragment>
  );
}
