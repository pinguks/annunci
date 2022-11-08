"use client";

import { ClipLoader } from "react-spinners";

import Heading from "./Heading";
import PosizioniAperte from "./PosizioniAperte";

const Loading = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 lg:p-0 my-10">
      <Heading />

      <PosizioniAperte>
        <div className="h-48 flex justify-center items-center">
          <ClipLoader color="#d2232a" />
        </div>
      </PosizioniAperte>
    </main>
  );
};

export default Loading;
