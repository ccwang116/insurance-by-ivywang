import Paper from "@mui/material/Paper";
import { SxProps, styled } from "@mui/material/styles";
import { PolicyholderData } from "../../models/Policyholder.model";
import { Typography, Button } from "@mui/material";
export const CustomPaper = styled(Paper)(({ theme }) => ({
  width: 84,
  position: "absolute",
  left: 0,
  padding: theme.spacing(1),
  ...theme.typography.body2,
  textAlign: "left",
}));
interface IProps {
  info: PolicyholderData;
  sx?: SxProps;
  type: "main" | "direct" | "indirect";
  handleClick: () => void;
}
const InfoCard = ({ info, sx, type, handleClick }: IProps) => {
  const typeColorMap: { [key: string]: string } = {
    main: "#FEE17B",
    direct: "#AAC9A0",
    indirect: "#eeeeee",
  };
  return (
    <CustomPaper sx={{ ...sx, bgcolor: typeColorMap[type] }} variant="outlined">
      <Button
        variant="text"
        size="small"
        sx={{ p: 0, fontSize: "10px" }}
        onClick={handleClick}
      >
        {info.code}
      </Button>
      <Typography variant="body2"> {info.name}</Typography>
    </CustomPaper>
  );
};

export default InfoCard;
