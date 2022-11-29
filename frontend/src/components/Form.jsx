import React, { useState, useEffect } from "react";
import axios from "axios";
function Form() {
  const [data, setdata] = useState(""); //Input Sentence
  const [lan, setlan] = useState(""); // Selected Language
  const [resLang, setresLang] = useState("---"); //result language
  const supportedLanguages = [
    "af",
    "ak",
    "am",
    "ar",
    "as",
    "ay",
    "az",
    "be",
    "bg",
    "bho",
    "bm",
    "bn",
    "bs",
    "ca",
    "ceb",
    "ckb",
    "co",
    "cs",
    "cy",
    "da",
    "de",
    "doi",
    "dv",
    "ee",
    "el",
    "en",
    "en-US",
    "eo",
    "es",
    "et",
    "eu",
    "fa",
    "fi",
    "fr",
    "fy",
    "ga",
    "gd",
    "gl",
    "gn",
    "gom",
    "gu",
    "ha",
    "haw",
    "hi",
    "hmn",
    "hr",
    "ht",
    "hu",
    "hy",
    "id",
    "ig",
    "ilo",
    "is",
    "it",
    "iw",
    "ja",
    "jw",
    "ka",
    "kk",
    "km",
    "kn",
    "ko",
    "kri",
    "ku",
    "ky",
    "la",
    "lb",
    "lg",
    "ln",
    "lo",
    "lt",
    "lus",
    "lv",
    "mai",
    "mg",
    "mi",
    "mk",
    "ml",
    "mn",
    "mni-Mtei",
    "mr",
    "ms",
    "mt",
    "my",
    "ne",
    "nl",
    "no",
    "nso",
    "ny",
    "om",
    "or",
    "pa",
    "pl",
    "ps",
    "pt",
    "qu",
    "ro",
    "ru",
    "rw",
    "sa",
    "sd",
    "si",
    "sk",
    "sl",
    "sm",
    "sn",
    "so",
    "sq",
    "sr",
    "st",
    "su",
    "sv",
    "sw",
    "ta",
    "te",
    "tg",
    "th",
    "ti",
    "tk",
    "tl",
    "tr",
    "ts",
    "tt",
    "ug",
    "uk",
    "ur",
    "uz",
    "vi",
    "xh",
    "yi",
    "yo",
    "zh-CN",
    "zh-TW",
    "zu",
  ];
  function makePostRequest(path, queryObj) {
    axios.post(path, queryObj).then(
      (response) => {
        var result = response.data;
        console.log(result);
        setresLang(result.Result);
        console.log(resLang);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  let handleLangChange = (e) => {
    setlan(e.target.value);
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    let queryObj = { name: data, lang: lan };
    makePostRequest("http://localhost:5000/test", queryObj);
  };

  return (
    <>
      <div>
        <div className="container mt-3">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-6 justify-content-center">
              <form onSubmit={handleSubmit}>
                <label className="form-label">Text converter</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="enter sample text"
                  value={data}
                  onChange={(e) => setdata(e.target.value)}
                  required
                />
                <select onChange={handleLangChange} className="form-control">
                  <option value="select language"> --select language-- </option>
                  {supportedLanguages.map((lan) => (
                    <option value={lan} key={lan}>
                      {lan}
                    </option>
                  ))}
                </select>
                <p className="mt-2">
                  <span id="target language">Target text : {resLang}</span>
                </p>
                <button className="btn btn-primary mt-1">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
