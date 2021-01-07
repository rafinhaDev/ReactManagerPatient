
import React, {Fragment, useState} from 'react';

const Forumulario = () => {

    //Create State

    const [cita, setCita] = useState({
        mascota="",
        propietario="",
        fecha="",
        hora="",
        sintomas=""
    })



    return (   
        <Fragment >
            <h2>Crear Cita</h2>
            <form action="">
                <label >Pet name</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Name Pet ej. Fofy"
                    />
                     <label >Master Name</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Master Name"
                    />
                 <label >Date</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                  />
                   <label >Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                 />

                <label >Sintomas</label>
                <textarea
                 className="u-full-width"
                 name="sintomas">

                </textarea>

                <button type="button"
                className="u-full-width button-primary">
                Agregar Cita
                </button>


            </form>

        </Fragment>
     );
}
 
export default Forumulario;