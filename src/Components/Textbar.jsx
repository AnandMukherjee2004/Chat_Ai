import { Button } from "@mui/material";
import React from "react";
import { useContext } from "react";
import axios from "axios";
import SendIcon from "@mui/icons-material/Send";
import dataContextProvider from "../Context/DataContextProvider";
import dataContext from "../Context/DataContext";

function Textbar() {
  const { setQuestion, setRes, question, res } = useContext(dataContext);

  let getAns = async (e) => {
    e.preventDefault();
    let response = await axios({
      method: "POST",
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${
        import.meta.env.VITE_API_KEY
      }`,
      data: { contents: [{ parts: [{ text: question }] }] },
    });

    setRes(response.data.candidates[0].content.parts[0].text);
    console.log(res);
  };

  return (
    <>
      <div className=" flex text-center justify-center items-center">
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Message..."
          className=" px-8 py-2 text-left text-pretty rounded-[50px] w-[50vw] h-16 mr-3 bg-[#1E1F20] text-white"
        ></input>
        <Button
          variant="contained"
          color="secondary"
          onClick={getAns}
          className=" h-12 w-24 mt-0 "
        >
          <SendIcon />
        </Button>
      </div>
    </>
  );
}

export default Textbar;
