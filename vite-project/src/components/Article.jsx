import React from "react";

export const Article = (props) => {
  const lenguajes = props.datos;

  return (
    <div className="container mt-4">
      <div className="row">
        {lenguajes.map((lang) => (
          <div className="col-12 col-sm-6 col-md-4 mb-4" key={lang.nombre}>
            <div className="card  text-center">
              <img
                src={lang.imagen}
                className="card-img-top"
                alt={lang.nombre}
              />
              <div className="card-body">
                <h5 className="card-title">{lang.nombre}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
