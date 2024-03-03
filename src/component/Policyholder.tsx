import { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, CircularProgress, Stack } from "@mui/material";
import TreeLayer from "./dataDisplay/TreeLayer";
import { PolicyholdersResult } from "../models/Policyholder.model";
import InfoCard from "./dataDisplay/InfoCard";

const Policyholder = () => {
  const [policyholdersResult, setPolicyholdersResult] =
    useState<PolicyholdersResult | null>(null);
  const [keyword, setKeyword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleSearch = (keyword: string) => {
    setIsLoading(true);
    fetch(
      `${process.env.REACT_APP_API_DOMAIN}/api/policyholders?code=${keyword}`
    )
      .then((response) => response.json())
      .then((json) => {
        setPolicyholdersResult(json);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setPolicyholdersResult(null);
      });
  };
  const handleSearchTop = (code: string) => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_API_DOMAIN}/api/policyholders/${code}/top`)
      .then((response) => response.json())
      .then((json) => {
        setPolicyholdersResult(json);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setPolicyholdersResult(null);
      });
  };
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={2}
        sx={{ mt: "60px" }}
      >
        <Typography variant="h6">保戶編號</Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Button variant="contained" onClick={() => handleSearch(keyword)}>
          查詢
        </Button>
      </Stack>
      <Typography variant="h6">關係圖</Typography>
      {isLoading && (
        <Box
          width={"1000px"}
          height={"600px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <CircularProgress />
        </Box>
      )}
      {!isLoading && !policyholdersResult && (
        <Box
          width={"1000px"}
          height={"600px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <div>No data</div>
        </Box>
      )}
      {!isLoading && policyholdersResult && (
        <Box>
          <InfoCard
            sx={{ left: "440px" }}
            type="main"
            info={policyholdersResult}
            handleClick={() => handleSearch(policyholdersResult.code)}
          />
          <Button
            variant="text"
            sx={{ position: "absolute", left: "540px", mt: "20px" }}
            onClick={() => handleSearchTop(policyholdersResult.code)}
          >
            上一階
          </Button>
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
          <Stack direction={"row"} spacing={0} width={"893px"}>
            <TreeLayer
              data={policyholdersResult.l}
              handleSearch={(code) => handleSearch(code)}
              mainCode={policyholdersResult.code}
            />
            <TreeLayer
              data={policyholdersResult.r}
              handleSearch={(code) => handleSearch(code)}
              mainCode={policyholdersResult.code}
            />
          </Stack>
        </Box>
      )}
    </>
  );
};
export default Policyholder;
