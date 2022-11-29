import axios from "axios";
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import StartChat from "./StartChat";

let endPoint = "http://localhost:5000";
let socket = io.connect(`${endPoint}`);

const Test = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [lan, setlan] = useState("en");
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

  useEffect(() => {
    //getMessages();
    console.log(messages);
  }, [messages.length]);

  const makePostRequest = (path, queryObj) => {
    axios.post(path, queryObj).then(
      (res) => {
        let result = res.data;
        console.log(result);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  //const getMessages = () =>{
  socket.on("message", (msg) => {
    let obj = { msg: msg };
    //makePostRequest("http://localhost:5000/test",obj);
    setMessages([...messages, msg]);
  });
  //}

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  let handleLangChange = (e) => {
    setlan(e.target.value);
  };
  const onClick = () => {
    let obj = { msg: message, lan: lan };
    if (message !== "") {
      socket.emit("message", obj);
      setMessage("");
    } else {
      alert("please add a msg");
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div class="card mt-3">
            <div class="card-header">
              <div className="row">
                <div className="col">
                  <strong>Chat Translation</strong>
                </div>
                <div className="col-3">
                  <select onChange={handleLangChange} className="form-control bg-primary text-white">
                    <option value="select language">{lan}</option>
                    {supportedLanguages.map((lan) => (
                      <option value={lan} key={lan}>
                        {lan}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div data-spy="scroll" className="scrollspy-example overflow-auto">
              <div className="card-body" style={{ height: "10rem" }}>
                {messages.length > 0 &&
                  messages.map((msg, idx) => (
                    <div key={idx}>
                      <p>{msg}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="card-header">
        <div className="d-flex justify-content-between">
          <div className="col-10">
            <input
              type=""
              name="message"
              value={message}
              onChange={(e) => onChange(e)}
              className="form-control"
              placeholder="Type your message"
            />
          </div>
          <div className="d-flex col justify-content-center">
            <button
              onClick={() => {
                onClick();
              }}
              className="d-flex btn btn-primary align-items-center"
            >
             send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
