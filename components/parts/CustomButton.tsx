// components/parts/CustomButton.tsx

import React from "react";
import { Button, ButtonProps, createTheme } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  variantType?: "primary" | "secondary" | "danger";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  variantType = "primary",
  ...props
}) => {
  let color: ButtonProps["color"] = "primary";

  // TODO: variantTypeに応じてcolorを変化させる
  // colorに設定する色は調べて実装する
  switch (variantType) {
    case "primary":
      color = "primary";
      break;
    case "secondary":
      color = "secondary";
      break;
    case "danger":
      color = "error"; 
      break;
    default:
      color = "primary";
  }

  return (
    // TODO: <Button>の実装
    <Button color={color} variant="contained" {...props}>
      {props.children}
    </Button>

    // {/* // プロップスには[color][variant]を設定し、{...props}を最後に設定する */}
  );
};

export default CustomButton;
