import React from "react";
import styled from "styled-components";
import { useForm } from "../DatosUsuario/context.js";

import {Box, Typography } from "@mui/material";

const Img = styled.img`
  width: 70%;
`;

const Complete = () => {
  const { datos, documento, telefono, direccion } = useForm();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4">!Gracias por tu registro¡</Typography>
      <Img src="/complete.png" />
      <p>Nombre y Apellido: {datos.value}</p>
      <p>Nro° Documento: {documento.value}</p>

      <p>Telefono: {telefono.value}</p>
      <p>Direccion: {direccion.value}</p>
    </Box>
  );
};

export default Complete;
