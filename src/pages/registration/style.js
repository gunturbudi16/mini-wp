import { makeStyles } from "@material-ui/styles";
import theme from "../../config/theme";
const useStyles = makeStyles({
  title: {
    textAlign: "center",
    marginBottom: theme.spacing(3)
  },
  paper: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(6)
  },
  buttons: {
    marginTop: theme.spacing(8)
  }
});
export default useStyles;
