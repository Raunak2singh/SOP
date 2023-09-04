"use client";
import { useEffect, useState } from "react"
import { AuthContextProvider } from '../../context/AuthContext'
import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  Input,
  MenuItem,
  InputLabel,
  Radio,
  RadioGroup,
  Select,
  Typography,
  Grid,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Link from "next/link";
import SwapVertRoundedIcon from "@mui/icons-material/SwapVertRounded";
import CustominputBox from "../../components/CustomInputBox";
import ThemeRegistry from "../../components/Theme/ThemeRegistry";
import { UserAuth } from "../../context/AuthContext";
import { Dialog } from "@mui/material";
import { DialogContent } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import { useCookies } from "react-cookie";

export default function Home() {
  const { user, googleSignIn, LogOut } = UserAuth();
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [HighLevelEducation, setHighLevelEducation] = useState("");
  const [InstituteName, setInstituteName] = useState("");
  const [CurrentStudy, setCurrentStudy] = useState("");
  const [ExpirenceDetail, setExpirenceDetail] = useState("");
  const [CanadaInstituteName, setCanadaInstituteName] = useState("");
  const [CanadaStudyName, setCanadaStudyName] = useState("");
  const [futureGoal, setfutureGoal] = useState("");
  const [ApplyingCountry, setApplyingCountry] = useState("");
  const [EnglishScoreReading, setEnglishScoreReading] = useState("");
  const [EnglishScoreWritting, setEnglishScoreWritting] = useState("");
  const [EnglishScoreListening, setEnglishScoreListening] = useState("");
  const [EnglishScoreSpeaking, setEnglishScoreSpeaking] = useState("");
  const [TutionFee, setTutionFee] = useState("");
  const [FirtYearTutionFee, setFirtYearTutionFee] = useState("");
  const [GIC, setGIC] = useState("");
  const [PayGiC, setPayGiC] = useState("");
  const [dilog, setDilog] = useState(false);
  const [Error, setError] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const [send, setSend] = useState(false);
  const [CanSubmit, setCanSubmit] = useState(false);
  const [SubmitCheck, setSubmitCheck] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["Data"]);

  const ClearForm = () => {
    removeCookie("Data");
  };

  const handleSignin = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user) {
      setDilog(true);
    } else {
      setDilog(false);
    }
  }, [user]);

  useEffect(() => {
    if (cookies.Data) {
      setEmail(cookies.Data.Email || "");
      setName(cookies.Data.Name || "");
      setAge(cookies.Data.Age || "");
      setHighLevelEducation(cookies.Data.HighLevelEducation || "");
      setInstituteName(cookies.Data.InstituteName || "");
      setCurrentStudy(cookies.Data.CurrentStudy || "");
      setExpirenceDetail(cookies.Data.ExpirenceDetail || "");
      setCanadaInstituteName(cookies.Data.CanadaInstituteName || "");
      setCanadaStudyName(cookies.Data.CanadaStudyName || "");
      setfutureGoal(cookies.Data.futureGoal || "");
      setApplyingCountry(cookies.Data.ApplyingCountry || "");
      setEnglishScoreReading(cookies.Data.EnglishScoreReading || "");
      setEnglishScoreWritting(cookies.Data.EnglishScoreWritting || "");
      setEnglishScoreListening(cookies.Data.EnglishScoreListening || "");
      setEnglishScoreSpeaking(cookies.Data.EnglishScoreSpeaking || "");
      setTutionFee(cookies.Data.TutionFee || "");
      setFirtYearTutionFee(cookies.Data.FirtYearTutionFee || "");
      setGIC(cookies.Data.GIC || "");
      setPayGiC(cookies.Data.PayGiC || "");
    }
  }, [cookies]);

  useEffect(() => {
    const Data = {
      Email: Email ? Email : "",
      Name: Name ? Name : "",
      Age: Age ? Age : "",
      HighLevelEducation: HighLevelEducation ? HighLevelEducation : "",
      InstituteName: InstituteName ? InstituteName : "",
      CurrentStudy: CurrentStudy ? CurrentStudy : "",
      ExpirenceDetail: ExpirenceDetail ? ExpirenceDetail : "",
      CanadaInstituteName: CanadaInstituteName ? CanadaInstituteName : "",
      CanadaStudyName: CanadaStudyName ? CanadaStudyName : "",
      futureGoal: futureGoal ? futureGoal : "",
      ApplyingCountry: ApplyingCountry ? ApplyingCountry : "",
      EnglishScoreReading: EnglishScoreReading ? EnglishScoreReading : "",
      EnglishScoreWritting: EnglishScoreWritting ? EnglishScoreWritting : "",
      EnglishScoreListening: EnglishScoreListening ? EnglishScoreListening : "",
      EnglishScoreSpeaking: EnglishScoreSpeaking ? EnglishScoreSpeaking : "",
      TutionFee: TutionFee ? TutionFee : "",
      FirtYearTutionFee: FirtYearTutionFee ? FirtYearTutionFee : "",
      GIC: GIC ? GIC : "",
      PayGiC: PayGiC ? PayGiC : "",
    };

    const saveToCookiesInterval = setInterval(() => {
      setCookie("Data", Data, { path: "/" });
    }, 5000);

    return () => {
      clearInterval(saveToCookiesInterval);
    };
  });


  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (Email === undefined || Email.length === 0) {
      setErrorMsg("Email is required");
      setError(0);
    } else if (!emailRegex.test(Email)) {
      setError(0);
      setErrorMsg("Please enter a valid email");
    } else if (Name === undefined || Name.length === 0) {
      setErrorMsg("Name is required");
      setError(1);
    } else if (Name.length < 2) {
      setError(1);
      setErrorMsg("Name should be at least two characters");
    } else if (Age === undefined || Age.length === 0) {
      setErrorMsg("Age is required");
      setError(2);
    } else if (isNaN(Age) || parseInt(Age) <= 0) {
      setError(2);
      setErrorMsg("Age should be a positive number");
    } else if (HighLevelEducation === undefined || HighLevelEducation === "") {
      setErrorMsg("Please choose an option for education");
      setError(3);
    } else if (InstituteName === undefined || InstituteName.length === 0) {
      setErrorMsg("Institute name is required");
      setError(4);
    } else if (CurrentStudy === undefined || CurrentStudy.length === 0) {
      setErrorMsg("Current study is required");
      setError(5);
    } else if (ExpirenceDetail === undefined || ExpirenceDetail.length === 0) {
      setError(6);
      setErrorMsg("Experience details are required");
    } else if (
      CanadaInstituteName === undefined ||
      CanadaInstituteName.length === 0
    ) {
      setErrorMsg("Canada institute name is required");
      setError(7);
    } else if (CanadaStudyName === undefined || CanadaStudyName.length === 0) {
      setErrorMsg("Program of study is required"); // Corrected the error message
      setError(8);
    } else if (ApplyingCountry === undefined || ApplyingCountry.length === 0) {
      setErrorMsg("Country name is required");
      setError(9);
    } else if (futureGoal === undefined || futureGoal.length === 0) {
      setErrorMsg("Country name is required");
      setError(10);
    } else if (
      isNaN(EnglishScoreListening) ||
      parseInt(EnglishScoreListening) < 0
    ) {
      setErrorMsg("Listening score should be >= 0");
      setError(11);
    } else if (
      isNaN(EnglishScoreReading) ||
      parseInt(EnglishScoreReading) < 0
    ) {
      setErrorMsg("Reading score should be >= 0");
      setError(12);
    } else if (
      isNaN(EnglishScoreSpeaking) ||
      parseInt(EnglishScoreSpeaking) < 0
    ) {
      setErrorMsg("Speaking score should be >= 0");
      setError(13);
    } else if (
      isNaN(EnglishScoreWritting) ||
      parseInt(EnglishScoreWritting) < 0
    ) {
      setErrorMsg("Writing score should be >= 0");
      setError(14);
    } else {
      setError(-1);
    }
    if (Email === undefined || Email.length === 0) {
      setErrorMsg("Email is required");
      setError(0);
    } else if (!emailRegex.test(Email)) {
      setError(0);
      setErrorMsg("Please enter a valid email");
    } else if (Name === undefined || Name.length === 0) {
      setErrorMsg("Name is required");
      setError(1);
    } else if (Name.length < 2) {
      setError(1);
      setErrorMsg("Name should be at least two characters");
    } else if (Age === undefined || Age.length === 0) {
      setErrorMsg("Age is required");
      setError(2);
    } else if (isNaN(Age) || parseInt(Age) <= 0) {
      setError(2);
      setErrorMsg("Age should be a positive number");
    } else if (HighLevelEducation === undefined || HighLevelEducation === "") {
      setErrorMsg("Please choose an option for education");
      setError(3);
    } else if (InstituteName === undefined || InstituteName.length === 0) {
      setErrorMsg("Institute name is required");
      setError(4);
    } else if (CurrentStudy === undefined || CurrentStudy.length === 0) {
      setErrorMsg("Current study is required");
      setError(5);
    } else if (ExpirenceDetail === undefined || ExpirenceDetail.length === 0) {
      setError(6);
      setErrorMsg("Experience details are required");
    } else if (
      CanadaInstituteName === undefined ||
      CanadaInstituteName.length === 0
    ) {
      setErrorMsg("Canada institute name is required");
      setError(7);
    } else if (CanadaStudyName === undefined || CanadaStudyName.length === 0) {
      setErrorMsg("Program of study is required");
      setError(8);
    } else if (ApplyingCountry === undefined || ApplyingCountry.length === 0) {
      setErrorMsg("Country name is required");
      setError(9);
    } else if (futureGoal === undefined || futureGoal.length === 0) {
      setErrorMsg("Future goal is required"); // Corrected the error message
      setError(10);
    } else if (
      isNaN(EnglishScoreListening) ||
      parseInt(EnglishScoreListening) < 0
    ) {
      setErrorMsg("Listening score should be >= 0");
      setError(11);
    } else if (
      isNaN(EnglishScoreReading) ||
      parseInt(EnglishScoreReading) < 0
    ) {
      setErrorMsg("Reading score should be >= 0");
      setError(12);
    } else if (
      isNaN(EnglishScoreSpeaking) ||
      parseInt(EnglishScoreSpeaking) < 0
    ) {
      setErrorMsg("Speaking score should be >= 0");
      setError(13);
    } else if (
      isNaN(EnglishScoreWritting) ||
      parseInt(EnglishScoreWritting) < 0
    ) {
      setErrorMsg("Writing score should be >= 0");
      setError(14);
    } else if (
      FirtYearTutionFee === undefined ||
      FirtYearTutionFee.length === 0
    ) {
      setErrorMsg("Please Attempt the quetion is required");
      setError(15);
    } else if (TutionFee === undefined || TutionFee.length === 0) {
      setErrorMsg("Please Attempt the quetion is required");
      setError(16);
    } else if (GIC === undefined || GIC.length === 0) {
      setErrorMsg("Please Attempt the quetion is required");
      setError(17);
    } else if (PayGiC === undefined || PayGiC.length === 0) {
      setErrorMsg("Please Attempt the quetion is required");
      setError(18);
    } else {
      setError(-1);
      setCanSubmit(true);
    }
  };

  const onhandlesubmit = () => {
    setSubmitCheck(true);
    if (CanSubmit) {
      setSend(true);
    }
  };

  useEffect(() => {
    if (SubmitCheck) {
      validate();
    }
  });

  return (
   
    <Box>
      <Navbar />
      <Container>
        <Box
          sx={{
            padding: "20px",
            display: "flex",
            gap: 1,
            alignItems: "center",
          }}
        >
          {user ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography sx={{ fontWeight: "600" }}>{user.email}</Typography>
              <Box
                component={"span"}
                sx={{ display: { sm: "block", xs: "none", md: "block" } }}
              >
                <Button
                  onClick={handleSignin}
                  style={{
                    padding: "0px",
                    textDecoration: "none",
                    color: "#3374ff",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "15px",
                  }}
                >
                  switch account <SwapVertRoundedIcon />
                </Button>
              </Box>
              <IconButton
                onClick={handleSignin}
                sx={{
                  color: "#3374ff",
                  display: { sm: "none", xs: "block", md: "none" },
                }}
              >
                <SwapVertRoundedIcon />
              </IconButton>
            </Box>
          ) : (
            <></>
          )}
        </Box>
        <Dialog open={dilog}>
          <DialogContent sx={{ gap: 1 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "#66AB33",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <GppMaybeIcon sx={{ fontSize: "50px" }} />
              <Typography sx={{ fontSize: "20px ", fontWeight: "800" }}>
                Submission requires authentication.{" "}
              </Typography>
              <Typography sx={{ fontSize: "20px ", fontWeight: "800" }}>
                Please sign in to proceed.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "10px 0px",
              }}
            >
              <Box
                componet="span"
                sx={{
                  width: "30%",
                  height: "2px",
                  padding: "1px",
                  background: "#CBCBCB",
                }}
              />
              <Typography
                sx={{
                  fontSize: "15px ",
                  width: "40%",
                  fontWeight: "800",
                  textAlign: "center",
                  color: "#565656",
                }}
              >
                Sign in with
              </Typography>
              <Box
                componet="span"
                sx={{
                  width: "30%",
                  height: "2px",
                  padding: "1px",
                  background: "#CBCBCB",
                }}
              />
            </Box>

            <Button
              onClick={handleSignin}
              fullWidth
              sx={{ gap: 1 }}
              color="error"
              variant="outlined"
            >
              <GoogleIcon />
            </Button>
          </DialogContent>
        </Dialog>
        <Grid container spacing={2} padding={"0px 0px 50px 0px"}>
          <Grid item md={6} xs={12} sm={12}>
            {" "}
            <CustominputBox
              error={Error === 0}
              errorMsg={errorMsg}
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder={"Your Email Goes here"}
              label={"Email"}
              input
            />
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
            {" "}
            <CustominputBox
              error={Error === 1}
              errorMsg={errorMsg}
              value={Name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder={"Your Answer"}
              label={"Full Name"}
              input
            />
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
            {" "}
            <CustominputBox
              error={Error === 2}
              errorMsg={errorMsg}
              value={Age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
              placeholder={"Your Answer"}
              label={"Age"}
              input
            />
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
            {" "}
            <CustominputBox
              error={Error === 3}
              errorMsg={errorMsg}
              value={HighLevelEducation}
              onChange={(e) => {
                setHighLevelEducation(e.target.value);
              }}
              placeholder={"Your Answer"}
              label={"Highest Level of Education"}
              needList
              data={[
                "Grade 12",
                "Diploma",
                "Bachelors Degree",
                "Master Degree",
                "PhD",
              ]}
            />
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
            {" "}
            <CustominputBox
              error={Error === 4}
              value={InstituteName}
              errorMsg={errorMsg}
              onChange={(e) => {
                setInstituteName(e.target.value);
              }}
              placeholder={"Your Answer"}
              label={
                "Institute where you completed your highest level of education"
              }
              input
            />
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
            {" "}
            <CustominputBox
              error={Error === 5}
              value={CurrentStudy}
              errorMsg={errorMsg}
              onChange={(e) => {
                setCurrentStudy(e.target.value);
              }}
              placeholder={"Your Answer"}
              label={"What did you study"}
              input
            />
          </Grid>
          <Grid item md={12} xs={12} sm={12}>
            {" "}
            <CustominputBox
              error={Error === 6}
              value={ExpirenceDetail}
              errorMsg={errorMsg}
              onChange={(e) => {
                setExpirenceDetail(e.target.value);
              }}
              placeholder={"Your Answer"}
              label={"Do you have any relevant work experience?"}
              component={
                <Box
                  sx={{ dipslay: "flex", flexDirection: "column", gap: "20px" }}
                >
                  <Typography sx={{ fontSize: "13px", padding: "10px 5px" }}>
                    Write None if no work experience. Provide the following
                    details if yes:
                  </Typography>
                  <Typography sx={{ fontSize: "13px" }} padding={"0px 20px"}>
                    1. Job Title{" "}
                  </Typography>
                  <Typography sx={{ fontSize: "13px" }} padding={"0px 20px"}>
                    2. Company Name{" "}
                  </Typography>
                  <Typography sx={{ fontSize: "13px" }} padding={"0px 20px"}>
                    3. Job duties{" "}
                  </Typography>

                  <Typography sx={{ fontSize: "13px", padding: "10px 5px" }}>
                    {" "}
                    Sample Answer: I worked as a Sales Manager at Effizient
                    Immigration Inc from Jan 2022 till Feb 2023. In this role, I
                    managed sales operations, reaching out to leads, lead the
                    outreach program, ensured meeting monthly targets.
                  </Typography>
                </Box>
              }
              textfilled
            />
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
            {" "}
            <CustominputBox
              error={Error === 7}
              errorMsg={errorMsg}
              value={CanadaInstituteName}
              onChange={(e) => {
                setCanadaInstituteName(e.target.value);
              }}
              placeholder={"Your Answer"}
              label={"What institute did you get admitted to in Canada?"}
              input
            />
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
            {" "}
            <CustominputBox
              error={Error === 8}
              errorMsg={errorMsg}
              value={CanadaStudyName}
              onChange={(e) => {
                setCanadaStudyName(e.target.value);
              }}
              placeholder={"Your Answer"}
              label={"What is your program of study in Canada?"}
              input
            />
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
            {" "}
            <CustominputBox
              error={Error === 9}
              errorMsg={errorMsg}
              value={ApplyingCountry}
              onChange={(e) => {
                setApplyingCountry(e.target.value);
              }}
              placeholder={"Your Answer"}
              label={"Which country are you applying from?"}
              input
            />
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
            {" "}
            <CustominputBox
              error={Error === 10}
              errorMsg={errorMsg}
              value={futureGoal}
              onChange={(e) => {
                setfutureGoal(e.target.value);
              }}
              placeholder={"Your Answer"}
              label={"What are your future goals?"}
              input
            />
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
            {" "}
            <CustominputBox
              error={Error === 11}
              errorMsg={errorMsg}
              value={EnglishScoreListening}
              onChange={(e) => {
                setEnglishScoreListening(e.target.value);
              }}
              placeholder={"Your Answer"}
              label={"English Scores - Listening"}
              input
            />
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
            {" "}
            <CustominputBox
              error={Error === 12}
              errorMsg={errorMsg}
              value={EnglishScoreReading}
              onChange={(e) => {
                setEnglishScoreReading(e.target.value);
              }}
              placeholder={"Your Answer"}
              label={"English Scores - Reading"}
              input
            />
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
            {" "}
            <CustominputBox
              error={Error === 13}
              errorMsg={errorMsg}
              value={EnglishScoreSpeaking}
              onChange={(e) => {
                setEnglishScoreSpeaking(e.target.value);
              }}
              placeholder={"Your Answer"}
              label={"English Scores - Speaking"}
              input
            />
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
            {" "}
            <CustominputBox
              error={Error === 14}
              errorMsg={errorMsg}
              value={EnglishScoreWritting}
              onChange={(e) => {
                setEnglishScoreWritting(e.target.value);
              }}
              placeholder={"Your Answer"}
              label={"English Scores - Writing"}
              input
            />
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
            {" "}
            <CustominputBox
              error={Error === 15}
              errorMsg={errorMsg}
              value={FirtYearTutionFee}
              onChange={(e) => {
                setFirtYearTutionFee(e.target.value);
              }}
              placeholder={"Your Answer"}
              label={"Did you pay your first year tuition?"}
              needRadio
              data={["Yes", "No"]}
            />
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
            {" "}
            <CustominputBox
              error={Error === 16}
              errorMsg={errorMsg}
              value={TutionFee}
              onChange={(e) => {
                setTutionFee(e.target.value);
              }}
              placeholder={"Your Answer"}
              label={"How much tuition fee did you pay?"}
              input
            />
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
            {" "}
            <CustominputBox
              error={Error === 17}
              errorMsg={errorMsg}
              value={GIC}
              onChange={(e) => {
                setGIC(e.target.value);
              }}
              placeholder={"Your Answer"}
              label={"Did you do a GIC?"}
              needRadio
              data={["Yes", "No"]}
            />
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
            {" "}
            <CustominputBox
              error={Error === 18}
              errorMsg={errorMsg}
              value={PayGiC}
              onChange={(e) => {
                setPayGiC(e.target.value);
              }}
              placeholder={"Your Answer"}
              label={"How much did you pay towards GIC?"}
              input
            />
          </Grid>
        </Grid>

        <Divider />
        <Box sx={{ padding: "20px 0px", display: "flex", gap: 1 }}>
          <Button color="primary" variant="contained" onClick={onhandlesubmit}>
            Submit
          </Button>
          <Button color="primary" variant="outlined" onClick={ClearForm}>
            Clear Form
          </Button>
        </Box>
        <Dialog
          open={send}
          onClose={() => {
            setSend(false);
          }}
        >
          <DialogContent sx={{ textAlign: "center" }}>
            <ForwardToInboxIcon
              sx={{ fontSize: "30px", fontWeight: "700", color: "#66AB33" }}
            />
            <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
              Your Response is submitted
            </Typography>
            <Typography
              sx={{ fontSize: "15px", fontWeight: "700", color: "#3374ff" }}
            >
              Check your mail
            </Typography>
            <Typography
              sx={{ fontSize: "13px", fontWeight: "700", color: "#3374ff" }}
            >
              {user ? user.email : ""}
            </Typography>
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
}
