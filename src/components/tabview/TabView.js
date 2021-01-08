import { AppBar, Tab, Tabs, Typography, makeStyles } from "@material-ui/core";
import ViewStreamIcon from "@material-ui/icons/ViewStream";
import ViewCompactRoundedIcon from "@material-ui/icons/ViewCompactRounded";
import React from "react";
import SimpleTab from "./SimpleTab";
import Stab from "./Stab";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 15,
    display: "flex",
  },
  tabbar: {
    background: "white",
  },
  txtcolor: {
    color: "black",
    marginRight: theme.spacing(2),
  },
  tabbtn: {
    width: "10px",
  },
}));
function TabView() {
  const classStyle = useStyles();

  const [value, setValue] = React.useState(0);

  const handletab = (e, val) => {
    setValue(val);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          marginBottom: "10px",
          justifyContent: "space-between",
        }}
      >
        <div>
          <span style={{ color: "gray" }}>photo of the day by</span>
          <span style={{ color: "white" }}>Koushik C</span>
        </div>
        <div>
          <span style={{ color: "gray" }}>Read more about the</span>
          <span style={{ color: "white" }}>Unsplash License</span>
        </div>
      </div>
      <AppBar position="static" className={classStyle.tabbar}>
        <div className={classStyle.root}>
          <Typography
            variant="h6"
            fontSize={25}
            fontWeight="fontWeightBold"
            className={classStyle.txtcolor}
          >
            Tranding
          </Typography>
          <Typography
            variant="h6"
            fontWeight="fontWeightBold"
            className={classStyle.txtcolor}
          >
            New
          </Typography>
          <Typography
            variant="h6"
            fontWeight="fontWeightBold"
            className={classStyle.txtcolor}
          >
            Following
          </Typography>
          <Typography style={{ flex: 1 }}> </Typography>
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            value={value}
            onChange={handletab}
          >
            <Tab icon={<ViewStreamIcon />} />
            <Tab icon={<ViewCompactRoundedIcon />} />
          </Tabs>
        </div>
      </AppBar>
      {/* fetch api call here */}
      <SimpleTab value={value} index={0} />
      <Stab value={value} index={1} />
      {/* fetch api call here */}
    </>
  );
}

export default TabView;
