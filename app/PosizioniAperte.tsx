import React from "react";

const PosizioniAperte: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="max-w-4xl mx-auto mt-16 space-y-10">
      <h2 className="font-bold text-4xl">Posizioni aperte</h2>

      {children}
    </div>
  );
};

export default PosizioniAperte;
