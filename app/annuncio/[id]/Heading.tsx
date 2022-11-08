import { Annuncio } from "../../../types/Annuncio";
import { Reparto } from "../../../types/Reparto";

interface Props {
  annuncio: Annuncio;
  reparto?: Reparto;
}

const Heading: React.FC<Props> = ({ annuncio, reparto }) => {
  return (
    <div>
      <h1 className="font-bold text-3xl">{annuncio.annuncio}</h1>
      <div className="inline-block bg-tomasi-red px-2 py-1 rounded">
        <p className="text-white font-semibold text-xs uppercase">
          Reparto {reparto?.reparto}
        </p>
      </div>
    </div>
  );
};

export default Heading;
