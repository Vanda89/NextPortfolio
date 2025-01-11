import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import React from "react";
import { GoSun, GoMoon } from "react-icons/go";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    try {
      setTheme(theme === "dark" ? "light" : "dark");
    } catch (error) {
      console.error("Failed to change theme:", error);
    }
  };

  return (
    <Button
      className="btn border"
      variant="flat"
      onPress={handleThemeChange}
      isIconOnly
      size="md"
      radius="sm"
      aria-label={`Changement vers le thème ${
        theme === "dark" ? "light" : "dark"
      }`}
    >
      {theme === "dark" ? (
        <GoSun className="text-xl" />
      ) : (
        <GoMoon className="text-xl" />
      )}
    </Button>
  );
};

export default ThemeToggle;
