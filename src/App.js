import "./App.css";
import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  AppBar,
  List,
  ListItemButton,
  ListItemText,
  Card,
  LinearProgress,
  Grid,
  CardContent,
  CardActions,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import WaveBackgroundAnimation from "./Components/WaveBackgroundAnimation";
import TimelineBox from "./Components/TimelineBox";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  const [position, setPosition] = useState(0);
  const [focusBtn, setFocusBtn] = useState("");
  const handleBeforeUnload = () => {
    localStorage.setItem("screenHeight", window.innerHeight);
  };
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      const scrolled = (scrollTop / (documentHeight - windowHeight)) * 100;
      handleScrollPosition(scrollTop);
      setPosition(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    let h = parseInt(localStorage.getItem("screenHeight"));
    if (!isNaN(h)) {
      document.body.style.height = h + "px";
    }
  }, []);
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };
  function handleScrollPosition(scrolled) {
    if (scrolled < 400) {
      setFocusBtn("");
    } else if (scrolled < document.getElementById("skills").offsetTop - 90) {
      setFocusBtn("aboutMe");
    } else if (scrolled < document.getElementById("projects").offsetTop - 130) {
      setFocusBtn("skills");
    } else if (
      scrolled <
      document.getElementById("experience").offsetTop - 560
    ) {
      setFocusBtn("projects");
    } else {
      setFocusBtn("experience");
    }
  }
  return (
    <Box className="app_main_container">
      <AppBar position="fixed" className="nav_bar">
        <Box className="main_header_buttons_container">
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <img
              src="./M.png"
              style={{ width: "3.5rem", height: "3.5rem", marginRight: "1rem" }}
            />
            <Typography className="nav_bar_name">Wee Ming Qing</Typography>
          </Box>
          <List component="nav" className="main_header_buttons">
            <ListItemButton
              className={`main_header_button ${
                focusBtn === "aboutMe" ? "focused" : ""
              }`}
              onClick={() => {
                let temp = document.getElementById("about_me").offsetTop;
                window.scrollTo({
                  top: temp - 260,
                  behavior: "smooth",
                });
              }}
            >
              <ListItemText className="header_button_text">
                <h3>About Me</h3>
              </ListItemText>
            </ListItemButton>
            <ListItemButton
              className={`main_header_button ${
                focusBtn === "skills" ? "focused" : ""
              }`}
              onClick={() => {
                let temp = document.getElementById("skills").offsetTop;
                window.scrollTo({
                  top: temp - 90,
                  behavior: "smooth",
                });
              }}
            >
              <ListItemText className="header_button_text">
                <h3>Skills</h3>
              </ListItemText>
            </ListItemButton>
            <ListItemButton
              className={`main_header_button ${
                focusBtn === "projects" ? "focused" : ""
              }`}
              onClick={() => {
                let temp = document.getElementById("projects").offsetTop;
                window.scrollTo({
                  top: temp - 130,
                  behavior: "smooth",
                });
              }}
            >
              <ListItemText className="header_button_text">
                <h3>Projects</h3>
              </ListItemText>
            </ListItemButton>
            <ListItemButton
              className={`main_header_button ${
                focusBtn === "experience" ? "focused" : ""
              }`}
              onClick={() => {
                let temp = document.getElementById("experience").offsetTop;
                window.scrollTo({
                  top: temp - 140,
                  behavior: "smooth",
                });
              }}
            >
              <ListItemText className="header_button_text">
                <h3>Experience</h3>
              </ListItemText>
            </ListItemButton>
          </List>
          <Box className="app_bar_menu_btn">
            <Button
              id="fade-button"
              className="app_bar_menu_btn"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MenuIcon className="app_bar_menu_btn" />
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem
                className={`menu_btn ${
                  focusBtn === "aboutMe" ? "focused" : ""
                }`}
                onClick={() => {
                  let temp = document.getElementById("about_me").offsetTop;
                  window.scrollTo({
                    top: temp - 260,
                    behavior: "smooth",
                  });
                }}
              >
                About Me
              </MenuItem>
              <MenuItem
                className={`menu_btn ${focusBtn === "skills" ? "focused" : ""}`}
                onClick={() => {
                  let temp = document.getElementById("skills").offsetTop;
                  window.scrollTo({
                    top: temp - 90,
                    behavior: "smooth",
                  });
                }}
              >
                Skills
              </MenuItem>
              <MenuItem
                className={`menu_btn ${
                  focusBtn === "projects" ? "focused" : ""
                }`}
                onClick={() => {
                  let temp = document.getElementById("projects").offsetTop;
                  window.scrollTo({
                    top: temp - 130,
                    behavior: "smooth",
                  });
                }}
              >
                Projects
              </MenuItem>
              <MenuItem
                className={`menu_btn ${
                  focusBtn === "experience" ? "focused" : ""
                }`}
                onClick={() => {
                  let temp = document.getElementById("experience").offsetTop;
                  window.scrollTo({
                    top: temp - 140,
                    behavior: "smooth",
                  });
                }}
              >
                Experience
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        <Box position="absolute" className="nav_bar_progression_bar">
          <LinearProgress
            variant="determinate"
            value={position}
            className="smooth_progress"
          />
        </Box>
      </AppBar>
      <Box className="main_container">
        <Box className="main_container_website_link">
          <Box className="main_container_background_animation">
            <WaveBackgroundAnimation></WaveBackgroundAnimation>
          </Box>
          <Card className="intro_details_container">
            <h1>Welcome! I am Ming Qing</h1>
            <List className="nav_bar_buttons_container">
              <ListItemButton
                href="https://github.com/WeeMingQing"
                target="_blank"
                rel="noreferrer"
                className="nav_bar_button"
              >
                <GitHubIcon className="nav_bar_button_icon" id="github_icon" />
              </ListItemButton>
              <span></span>
              <ListItemButton
                href="https://www.linkedin.com/in/wee-ming-qing-017199205/"
                target="_blank"
                rel="noreferrer"
                className="nav_bar_button"
              >
                <LinkedInIcon className="nav_bar_button_icon" />
              </ListItemButton>
              {/* <span></span>
              <ListItemButton
                href="https://www.linkedin.com/in/wee-ming-qing-017199205/"
                target="_blank"
                rel="noreferrer"
                className="nav_bar_button"
              >
                <ContactPageIcon className="nav_bar_button_icon" />
              </ListItemButton> */}
            </List>
          </Card>
        </Box>
        <Box textAlign={"center"} marginTop={"5rem"} id="about_me">
          <Typography
            fontSize={"2.5rem"}
            fontWeight={"900"}
            fontFamily={"Avenir,Helvetica,Arial,sans-serif"}
            marginBottom={"3rem"}
          >
            About Me
          </Typography>
          <Typography
            fontSize={"1.2rem"}
            fontWeight={"500"}
            marginLeft={"0.5rem"}
            marginRight={"0.5rem"}
            marginBottom={"2rem"}
          >
            I'm a year 2 Computer Science Student at the National University of
            Singapore (NUS).
          </Typography>
          <Typography
            fontSize={"1.2rem"}
            fontWeight={"500"}
            marginLeft={"0.5rem"}
            marginRight={"0.5rem"}
            marginBottom={"2rem"}
          >
            I'm passionate about coding and enjoys working on projects in my
            free time.
          </Typography>
          <Typography
            fontSize={"1.2rem"}
            fontWeight={"500"}
            marginLeft={"0.5rem"}
            marginRight={"0.5rem"}
            marginBottom={"2rem"}
          >
            Currently at: Land Transport Authority (Software Engineer Intern)
          </Typography>
        </Box>
        <Box className="container_separator">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#BBC9DB"
              fill-opacity="0.25"
              d="M0,160L80,160C160,160,320,160,480,181.3C640,203,800,245,960,256C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </Box>
        <Box className="tech_stack_main_container" id="skills">
          <Typography
            fontSize={"2.5rem"}
            fontWeight={"900"}
            fontFamily={"Avenir,Helvetica,Arial,sans-serif"}
            marginBottom={"3rem"}
          >
            Skills
          </Typography>
          <Card className="tech_stack_container">
            <Box>
              <h2>Languages:</h2>
              <Grid container alignContent={"center"} justifyContent={"center"}>
                <Box className="tech_stack_img_container">
                  <img src="./javascript.png" className="tech_stack_icon" />
                  <h5>JavaScript</h5>
                </Box>
                <Box className="tech_stack_img_container">
                  <img src="./typescript.png" className="tech_stack_icon" />
                  <h5>TypeScript</h5>
                </Box>
                <Box className="tech_stack_img_container">
                  <img src="./java.png" className="tech_stack_icon" />
                  <h5>Java</h5>
                </Box>
                <Box className="tech_stack_img_container">
                  <img src="./ruby.png" className="tech_stack_icon" />
                  <h5>Ruby</h5>
                </Box>
                <Box className="tech_stack_img_container">
                  <img src="./python.png" className="tech_stack_icon" />
                  <h5>Python</h5>
                </Box>
                <Box className="tech_stack_img_container">
                  <img src="./cprogramming.png" className="tech_stack_icon" />
                  <h5>C</h5>
                </Box>
              </Grid>
            </Box>
          </Card>
          <Card className="tech_stack_container">
            <Box>
              <h2>Stacks and Framework:</h2>
              <Grid container alignContent={"center"} justifyContent={"center"}>
                <Box className="tech_stack_img_container">
                  <img src="./html5.png" className="tech_stack_icon" />
                  <h6>HTML</h6>
                </Box>
                <Box className="tech_stack_img_container">
                  <img src="./css.png" className="tech_stack_icon" />
                  <h6>CSS</h6>
                </Box>
                <Box className="tech_stack_img_container">
                  <img src="./react.png" className="tech_stack_icon" />
                  <h6>React</h6>
                </Box>
                <Box className="tech_stack_img_container">
                  <img
                    src="./rubyonrails.png"
                    className="tech_stack_special_icon"
                  />
                  <h6>Ruby on Rails</h6>
                </Box>
                <Box className="tech_stack_img_container">
                  <img src="./postgresql.png" className="tech_stack_icon" />
                  <h6>Postgresql</h6>
                </Box>
                <Box className="tech_stack_img_container">
                  <img src="./firebase.png" className="tech_stack_icon" />
                  <h6>Firebase</h6>
                </Box>
              </Grid>
            </Box>
          </Card>
          <Card className="tech_stack_container">
            <Box>
              <h2>Others:</h2>
              <Grid
                container
                alignContent={"center"}
                justifyContent={"center"}
                columns={2}
              >
                <Box className="tech_stack_img_container">
                  <img src="./git.png" className="tech_stack_icon" />
                  <h6>Git</h6>
                </Box>
                <Box className="tech_stack_img_container">
                  <img src="./figma.png" className="tech_stack_icon" />
                  <h6>Figma</h6>
                </Box>
              </Grid>
            </Box>
          </Card>
        </Box>
        <Box className="container_separator">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#BBC9DB"
              fill-opacity="0.25"
              d="M0,128L48,117.3C96,107,192,85,288,74.7C384,64,480,64,576,85.3C672,107,768,149,864,160C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </Box>
        <Box className="projects_main_container" id="projects">
          <Typography
            fontSize={"2.5rem"}
            fontWeight={"900"}
            fontFamily={"Avenir,Helvetica,Arial,sans-serif"}
            marginBottom={"3rem"}
          >
            Projects
          </Typography>
          <Grid
            container
            alignItems={"center"}
            justifyContent={"flex-start"}
            width={"70%"}
            className="projects_main_grid_container"
          >
            <Grid item xs={12} md={6} className="projects_grid_container">
              <Card className="projects_card">
                <CardMedia
                  component="img"
                  image="./mqssp.png"
                  className="projects_img_container"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight={"600"}
                  >
                    SingaporeStudentPortal
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Fullstack portal where students can create their own
                    communities, and post and comment on one another.
                  </Typography>
                </CardContent>
                <CardActions className="card_actions_component">
                  <Box className="card_actions_component_main_container">
                    <img src="./react.png" className="card_icon" />
                    <img
                      src="./rubyonrails.png"
                      className="projects_special_icon"
                    />
                    <img src="./postgresql.png" className="card_icon" />
                    <img src="./typescript.png" className="card_icon" />
                  </Box>
                  <Box className="projects_button_component">
                    <Button
                      variant="contained"
                      size="small"
                      className="proceed_to_site_btn"
                      href="https://mq-ssp.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExitToAppIcon className="projects_icon" />
                      <Typography variant="h7" textAlign={"center"}>
                        Site
                      </Typography>
                    </Button>
                    <Button
                      size="small"
                      href="https://github.com/WeeMingQing/SingaporeStudentPortal"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Typography variant="h7" textAlign={"center"}>
                        Code
                      </Typography>
                    </Button>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} className="projects_grid_container">
              <Card className="projects_card">
                <CardMedia
                  id="procrastinate"
                  component="img"
                  image="./!procrastinate.jpg"
                  className={`${"projects_img_container"} ${"procrastinate"}`}
                />
                <CardContent className="procrastinate_border">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight={"600"}
                  >
                    !Procrastinate
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A mobile app that has task management feature to help
                    students to plan their schedule easily and has a flashcard
                    feature to help students revise efficiently for their exams.
                  </Typography>
                </CardContent>
                <CardActions className="card_actions_component">
                  <Box className="card_actions_component_main_container">
                    <img src="./react.png" className="card_icon" />
                    <img src="./firebase.png" className="card_icon" />
                    <img src="./expo.png" className="card_icon" />
                    <img src="./javascript.png" className="card_icon" />
                  </Box>
                  <Box className="projects_button_component">
                    <Button
                      variant="contained"
                      size="small"
                      className="procrastinate_img"
                      href="https://github.com/WeeMingQing/Orbital--Procrastinate"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExitToAppIcon className="projects_icon" />
                      <Typography variant="h7" textAlign={"center"}>
                        Code
                      </Typography>
                    </Button>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} className="projects_grid_container">
              <Card className="projects_card">
                <CardMedia
                  component="img"
                  image="./wavescan.png"
                  className="projects_img_container"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight={"600"}
                  >
                    WaveScan
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A web page that will return available scanners with their
                    details based on user's input.
                  </Typography>
                </CardContent>
                <CardActions className="card_actions_component">
                  <Box className="card_actions_component_main_container">
                    <img src="./react.png" className="card_icon" />
                    <img src="./typescript.png" className="card_icon" />
                  </Box>
                  <Box className="projects_button_component">
                    <Button
                      variant="contained"
                      size="small"
                      className="proceed_to_site_btn"
                      href="https://wavescan-fe.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExitToAppIcon className="projects_icon" />
                      <Typography variant="h7" textAlign={"center"}>
                        Site
                      </Typography>
                    </Button>
                    <Button
                      size="small"
                      href="https://github.com/WeeMingQing/WaveScan_FE"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Typography variant="h7" textAlign={"center"}>
                        Code
                      </Typography>
                    </Button>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} className="projects_grid_container">
              <Card className="projects_card">
                <CardMedia
                  component="img"
                  image="./portfolio.png"
                  className="projects_img_container"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight={"600"}
                  >
                    Portfolio
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The current website that you are viewing now. It compiles
                    and showcases my projects and journey.
                  </Typography>
                </CardContent>
                <CardActions className="card_actions_component">
                  <Box className="card_actions_component_main_container">
                    <img src="./react.png" className="card_icon" />
                    <img src="./javascript.png" className="card_icon" />
                  </Box>
                  <Box className="projects_button_component">
                    <Button
                      variant="contained"
                      size="small"
                      className="proceed_to_site_btn"
                      href="https://github.com/WeeMingQing/Portfolio"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExitToAppIcon className="projects_icon" />
                      <Typography variant="h7" textAlign={"center"}>
                        Code
                      </Typography>
                    </Button>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} className="projects_grid_container">
              <Card className="projects_card">
                <CardMedia
                  component="img"
                  image="./shoppingsite.png"
                  className="projects_img_container"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight={"600"}
                  >
                    ShoppingSiteFE
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A frontend for a shopping website with add-to-cart feature.
                  </Typography>
                </CardContent>
                <CardActions className="card_actions_component">
                  <Box className="card_actions_component_main_container">
                    <img src="./react.png" className="card_icon" />
                    <img src="./typescript.png" className="card_icon" />
                  </Box>
                  <Box className="projects_button_component">
                    <Button
                      variant="contained"
                      size="small"
                      className="proceed_to_site_btn"
                      href="https://github.com/WeeMingQing/ShoppingWebsite"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExitToAppIcon className="projects_icon" />
                      <Typography variant="h7" textAlign={"center"}>
                        Code
                      </Typography>
                    </Button>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Box className="container_separator">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#BBC9DB"
              fill-opacity="0.25"
              d="M0,160L80,160C160,160,320,160,480,181.3C640,203,800,245,960,256C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </Box>
        <Box className="experience_main_container" id="experience">
          <Typography
            fontSize={"2.5rem"}
            fontWeight={"900"}
            fontFamily={"Avenir,Helvetica,Arial,sans-serif"}
            marginBottom={"3rem"}
          >
            Experience
          </Typography>
          <TimelineBox />
        </Box>
        <Box className="container_separator" id="end_container">
          <svg
            id="wave"
            style={{ transform: "rotate(0deg)", transition: "0.3s" }}
            viewBox="0 0 1440 160"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop
                  stop-color="rgba(146.07, 134.175, 130.355, 1)"
                  offset="0%"
                ></stop>
                <stop
                  stop-color="rgba(141.516, 135.53, 122.296, 1)"
                  offset="100%"
                ></stop>
              </linearGradient>
            </defs>
            <path
              style={{ transform: "translate(0, 0px)", opacity: 1 }}
              fill="url(#sw-gradient-0)"
              d="M0,56L60,58.3C120,61,240,65,360,60.7C480,56,600,42,720,42C840,42,960,56,1080,72.3C1200,89,1320,107,1440,107.3C1560,107,1680,89,1800,74.7C1920,61,2040,51,2160,53.7C2280,56,2400,70,2520,84C2640,98,2760,112,2880,116.7C3000,121,3120,117,3240,116.7C3360,117,3480,121,3600,112C3720,103,3840,79,3960,77C4080,75,4200,93,4320,91C4440,89,4560,65,4680,51.3C4800,37,4920,33,5040,37.3C5160,42,5280,56,5400,70C5520,84,5640,98,5760,102.7C5880,107,6000,103,6120,91C6240,79,6360,61,6480,51.3C6600,42,6720,42,6840,35C6960,28,7080,14,7200,28C7320,42,7440,84,7560,95.7C7680,107,7800,89,7920,81.7C8040,75,8160,79,8280,81.7C8400,84,8520,84,8580,84L8640,84L8640,140L8580,140C8520,140,8400,140,8280,140C8160,140,8040,140,7920,140C7800,140,7680,140,7560,140C7440,140,7320,140,7200,140C7080,140,6960,140,6840,140C6720,140,6600,140,6480,140C6360,140,6240,140,6120,140C6000,140,5880,140,5760,140C5640,140,5520,140,5400,140C5280,140,5160,140,5040,140C4920,140,4800,140,4680,140C4560,140,4440,140,4320,140C4200,140,4080,140,3960,140C3840,140,3720,140,3600,140C3480,140,3360,140,3240,140C3120,140,3000,140,2880,140C2760,140,2640,140,2520,140C2400,140,2280,140,2160,140C2040,140,1920,140,1800,140C1680,140,1560,140,1440,140C1320,140,1200,140,1080,140C960,140,840,140,720,140C600,140,480,140,360,140C240,140,120,140,60,140L0,140Z"
            ></path>
            <defs>
              <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
                <stop
                  stop-color="rgba(130.133, 100.627, 91.15, 1)"
                  offset="0%"
                ></stop>
                <stop
                  stop-color="rgba(109.641, 91.313, 50.797, 1)"
                  offset="100%"
                ></stop>
              </linearGradient>
            </defs>
            <path
              style={{ transform: "translate(0, 50px)", opacity: 0.9 }}
              fill="url(#sw-gradient-1)"
              d="M0,98L60,86.3C120,75,240,51,360,37.3C480,23,600,19,720,28C840,37,960,61,1080,58.3C1200,56,1320,28,1440,23.3C1560,19,1680,37,1800,51.3C1920,65,2040,75,2160,72.3C2280,70,2400,56,2520,56C2640,56,2760,70,2880,77C3000,84,3120,84,3240,74.7C3360,65,3480,47,3600,37.3C3720,28,3840,28,3960,44.3C4080,61,4200,93,4320,88.7C4440,84,4560,42,4680,23.3C4800,5,4920,9,5040,18.7C5160,28,5280,42,5400,42C5520,42,5640,28,5760,37.3C5880,47,6000,79,6120,95.7C6240,112,6360,112,6480,114.3C6600,117,6720,121,6840,114.3C6960,107,7080,89,7200,74.7C7320,61,7440,51,7560,39.7C7680,28,7800,14,7920,18.7C8040,23,8160,47,8280,65.3C8400,84,8520,98,8580,105L8640,112L8640,140L8580,140C8520,140,8400,140,8280,140C8160,140,8040,140,7920,140C7800,140,7680,140,7560,140C7440,140,7320,140,7200,140C7080,140,6960,140,6840,140C6720,140,6600,140,6480,140C6360,140,6240,140,6120,140C6000,140,5880,140,5760,140C5640,140,5520,140,5400,140C5280,140,5160,140,5040,140C4920,140,4800,140,4680,140C4560,140,4440,140,4320,140C4200,140,4080,140,3960,140C3840,140,3720,140,3600,140C3480,140,3360,140,3240,140C3120,140,3000,140,2880,140C2760,140,2640,140,2520,140C2400,140,2280,140,2160,140C2040,140,1920,140,1800,140C1680,140,1560,140,1440,140C1320,140,1200,140,1080,140C960,140,840,140,720,140C600,140,480,140,360,140C240,140,120,140,60,140L0,140Z"
            ></path>
            <defs>
              <linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0">
                <stop stop-color="rgba(0, 0, 0, 1)" offset="0%"></stop>
                <stop stop-color="rgba(0, 0, 0, 1)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              style={{ transform: "translate(0, 100px)" }}
              fill="black"
              d="M0,0L60,11.7C120,23,240,47,360,49C480,51,600,33,720,23.3C840,14,960,14,1080,18.7C1200,23,1320,33,1440,32.7C1560,33,1680,23,1800,32.7C1920,42,2040,70,2160,72.3C2280,75,2400,51,2520,51.3C2640,51,2760,75,2880,88.7C3000,103,3120,107,3240,93.3C3360,79,3480,47,3600,49C3720,51,3840,89,3960,102.7C4080,117,4200,107,4320,91C4440,75,4560,51,4680,49C4800,47,4920,65,5040,65.3C5160,65,5280,47,5400,53.7C5520,61,5640,93,5760,98C5880,103,6000,79,6120,58.3C6240,37,6360,19,6480,30.3C6600,42,6720,84,6840,102.7C6960,121,7080,117,7200,107.3C7320,98,7440,84,7560,65.3C7680,47,7800,23,7920,28C8040,33,8160,65,8280,72.3C8400,79,8520,61,8580,51.3L8640,42L8640,140L8580,140C8520,140,8400,140,8280,140C8160,140,8040,140,7920,140C7800,140,7680,140,7560,140C7440,140,7320,140,7200,140C7080,140,6960,140,6840,140C6720,140,6600,140,6480,140C6360,140,6240,140,6120,140C6000,140,5880,140,5760,140C5640,140,5520,140,5400,140C5280,140,5160,140,5040,140C4920,140,4800,140,4680,140C4560,140,4440,140,4320,140C4200,140,4080,140,3960,140C3840,140,3720,140,3600,140C3480,140,3360,140,3240,140C3120,140,3000,140,2880,140C2760,140,2640,140,2520,140C2400,140,2280,140,2160,140C2040,140,1920,140,1800,140C1680,140,1560,140,1440,140C1320,140,1200,140,1080,140C960,140,840,140,720,140C600,140,480,140,360,140C240,140,120,140,60,140L0,140Z"
            ></path>
          </svg>
        </Box>
        <Box className="wave_bg_content">
          <h5>Thank you for visiting my website.</h5>
          <List className="end_intro_list">
            <ListItemButton
              href="https://github.com/WeeMingQing"
              target="_blank"
              rel="noreferrer"
              className="end_intro_list_btn"
            >
              <GitHubIcon
                className="end_intro_list_button_icon"
                id="github_icon"
              />
            </ListItemButton>
            <span></span>
            <ListItemButton
              href="https://www.linkedin.com/in/wee-ming-qing-017199205/"
              target="_blank"
              rel="noreferrer"
              className="end_intro_list_btn"
            >
              <LinkedInIcon className="end_intro_list_button_icon" />
            </ListItemButton>
          </List>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
