import React, { useContext } from "react";

import { Button } from "@mui/material";
import dataContext from "../Context/DataContext";

function Content() {
  const { res } = useContext(dataContext);

  return (
    <div className=" h-full w-full px-40 py-10 overflow-auto">
      <p className=" text-left  text-white text-lg">{res}</p>
    </div>
  );
}

export default Content;
