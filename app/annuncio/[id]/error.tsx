"use client";

import Link from "next/link";

function Error() {
  return (
    <main className="screen-height flex flex-col justify-center items-center">
      <h1 className="">Qualcosa e' andato storto...</h1>

      <Link href="/" className="block font-semibold underline">
        Torna alla lista
      </Link>
    </main>
  );
}

export default Error;
