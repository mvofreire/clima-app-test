import injectSheet from "react-jss";
import { Colors, Theme } from "utils";

export const WithStyles = styles => Component => {
  const _styles = styles({
    color: Colors,
    theme: Theme
  });
  return injectSheet(_styles)(Component);
};
