import './App.css';
import Form from "./Form";
import { FormProvider } from "./Form/DatosUsuario/context.js";

function App() {
  return (
    <div className="App">
      <FormProvider>
        <Form />
      </FormProvider>
    </div>
  );
}

export default App;
