import uuid from 'react-uuid'
import React, {Fragment, useState} from 'react';

const Forumulario = ({crearCita}) => {

    //Create State

    const [cita, setCita] = useState({
        mascota:"",
        propietario:"",
        fecha:"",
        hora:"",
        sintomas:""
    })

    const [error, setError] = useState(false)

    //funcion cada que el usuario escribe

    const actualizarState = e =>{ 
        setCita ({
            ...cita,
            [e.target.name] : e.target.value
        })
    }


    // Extraer valores

    const { mascota, propietario, fecha, hora, sintomas} = cita;

    //cuando presiona agregar Cita

    const submitCita = e  =>{
        e.preventDefault();

        //validar
        if (mascota.trim() ===''|| propietario.trim() ==='' || fecha.trim() ===''
        || hora.trim() ==='' || sintomas.trim() ==='') {
            setError(true)
            return;
        }

        //eliminar mensaje de validacion
        setError(false)

        //asignar ID
        cita.id = uuid();

        console.log(cita)

        //crear la cita
        crearCita(cita)

        //Reiniciar el Form

        setCita({
        mascota:"",
        propietario:"",
        fecha:"",
        hora:"",
        sintomas:""
        })
    }

    return (   
        <Fragment >
            <h2>Crear Cita</h2>
            {error ?  <p className="alerta-error">Todos los Campos son Obligatorios</p>  :null}
            <form onSubmit={submitCita}
            >
                <label >Pet name</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Name Pet ej. Fofy"
                    onChange={actualizarState}
                    value={mascota}
                    />
                     <label >Master Name</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Master Name"
                    onChange={actualizarState}
                    value={propietario}
                    />
                 <label >Date</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                  />
                   <label >Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                 />

                <label >Sintomas</label>
                <textarea
                 className="u-full-width"
                 name="sintomas"
                 onChange={actualizarState}
                 value={sintomas}
                 >

                </textarea>

                <button type="submit"
                className="u-full-width button-primary">
                Agregar Cita
                </button>


            </form>

        </Fragment>
     );
}
 
export default Forumulario;