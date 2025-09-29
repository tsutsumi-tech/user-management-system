// components/parts/CustomCard.tsx

import React from "react";
import { Card, CardContent, Typography, CardActions } from "@mui/material";

// TODO: インターフェースを修正
interface CustomCardProps {
  actions?: React.ReactNode;
  title: string;
  description: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  description,
  actions,
}) => {
  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        {/*
		      TODO: [titel]と[description]を表示
		     */}

        <Typography> {title}</Typography>
        <Typography>{description}</Typography>
      </CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  );
};

export default CustomCard;
