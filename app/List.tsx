import Link from "next/link";

import { Annuncio } from "../types/Annuncio";

interface Props {
  annunci: Partial<Annuncio>[];
}

const List: React.FC<Props> = ({ annunci = [] }) => {
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {annunci.map((annuncio) => (
        <li
          key={annuncio.id}
          className="flex flex-col justify-between items-start bg-tomasi-red rounded-2xl h-48 p-6"
        >
          <p className="text-white font-bold text-2xl">{annuncio.annuncio}</p>

          <Link
            href="/annuncio/[id]"
            as={`/annuncio/${annuncio.id}`}
            className="bg-white py-2 px-4 rounded-lg font-semibold text-sm"
          >
            Leggi di più
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default List;
