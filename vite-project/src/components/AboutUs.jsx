import React from "react";

export const AboutUs = () => {
  let miembrosGrupo = [
    {
      name: "Lucas Guerrero",
      description:
        "Alumno de la UTN FRT, apasionado por la programación y el desarrollo web, además combate el crimen y da clases particulares de bodybuilding.",
      image: "https://i.imgur.com/TMi2Lsl.png",
    },
    {
      name: "Nahuel Juarez",
      description:
        "Alumno de la UTN FRT, amante de la tecnología y el desarrollo web, ademas combate el crimen y tiene una operacion ilegal de generacion de ingresos en World of Warcraft y Runescape.",
      image: "https://i.imgur.com/eRKdSPt.png",
    },
    {
      name: "Emiliano Sumerinde",
      description:
        "Alumno de la UTN FRT, entusiasta por la programación y el desarrollo web, además combate el crimen y tiene una granja que facturo mas de 30 millones en Stardew Valley.",
      image: "https://i.imgur.com/FC1Ew37.png",
    },
  ];

  return (
    <div className="aboutUs-container">
      <h1>About Us</h1>
      <div className="grupo-container">
        {miembrosGrupo.map((miembro, index) => (
          <div className="miembro-grupo" key={index}>
            <div className="image-container">
              <img src={miembro.image} alt={miembro.name} />
            </div>
            <div className="miembro-info">
              <h2>{miembro.name}</h2>
              <p>{miembro.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
