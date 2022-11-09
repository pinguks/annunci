import Link from "next/link";

import Heading from "./Heading";
import Form from "./Form";

import { Annuncio } from "../../../types/Annuncio";
import { Reparto } from "../../../types/Reparto";
import { directusAPI } from "../../../services/directus";

interface AnnuncoResponse {
  data: Annuncio;
}

interface RepartiResponse {
  data: Reparto[];
}

const Page = async ({ params }: { params: { id: string } }) => {
  const { data } = await directusAPI.get<AnnuncoResponse>(
    `/items/annunci/${params.id}`
  );

  // Non sono riuscito a capire come far popolare il campo `reparto` all'api `Annunci`,
  // quindi tiro giu' tutti i reparti
  const { data: reparti } = await directusAPI.get<RepartiResponse>(
    `/items/reparti`
  );

  const reparto = reparti.data.find(
    (reparto) => reparto.id === data.data.reparto
  );

  return (
    <main className="max-w-4xl mx-auto px-4 lg:p-0 my-10">
      <Heading annuncio={data.data} reparto={reparto} />

      <div
        className="mt-8 prose max-w-none"
        dangerouslySetInnerHTML={{ __html: data.data.descrizione_annuncio }}
      />

      <Form annuncioId={params.id} />

      <Link href="/" className="block font-semibold underline mt-16">
        Torna alla lista
      </Link>
    </main>
  );
};

// fa in modo che noon venga cache-ata la pagina, cosi' e' sempre dinamica
export const revalidate = 0;

export default Page;
