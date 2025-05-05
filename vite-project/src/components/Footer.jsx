import React from "react";

export const Footer = () => {
  return (
    <div>
      <div className="d-flex align-items-center flex-column footer">
        <h3>Universidad Tecnológica Nacional</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890.1765239300495!2d-65.1991359942252!3d-26.81748537142603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c23b7b6e863%3A0x976c9adc5013942c!2sUniversidad%20Tecnol%C3%B3gica%20Nacional%20-%20Facultad%20Regional%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1746396709646!5m2!1ses-419!2sar"
          width="450"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
