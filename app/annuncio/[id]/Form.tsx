"use client";

import { useState } from "react";

import * as Yup from "yup";
import { useFormik } from "formik";

import Input from "../../../components/Input";
import { DirectusFile } from "../../../types/File";
import XIcon from "../../../components/XIcon";
import { directusAPI } from "../../../services/directus";

interface UploadFileResponse {
  data: DirectusFile;
}

interface Props {
  annuncioId: string;
}

const CandidaturaForm: React.FC<Props> = ({ annuncioId }) => {
  const [file, setFile] = useState<File | null>(null);

  const formik = useFormik({
    validateOnChange: false,
    initialValues: {
      nome: "",
      cognome: "",
      telefono: "",
      indirizzo_mail: "",
      data_di_nascita: "",
      citta_di_nascita: "",
      indirizzo_di_residenza: "",
    },
    validationSchema: Yup.object().shape({
      nome: Yup.string().required("Campo obbligatorio"),
      cognome: Yup.string().required("Campo obbligatorio"),
      indirizzo_mail: Yup.string().required("Campo obbligatorio"),
      data_di_nascita: Yup.string().required("Campo obbligatorio"),
      citta_di_nascita: Yup.string().required("Campo obbligatorio"),
      indirizzo_di_residenza: Yup.string().required("Campo obbligatorio"),
    }),
    async onSubmit(values) {
      let file_allegati;

      try {
        if (file) {
          const formData = new FormData();

          formData.append("file", file);

          const { data } = await directusAPI.post<UploadFileResponse>(
            "/files",
            formData
          );

          file_allegati = data.data.id;
        }

        await directusAPI.post("/items/candidature", {
          ...values,
          annuncio: annuncioId,
          file_allegati,
        });

        alert("Candidatura inviata");

        setFile(null);
        formik.resetForm();
      } catch (error) {
        alert("Qualcosa e' andato storto...");
      }
    },
  });

  return (
    <div className="border border-light-gray rounded-2xl p-6 md:p-12 mt-16">
      <h2 className="font-bold text-xl">
        Compila il modulo ed inviaci il tuo curriculum
      </h2>

      <form className="mt-6" onSubmit={formik.handleSubmit}>
        <div className="space-y-4">
          <div className="flex space-x-4 md:space-x-8">
            <Input
              name="nome"
              label="Nome"
              value={formik.values.nome}
              onChange={formik.handleChange}
              placeholder="Mario"
              error={formik.errors.nome}
            />

            <Input
              name="cognome"
              label="Cognome"
              value={formik.values.cognome}
              onChange={formik.handleChange}
              placeholder="Rossi"
              error={formik.errors.cognome}
            />
          </div>

          <div className="flex space-x-4 md:space-x-8">
            <Input
              name="telefono"
              label="Telefono Cellulare"
              value={formik.values.telefono}
              onChange={formik.handleChange}
              placeholder="310 1234564"
            />

            <Input
              type="email"
              name="indirizzo_mail"
              label="Email"
              value={formik.values.indirizzo_mail}
              onChange={formik.handleChange}
              placeholder="nome@tuamail.it"
              error={formik.errors.indirizzo_mail}
            />
          </div>

          <Input
            type="date"
            name="data_di_nascita"
            label="Data di nascita"
            value={formik.values.data_di_nascita}
            onChange={formik.handleChange}
            error={formik.errors.data_di_nascita}
          />

          <Input
            name="citta_di_nascita"
            label="Città di nascita"
            value={formik.values.citta_di_nascita}
            onChange={formik.handleChange}
            placeholder="Inserisci il tuo luogo di nascita"
            error={formik.errors.citta_di_nascita}
          />

          <Input
            name="indirizzo_di_residenza"
            label="Residenza"
            value={formik.values.indirizzo_di_residenza}
            onChange={formik.handleChange}
            placeholder="Inserisci il tuo comune di residenza"
            error={formik.errors.indirizzo_di_residenza}
          />
        </div>

        <div className="mt-6">
          {file ? (
            <div className="flex">
              <p className="truncate">{file.name}</p>
              <button onClick={() => setFile(null)}>
                <XIcon className="ml-2 h-6 w-6 hover:text-red-500" />
              </button>
            </div>
          ) : (
            <label className="bg-black text-white px-3 py-1.5 rounded-md font-semibold text-md cursor-pointer">
              Carica il tuo curriculum
              <input
                className="hidden"
                type="file"
                accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                onChange={(e) => setFile(e.target.files![0])}
              />
            </label>
          )}
        </div>

        <div className="mt-16">
          <button
            type="submit"
            className="bg-tomasi-red text-white px-6 py-4 rounded-md font-semibold text-md"
          >
            Invia la tua richiesta
          </button>
        </div>
      </form>
    </div>
  );
};

export default CandidaturaForm;
