import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import React from "react";
import { TextField, Button, Box } from "@mui/material";
import { useForm } from "./context.js";
import {validarDatos, validarDni, validarPhone ,validarDirec} from "./validaciones";

function DatosUsuario ({updateStep}){
  const { datos, setDatos, documento, setDocumento, telefono, setTelefono, direccion, setDireccion } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (datos.valid && documento.valid && telefono.valid && direccion.valid) {
      updateStep(1);
    } else {
      alert("Datos Incorrectos");
    }
  };
  return(
    <Box
    component="form"
    onSubmit={handleSubmit}
    >
    <Container className='container'  maxWidth="sm">
          <div className="title_header" role="alert">
          <h4 className="title">Formulario</h4>
          </div>
      <FormControl fullWidth>
        <TextField id="outlined-basic" label="Nombre y apellidos" 
        variant="outlined" margin="normal"
        type='text'
        required
        error={datos.valid===false}
        helperText={datos.valid===false && "El campo solo acepta letras"}
        value={datos.value}
        onChange={(e)=>{
          const datos=e.target.value;
          const valido=validarDatos(datos)
          setDatos({value:datos,valid:valido})}
          }
        />

      </FormControl>
      <FormControl fullWidth>
      <TextField
          label="Nro Documento"
          variant="outlined"
          margin="normal"
          type="number"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          required
          error={documento.valid===false}
          helperText={documento.valid===false && "Solo 8 números"}
          value={documento.value}
          onChange={(e)=>{
            const documento=e.target.value;
            const valido=validarDni(documento)
            setDocumento({value:documento,valid:valido})}
            }
        />

      </FormControl>
      <FormControl fullWidth>
        <TextField
            label="Telefono"
            variant="outlined"
            margin="normal"
            type="number"
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            required
            error={telefono.valid===false}
            helperText={telefono.valid===false && "Solo 9 números"}
            value={telefono.value}
            onChange={(e)=>{
            const telefono=e.target.value;
            const valido=validarPhone(telefono)
            setTelefono({value:telefono,valid:valido})}
            }
          />

      </FormControl>
      <FormControl fullWidth>
        <TextField id="outlined-basic" label="Direccion" 
        variant="outlined" margin="normal"
        required
        error={direccion.valid===false}
          helperText={direccion.valid===false && "Minimo 3 caracteres"}
          value={direccion.value}
          onChange={(e)=>{
            const direccion=e.target.value;
            const valido=validarDirec(direccion)
            setDireccion({value:direccion,valid:valido})}
            }
        />

      </FormControl>
      <Stack spacing={2} direction="row">
        <Button variant="contained" margin="normal" type="submit"
         >Guardar</Button>
      </Stack>
    </Container>
  </Box>
)
}
export default DatosUsuario;