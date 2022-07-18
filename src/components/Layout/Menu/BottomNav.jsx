import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Home, Cate, Fashion, Account, Cart } from "./Icons";

export default function BottomNav() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: { xs: "100%", sm: "100%" }, bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <Tab icon={<Home />} label="Home" />
        <Tab icon={<Cate />} label="Categories" />
        <Tab icon={<Fashion />} label="Fashion" />
        <Tab icon={<Account />} label="My Account" />
        <Tab icon={<Cart />} label="Cart" />
      </Tabs>
    </Box>
  );
}
