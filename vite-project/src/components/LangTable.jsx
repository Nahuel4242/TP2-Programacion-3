import React from "react";

export const LangTable = (props) => {
  const datos = props.datos;
  console.log(datos);
  return (
    <>
      <div class="div-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>LENGUAJE</th>
              <th>TIPO</th>
              <th>DESCRIPCIÓN</th>
            </tr>
          </thead>
          <tbody>
            {datos.map((dato, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{dato.nombre}</td>
                <td>{dato.tipo}</td>
                <td>{dato.descripcion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
