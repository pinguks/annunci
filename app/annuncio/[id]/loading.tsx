"use client";

import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <main className="screen-height flex justify-center items-center">
      <ClipLoader color="#d2232a" />
    </main>
  );
};

export default Loading;
