import { useState } from "react";
import axios from "axios";
import "./App.css";
import { Button } from "@mui/material";

function App() {
  const [question, setQuestion] = useState("");
  const [res, setRes] = useState("");

  let getAns = async () => {
    let response = await axios({
      method: "POST",
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${
        import.meta.env.VITE_API_KEY
      }`,
      data: { contents: [{ parts: [{ text: question }] }] },
    });

    setRes(response.data.candidates[0].content.parts[0].text);
  };

  return (
    <div className="">
      <h1 className=" font-semibold text-4xl mb-2">Chat Bot</h1>

      <div className=" flex text-center justify-center items-center mb-4">
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className=" px-5 py-3 text-left text-pretty border-black border-2 rounded-lg w-[50vw] h-12 mr-3"
        ></input>
        <Button
          variant="contained"
          color="secondary"
          onClick={getAns}
          className=" h-12 w-24 mt-0 "
        >
          Send
        </Button>
      </div>

      <p className=" text-left w-[80%]"> {res}</p>
    </div>
  );
}

export default App;
