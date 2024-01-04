import {useState} from "react";

export default function Form(){
    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')

    const validar = (event) => {
        event.preventDefault()
        if(!nombre){
            console.log('Nombre vacio')
            return
        }
    }

    return (
        <div>
            <form onSubmit={validar} action="">
                {nombre  ? <p>nombre correcto</p> : <p>Nombre incorrecto</p> }
                <br/>
                <input
                    placeholder="nombre"
                    type="text"
                    onChange={(e) => {
                        setNombre(e.target.value)
                    }}
                />
                <br/>
                <input
                    placeholder="edad"
                    type="text"
                    onChange={(e) => {
                        setEdad(e.target.value)
                    }}
                />
                <input type="submit"/>
            </form>
        </div>
    )
}
