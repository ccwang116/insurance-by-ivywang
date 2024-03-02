import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomPaper = styled(Paper)(({ theme }) => ({
  width: 68,
  height: 28,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));
const Policyholder = () => {
  const handleSearch = (keyword: string) => {
    fetch(`${process.env.REACT_APP_API_DOMAIN}/api/policyholders`)
      .then((response) => response.json())
      .then((json) => {
        console.log("res", json);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    handleSearch("123");
  }, []);
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={2}
        sx={{ mt: "60px" }}
      >
        <Typography variant="h6">保戶編號</Typography>
        <TextField id="outlined-basic" variant="outlined" size="small" />
        <Button variant="contained">查詢</Button>
      </Stack>
      <Typography variant="h6">關係圖</Typography>
      <Box>
        <div style={{ position: "absolute", left: 440 }}>
          <CustomPaper variant="outlined">00001</CustomPaper>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="122">
          <line
            x1="460"
            y1="62"
            x2="460"
            y2="92"
            style={{ stroke: "gray", strokeWidth: "2px" }}
          />
          <line
            x1="240"
            y1="92"
            x2="740"
            y2="92"
            style={{ stroke: "gray", strokeWidth: "2px" }}
          />
          <line
            x1="240"
            y1="92"
            x2="240"
            y2="122"
            style={{ stroke: "gray", strokeWidth: "2px" }}
          />
          <line
            x1="740"
            y1="92"
            x2="740"
            y2="122"
            style={{ stroke: "gray", strokeWidth: "2px" }}
          />
        </svg>
        <div style={{ position: "absolute", left: 190 }}>
          <CustomPaper variant="outlined">00002</CustomPaper>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="122">
          <line
            x1="460"
            y1="62"
            x2="460"
            y2="92"
            style={{ stroke: "gray", strokeWidth: "2px" }}
          />
          <line
            x1="240"
            y1="92"
            x2="740"
            y2="92"
            style={{ stroke: "gray", strokeWidth: "2px" }}
          />
          <line
            x1="240"
            y1="92"
            x2="240"
            y2="122"
            style={{ stroke: "gray", strokeWidth: "2px" }}
          />
          <line
            x1="740"
            y1="92"
            x2="740"
            y2="122"
            style={{ stroke: "gray", strokeWidth: "2px" }}
          />
        </svg>
        <div style={{ position: "absolute", left: 110 }}>
          <CustomPaper variant="outlined">00003</CustomPaper>
        </div>
        <div style={{ position: "absolute", left: 110 + 120 }}>
          <CustomPaper variant="outlined">00003</CustomPaper>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="122">
          <line
            x1="460"
            y1="62"
            x2="460"
            y2="92"
            style={{ stroke: "gray", strokeWidth: "2px" }}
          />
          <line
            x1="240"
            y1="92"
            x2="740"
            y2="92"
            style={{ stroke: "gray", strokeWidth: "2px" }}
          />
          <line
            x1="240"
            y1="92"
            x2="240"
            y2="122"
            style={{ stroke: "gray", strokeWidth: "2px" }}
          />
          <line
            x1="740"
            y1="92"
            x2="740"
            y2="122"
            style={{ stroke: "gray", strokeWidth: "2px" }}
          />
        </svg>
        <div style={{ position: "absolute", left: 30 }}>
          <CustomPaper variant="outlined">00004</CustomPaper>
        </div>
        <div style={{ position: "absolute", left: 30 + 120 }}>
          <CustomPaper variant="outlined">00004</CustomPaper>
        </div>
      </Box>
    </>
  );
};
export default Policyholder;
