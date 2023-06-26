import React, { useState } from "react";
import "./TimelineBox.css";
import { Tabs } from "@mui/material";
import Tab from "@material-ui/core/Tab";
import TabPanel from "@material-ui/lab/TabPanel";
import { TabContext } from "@material-ui/lab";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button } from "@mui/material";

function TimelineBox() {
  const [currentTab, setCurrentTab] = useState("Experience");
  return (
    <Box className="Timeline_box_main_container">
      <TabContext value={currentTab}>
        <Box className="tab_container">
          <Tabs
            value={currentTab}
            onChange={(e, value) => setCurrentTab(value)}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
            className="tab_content_container"
          >
            <Tab value="Education" label="Education" />
            <Tab value="Experience" label="Experience" />
            <Tab value="Awards" label="Awards" />
          </Tabs>
        </Box>
        <TabPanel value={"Education"} index={0}>
          <Box className="panel_container">
            <Accordion className="timeline_main_container">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Box className="timeline_side_bar">
                  <span className="timeline_side_bar_point"></span>
                  <span className="timeline_side_bar_line"></span>
                </Box>
                <Box className="timeline_company_img_container">
                  <img src="./NusLogo.png" className="timeline_company_img" />
                </Box>
                <Box className="experience_details">
                  <h5 className="experience_company_title">
                    National University of Singapore
                  </h5>
                  <Box className="experience_company_details">
                    <h6 id="job_title">Major in Computer Science</h6>
                    <h6 id="experience_separator"> . </h6>
                    <h6 id="job_duration">Aug 2021 - Present</h6>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box className="experience_company_details">
                  <h6 id="job_description">
                    Relevant Coursework: Programming Methadology I, Programming
                    Methadology II, Data Structures & Algorithms, Discrete
                    Structures.
                  </h6>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion className="timeline_main_container">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
              <Box className="timeline_side_bar">
                <span className="timeline_side_bar_point"></span>
                <span className="timeline_side_bar_line"></span>
              </Box>
              <Box className="timeline_company_img_container">
                <img src="./Njc.png" className="timeline_company_img" />
              </Box>
              <Box className="experience_details">
                <h5 className="experience_company_title">
                  National Junior College
                </h5>
                <Box className="experience_company_details">
                  <h6 id="job_title">A Levels</h6>
                  <h6 id="experience_separator"> . </h6>
                  <h6 id="job_duration">Feb 2017 - Nov 2018</h6>
                </Box>
              </Box>
              </AccordionSummary>
              <AccordionDetails>
              <Box className="experience_company_details">
                  <h6 id="job_description">
                    Physics, Chemistry, Math, Economics.
                  </h6>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        </TabPanel>
        <TabPanel value={"Experience"} index={1}>
          <Box className="panel_container">
            <Accordion className="timeline_main_container">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box className="timeline_side_bar">
                  <span className="timeline_side_bar_point"></span>
                  <span className="timeline_side_bar_line"></span>
                </Box>
                <Box className="timeline_company_img_container">
                  <img src="./LTA.jpeg" className="timeline_company_img" />
                </Box>
                <Box className="experience_details">
                  <h5 className="experience_company_title">
                    Land Transport Authority
                  </h5>
                  <Box className="experience_company_details">
                    <h6 id="job_title">Software Engineer Intern</h6>
                    <h6 id="experience_separator"> . </h6>
                    <h6 id="job_duration">May 2023 - Aug 2023</h6>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box className="experience_company_details">
                  <h6 id="job_description">
                    Developed livestreaming feature for existing LTA website using React and Hls.js.
                  </h6>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        </TabPanel>
        <TabPanel value={"Awards"} index={2}>
          <Box className="panel_container">
            <Accordion className="timeline_main_container">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box className="timeline_side_bar">
                  <span className="timeline_side_bar_point"></span>
                  <span className="timeline_side_bar_line"></span>
                </Box>
                <Box className="experience_details">
                  <h5 className="experience_company_title">
                    NTU SPIRITCYBER-22 Hackathon
                  </h5>
                  <Box className="experience_company_details">
                    <h6 id="job_title">Highest Score on Day 1</h6>
                    <h6 id="experience_separator"> . </h6>
                    <h6 id="job_duration">9 - 10 Dec 2022</h6>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box className="experience_company_details">
                  <h6 id="job_description">
                    Won special prize for the highest score on Day 1.
                    SPIRITCYBER-22 is a hackathon organised by NTU in conjuction
                    with CSA Singapore.
                  </h6>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion className="timeline_main_container">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Box className="timeline_side_bar">
                  <span className="timeline_side_bar_point"></span>
                  <span className="timeline_side_bar_line"></span>
                </Box>
                <Box className="experience_details">
                  <h5 className="experience_company_title">
                    Orbital Apollo 11
                  </h5>
                  <Box className="experience_company_details">
                    <h6 id="job_title">!procrastinate</h6>
                    <h6 id="experience_separator"> . </h6>
                    <h6 id="job_duration">May 2022 - Jul 2022</h6>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box className="experience_company_details">
                  <h6 id="job_description">
                    An award for completing an application that demonstrated a
                    set of good features and extensions, as well as following
                    good software engineering practices.
                  </h6>
                </Box>
                <Button
                  variant="contained"
                  className="view_cert_btn"
                  href="https://credentials.nus.edu.sg/b9a7468f-8176-461a-b66d-588175f14794"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Cert
                </Button>
              </AccordionDetails>
            </Accordion>
          </Box>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default TimelineBox;
