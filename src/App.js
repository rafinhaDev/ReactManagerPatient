
import React, {Fragment, useState} from 'react';
import Forumulario from './components/Formulario';



function App() {
  // arreglo de citas
  
  const [citas, setCitas] = useState([])
  
  // funcion que tome las citas actuales y agregue la nueva
  
  const crearCita = cita =>{
    setCitas({  ...citas,  cita
    })
  }

  return (
    <Fragment>

      <h1>Manager Pacient</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
             <Forumulario crearCita={crearCita} />
               
          </div>
          <div className="one-half column">
              2
          </div>
        
        </div>
      </div>

    </Fragment>
   
  );
}

export default App;
