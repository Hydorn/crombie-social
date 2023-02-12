import {
  DarkModeOutlined,
  LightModeOutlined,
  ToggleOffOutlined,
  ToggleOnOutlined,
} from "@mui/icons-material";
import { Stack } from "@mui/material";
import { useState } from "react";

const ThemeToggle = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const handleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <Stack
      component={"div"}
      onClick={handleTheme}
      sx={{ position: "absolute", bottom: "0", left: "0" }}
      marginBottom={4}
      marginLeft={4}
      flexDirection="row"
      alignItems="center"
      gap={2}
    >
      <>
        <LightModeOutlined fontSize="medium" sx={{ cursor: "pointer" }} />
        {darkTheme ? (
          <ToggleOffOutlined fontSize="large" sx={{ cursor: "pointer" }} />
        ) : (
          <ToggleOnOutlined fontSize="large" sx={{ cursor: "pointer" }} />
        )}
        <DarkModeOutlined fontSize="medium" sx={{ cursor: "pointer" }} />
      </>
    </Stack>
  );
};
export default ThemeToggle;
