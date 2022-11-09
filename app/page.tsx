import Heading from "./Heading";
import PosizioniAperte from "./PosizioniAperte";
import List from "./List";

import { directusAPI } from "../services/directus";

import { Annuncio, Status } from "../types/Annuncio";

interface AnnunciResponse {
  data: Partial<Annuncio>[];
}

async function Annunci() {
  const { data } = await directusAPI.get<AnnunciResponse>(
    `/items/annunci?fields=id,annuncio&filter[status]=${Status.published}`
  );

  return (
    <main className="max-w-5xl mx-auto px-4 lg:p-0 my-10">
      <Heading />

      <PosizioniAperte>
        <List annunci={data.data} />
      </PosizioniAperte>
    </main>
  );
}

export const revalidate = 0;

export default Annunci;
