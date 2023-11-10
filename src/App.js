import './App.css';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import React,{ useState} from 'react';


function App() {
  const [datos,setDatos]= useState("")
  const [doc,setDoc]= useState("")
  const [phone ,setPhone]= useState("")
  const [direc,setDirec]= useState("")
  const [datosError,setDatosError]= useState("")
  const [docError,setDocError]= useState("")
  const [phoneError,setPhoneError]= useState("")
  const [direcError,setDirecError]= useState("")

  const dates=(e)=>{
    const value=e.target.value;
    const valid= /^[a-zA-Z\s]*$/g.test(value);
    const minValue=value.length>=5;
    setDatosError(!valid ? 1: !minValue ? 2 : 0)
    setDatos(value)
  }

  const documentos=(e)=>{
    const value=e.target.value;
    const entero = /^\d+$/.test(value);
    const valid= /^[0-9,$]*$/.test(value);

    setDocError(!valid ? 1: !entero ? 2:0)
    setDoc(value)
  }
  const telefono=(e)=>{
    const value=e.target.value;
    const entero = /^\d+$/.test(value);
    const valid= /^[0-9,$]*$/.test(value);

    setPhoneError(!valid ? 1: !entero ? 2:0)
    setPhone(value)
  }
  const direccion=(e)=>{
    const value=e.target.value;
    setDirecError(value<5 ? 1:0)
    setDirec(value)
  }

  const guardarClick = (e) => {
    e.preventDefault();
    console.log("Datos del Formulario:"
    ,datos,doc,phone,direc);
  }

  const errorMessagesDatos = {
    1: "El campo solo se puede incluir letras",
    2: "Mínimo 5 caracteres",
  };


  return (
    <div className="App">
      <header className="App-header">
        <Container className='container'  maxWidth="sm">
              <div className="title_header" role="alert">
              <h4 className="title">Formulario</h4>
              </div>
          <FormControl fullWidth>
            <TextField id="outlined-basic" label="Nombre y apellidos" 
            variant="outlined" margin="normal"
            type='text'
            onChange={dates}
            value={datos}
            required
            />
    {datosError > 0 && (
                <label className="text_error">
                  {errorMessagesDatos[datosError]}
                </label>
            )}
          </FormControl>
          <FormControl fullWidth>
            <TextField id="outlined-basic" label="Nro. Documento" 
            variant="outlined" margin="normal"
            onChange={documentos}
            value={doc}
            required
            />

          </FormControl>
          <FormControl fullWidth>
            <TextField id="outlined-basic" label="Telefono" 
            variant="outlined" margin="normal"
            onChange={telefono}
            value={phone}
            required
            />

          </FormControl>
          <FormControl fullWidth>
            <TextField id="outlined-basic" label="Direccion" 
            variant="outlined" margin="normal"
            onChange={direccion}
            value={direc}
            required
            />

          </FormControl>
          <Stack spacing={2} direction="row">
            <Button variant="contained" margin="normal"
              onClick={guardarClick} >Guardar</Button>
          </Stack>
        </Container>
      </header>
    </div>
  );
}

export default App;
