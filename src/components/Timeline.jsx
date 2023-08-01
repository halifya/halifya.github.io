import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
// import Timeline from "@mui/lab/Timeline";
// import TimelineItem from "@mui/lab/TimelineItem";
// import TimelineSeparator from "@mui/lab/TimelineSeparator";
// import TimelineConnector from "@mui/lab/TimelineConnector";
// import TimelineContent from "@mui/lab/TimelineContent";
// import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
// import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "../index.css";

const themeCustom = createTheme({
  typography: {
    fontFamily: "Space Mono",
  },
});

export default function BasicTimeline(prop) {
  const contents = [
    {
      title: "Back End Developer",
      location: "Internet Thailand Public Co., Ltd.",
      details:
        "As a member of the payment gateway team, I am responsible for developing and maintaining reports that provide insights into our payment processing operationsIn addition, I collaborate with other teams such as product, design, and operations to gather requirements, develop user stories",
      dateTime: "2022 (MAY - Present)",
    },
    {
      title: "Computer Teacher and IT Support",
      location: "Tarbiatulwatan Mulniti School",
      details:
        "Install and configure hardware and software components, Repair or replace damaged hardware.",
      dateTime: "2022 (JAN - MAY)",
    },
    {
      title: "Power BI Developer",
      location: "Michelin Siam CO.LTD (HATYAI)",
      details:
        "Work on designing and creating applications within the factory through tools Power BI, Power APP, Power Automate.",
      dateTime: "2021 (APR - JUN)",
    },
  ];
  return (
    <div>
      {/* Desktop */}
      <Timeline
        sx={{
          display: { xs: "none", sm: "block" },
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {contents.map((content, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <div
              className={`${
                prop.dark ? "text-white" : "text-dark-navy-blue-2"
              }`}
            >
              <TimelineContent
                sx={{ fontFamily: "Space Mono", fontWeight: 40 }}
              >
                {content.title} {content.dateTime}
              </TimelineContent>
              <TimelineContent
                sx={{ fontFamily: "Space Mono" }}
                className={`${prop.dark ? "text-white" : "text-grayish-blue"}`}
              >
                {content.details}
              </TimelineContent>
            </div>
          </TimelineItem>
        ))}
      </Timeline>
      {/* Mobile */}
      <Card sx={{ minWidth: 275, m: 2, display: { xs: "block", sm: "none" } }}>
        {contents.map((content, index) => (
          <CardContent key={index}>
            <ThemeProvider theme={themeCustom}>
              {/* <div className="m-10"> */}
                <Typography
                  sx={{ fontSize: 10 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {content.dateTime}
                </Typography>
                <Typography variant="h6" component="div">
                  {content.title}
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                ></Typography>
                <Typography variant="body2">{content.details}</Typography>
              {/* </div> */}
            </ThemeProvider>
          </CardContent>
        ))}
      </Card>
    </div>
  );
}
