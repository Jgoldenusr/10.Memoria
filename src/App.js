import "./custom-styles/custom-styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Stack from "react-bootstrap/Stack";
import React, { useState, useEffect } from "react";
import { FlagsGrid, Header, Score, Footer } from "./components/components.js";
import uniqid from "uniqid";

const flagCodes = [
  "AD",
  "AE",
  "AF",
  "AG",
  "AI",
  "AL",
  "AM",
  "AN",
  "AO",
  "AQ",
  "AR",
  "AS",
  "AT",
  "AU",
  "AW",
  "AX",
  "AZ",
  "BA",
  "BB",
  "BD",
  "BE",
  "BF",
  "BG",
  "BH",
  "BI",
  "BJ",
  "BL",
  "BM",
  "BN",
  "BO",
  "BR",
  "BS",
  "BT",
  "BW",
  "BY",
  "BZ",
  "CA",
  "CC",
  "CD",
  "CF",
  "CG",
  "CH",
  "CI",
  "CK",
  "CL",
  "CM",
  "CN",
  "CO",
  "CR",
  "CT",
  "CU",
  "CV",
  "DE",
  "DJ",
  "DK",
  "DM",
  "DO",
  "DZ",
  "EC",
  "EE",
  "EG",
  "EH",
  "ER",
  "ES",
  "ET",
  "EU",
  "FI",
  "FJ",
  "FK",
  "FM",
  "FO",
  "FR",
  "GA",
  "GB",
  "GD",
  "GE",
  "GG",
  "GH",
  "GI",
  "GL",
  "GM",
  "GN",
  "GQ",
  "GR",
  "GS",
  "GT",
  "GU",
  "GW",
  "GY",
  "HK",
  "HN",
  "HR",
  "HT",
  "HU",
  "IC",
  "ID",
  "IE",
  "IL",
  "IM",
  "IN",
  "IQ",
  "IR",
  "IS",
  "IT",
  "JE",
  "JM",
  "JO",
  "JP",
  "KE",
  "KG",
  "KH",
  "KI",
  "KM",
  "KN",
  "KP",
  "KR",
  "KW",
  "KY",
  "KZ",
  "LA",
  "LB",
  "LC",
  "LI",
  "LK",
  "LR",
  "LS",
  "LT",
  "LU",
  "LV",
  "LY",
  "MA",
  "MC",
  "MD",
  "ME",
  "MF",
  "MG",
  "MH",
  "MK",
  "ML",
  "MM",
  "MN",
  "MO",
  "MP",
  "MQ",
  "MR",
  "MS",
  "MT",
  "MU",
  "MV",
  "MW",
  "MX",
  "MY",
  "MZ",
  "NA",
  "NC",
  "NE",
  "NF",
  "NG",
  "NI",
  "NL",
  "NO",
  "NP",
  "NR",
  "NU",
  "NZ",
  "OM",
  "PA",
  "PE",
  "PF",
  "PG",
  "PH",
  "PK",
  "PL",
  "PN",
  "PR",
  "PS",
  "PT",
  "PW",
  "PY",
  "QA",
  "RE",
  "RO",
  "RS",
  "RU",
  "RW",
  "SA",
  "SB",
  "SC",
  "SD",
  "SE",
  "SG",
  "SH",
  "SI",
  "SK",
  "SL",
  "SM",
  "SN",
  "SO",
  "SR",
  "SS",
  "ST",
  "SV",
  "SX",
  "SY",
  "SZ",
  "TC",
  "TD",
  "TF",
  "TG",
  "TH",
  "TJ",
  "TK",
  "TL",
  "TM",
  "TN",
  "TO",
  "TR",
  "TT",
  "TV",
  "TW",
  "TZ",
  "UA",
  "UG",
  "US",
  "UY",
  "UZ",
  "VA",
  "VC",
  "VE",
  "VG",
  "VI",
  "VN",
  "VU",
  "WF",
  "WS",
  "YE",
  "YT",
  "ZA",
  "ZM",
  "ZM",
];

function App() {
  const [currentFlag, setCurrentFlag] = useState(undefined);
  const [flags, setFlags] = useState([]);
  const [clickedFlags, setclickedFlags] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [maximumScore, setMaximumScore] = useState(0);

  const randomChoice = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const randomizeFlags = function () {
    const MAX_FLAGS = 15;
    let flagArr = [];
    for (let i = 0; i < MAX_FLAGS; i++) {
      flagArr.push({
        code: flagCodes[randomChoice(0, 240)],
        id: uniqid(),
      });
    }
    setFlags(flagArr);
  };

  const onFlagClick = function (e) {
    let selectedFlag = e.target.alt;
    setCurrentFlag(selectedFlag);
  };

  useEffect(() => {
    if (currentFlag) {
      if (clickedFlags.find((flagName) => flagName === currentFlag)) {
        if (currentScore > maximumScore) setMaximumScore(currentScore);
        setCurrentScore(0);
        setclickedFlags([]);
        randomizeFlags();
      } else {
        setclickedFlags([...clickedFlags, currentFlag]);
        setCurrentScore(currentScore + 1);
        randomizeFlags();
      }
    } else randomizeFlags();
  }, [currentFlag]);

  return (
    /* jshint ignore:start */
    <Stack direction="vertical" className="min-vh-100 TenbyFive">
      <Header title="Memoria" />
      <Score currentScore={currentScore} maximumScore={maximumScore} />
      <FlagsGrid evtListener={onFlagClick} flagsArray={flags} />
      <Footer />
    </Stack>
    /* jshint ignore:end */
  );
}

export default App;
