export enum Status {
  published = "published",
  draft = "draft",
  archived = "archived",
}

export interface Annuncio {
  id: number;
  status: Status;
  annuncio: string;
  descrizione_annuncio: string;
  data_inizio: string;
  data_fine: string;
  note: string;
  reparto: number;
}
