/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useLayoutEffect, useContext } from "react";
import { Box, useTheme, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";

import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../dashboard/Header";
import { UserContext } from "../../context/userContext";

const ManageAccount = () => {
  const userProvider = useContext(UserContext);
  const { fetchGetListUsers } = userProvider;

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [rowSelected, setRowSelected] = useState([]);

  const muiltyDeleteAccount = () => {};

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    {
      field: "name",
      headerName: "Name",
      flex: 3,
      cellClassName: "name-column--cell",
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      flex: 1,
      type: "number",
      headerAlign: "left",
      align: "left",
      editable: true,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 3,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 3,
    },
    {
      headerName: "Action",
      flex: 3,
      sortable: false,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
          >
            <Button sx={{ m: "0 2px", backgroundColor: colors.redAccent[700] }}>
              Delete
            </Button>
            <Button
              sx={{ m: "0 2px", backgroundColor: colors.greenAccent[700] }}
            >
              Save
            </Button>
          </Box>
        );
      },
    },
  ];

  useLayoutEffect(() => {
    fetchGetListUsers();
  }, []);

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        sx={{
          w: "100%",
          display: "flex",
        }}
      >
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          <AddIcon sx={{ mr: "10px" }} />
          Add
        </Button>
        {rowSelected.length > 0 && (
          <Button
            sx={{
              backgroundColor: colors.redAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              m: "0 5px",
            }}
            onClick={muiltyDeleteAccount}
          >
            Delete
          </Button>
        )}
      </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          disableSelectionOnClick
          onSelectionModelChange={setRowSelected}
          rows={mockDataTeam}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default ManageAccount;
