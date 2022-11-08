"use client";

import { useRouter } from "next/navigation";

const Error = () => {
  const router = useRouter();
  return (
    <main className="screen-height flex flex-col justify-center items-center">
      <h1 className="">Qualcosa e' andato storto...</h1>

      <button
        className="block font-semibold underline"
        onClick={router.refresh}
      >
        Aggiorna la pagina
      </button>
    </main>
  );
};

export default Error;
