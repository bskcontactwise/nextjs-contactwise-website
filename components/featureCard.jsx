import React from "react";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { red, white, blue, purple, grey } from "@mui/material/colors";

const Featurecard = ({ info, str, isshown }) => {
  return (
    <>
      <Card elevation={0} sx={{ p: 0.5, bgcolor: "transparent" }}>
        <Avatar sx={{ bgcolor: `${info.color}`, width: 50, height: 50, ml: 2 }} aria-label="recipe" variant="rounded">
          {info.icon}
        </Avatar>
        <CardHeader title={info.title}>
          <h5 className="card-title fw-bold">{info.title}</h5>
        </CardHeader>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {str.length < 100 ? info.description : info.description.substring(0, 70) + `...`}
          </Typography>
          <Typography variant="body2" color="primary" mt={1} className={isshown ? "" : "d-none"}>
            <Link href={info.url}>
              <a>
                Read more from {info.title}
                <i className=" ms-2 fw-bold bi bi-arrow-right"></i>
              </a>
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Featurecard;
