import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
  <div>
    <h3>Acerca de</h3>
    <p>Observatorio de la Biodiversidad Animal</p>
    <p>Proyecto multidisciplinario de la FIEC, FADCOM, FCV</p>
  </div>
  <div>
    <h3>Colaboradores</h3>
    <p>Facultad de Ingeniería en Electricidad y Computación (FIEC)</p>
    <p>Facultad de Artes y Diseño de la Comunicación (FADCOM)</p>
    <p>Facultad de Ciencias de la Vida (FCV)</p>
    <p>Participantes externos y tutores</p>
  </div>
  <div>
    <h3>Recursos</h3>
    <p>Documentación y publicaciones</p>
    <p>Enlaces a investigaciones y resultados</p>
  </div>
  <div>
    <h3>Contacto</h3>
    <p>Correo electrónico: info@observatoriobiodiversidad.com</p>
    <p>Teléfono: [Número de contacto]</p>
  </div>
  <div>
    <h3>Redes Sociales</h3>
    <p>Síguenos en [enlaces a redes sociales]</p>
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
