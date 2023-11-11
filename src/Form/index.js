import React ,{useState} from "react";
import Stepper from "../Stepper";
import DatosUsuario from "./DatosUsuario";
import Complete from "./Complete";
import {FormSpace } from "./styles";
import Container from '@mui/material/Container';

const Form = () => {

    const [step,setStep] =useState(0);
    const updateStep = (step) =>{
      setStep(step)
    };
    const steps ={
        0:<DatosUsuario  updateStep={updateStep}/>,
        1:<Complete/>,
    };
    return (
      <Container className='container'  maxWidth="sm">
        <FormSpace>
          {step <2 && <Stepper step={step} /> }
          {steps[step]}
        </FormSpace>
      </Container>
    );
  };
  
  export default Form;
  