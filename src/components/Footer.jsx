import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div>
        <h3>Acerca de</h3>
        <p>Información sobre nuestra empresa.</p>
      </div>
      <div>
        <h3>Ayuda</h3>
        <p>Preguntas frecuentes y soporte.</p>
      </div>
      <div>
        <h3>Trabajo</h3>
        <p>Oportunidades de empleo y carreras.</p>
      </div>
      <div>
        <h3>Directrices de la comunidad</h3>
        <p>Normas y reglas para la participación en la comunidad.</p>
      </div>
      <div>
        <h3>Condiciones de uso</h3>
        <p>Detalles sobre el uso de nuestro sitio web.</p>
      </div>
      <div>
        <h3>Privacidad</h3>
        <p>Nuestra política de privacidad.</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  padding: "2rem",
  display: "flex",
  justifyContent: "space-around",
  position: "fixed",
  bottom: 0,
  width: "100%",
};

export default Footer;
