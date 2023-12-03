import TextField from '@mui/material/TextField';

export default function Home() {
  return (
      <div className='flex justify-center w-full mt-5'>
          <div className='grid gap-y-8'>
              <div className='grid gap-x-24 grid-cols-3'>
                  <TextField
                      label="Nombres"
                      id="outlined-size-small"
                      size="small"
                  />
                  <TextField
                      label="Formacion Academica"
                      id="outlined-size-small"
                      size="small"
                  />
                  <TextField
                      label="Grupo Etnico"
                      id="outlined-size-small"
                      size="small"
                  />
              </div>
              <div className='grid gap-x-24 grid-cols-3'>
                  <TextField
                      label="Apellidos"
                      id="outlined-size-small"
                      size="small"
                  />
                  <TextField
                      label="Nacionalidad"
                      id="outlined-size-small"
                      size="small"
                  />
                  <TextField
                      label="Sexo"
                      id="outlined-size-small"
                      size="small"
                  />
              </div>
              <div className='grid gap-x-24 grid-cols-3'>
                  <TextField
                      label="Grupo Prioritario"
                      id="outlined-size-small"
                      size="small"
                  />
                  <TextField
                      label="Tipo Cuarto Nivel"
                      id="outlined-size-small"
                      size="small"
                  />
              </div>
              <div className='grid gap-x-24 grid-cols-3'>
                  <TextField
                      label="Fecha de Nacimiento"
                      id="outlined-size-small"
                      size="small"
                  />
                  <TextField
                      label="Migrante Retornado"
                      id="outlined-size-small"
                      size="small"
                  />
                  <TextField
                      label="Titulo Academico"
                      id="outlined-size-small"
                      size="small"
                  />
              </div>
              <div className='grid gap-x-24 grid-cols-4'>
                  <TextField
                      label="Localidad Asociada"
                      id="outlined-size-small"
                      size="small"
                  />
                  <TextField
                      label="Localidad Laboral"
                      id="outlined-size-small"
                      size="small"
                  />
                  <TextField
                      label="Provincia"
                      id="outlined-size-small"
                      size="small"
                  />
                  <TextField
                      label="Canton"
                      id="outlined-size-small"
                      size="small"
                  />
              </div>
              <div className='grid gap-x-24 grid-cols-3'>
                  <TextField
                      label="Origen Fondo"
                      id="outlined-size-small"
                      size="small"
                  />
                  <TextField
                      label="Remuneracion"
                      id="outlined-size-small"
                      size="small"
                  />
                  <TextField
                      label="Fondos"
                      id="outlined-size-small"
                      size="small"
                  />
              </div>
              <div className='grid gap-x-24 grid-cols-3'>
                  <TextField
                      label="Telefono Institucional"
                      id="outlined-size-small"
                      size="small"
                  />
                  <TextField
                      label="Correo Institucional"
                      id="outlined-size-small"
                      size="small"
                  />
                  <TextField
                      label="Viatico Recidencial"
                      id="outlined-size-small"
                      size="small"
                  />
              </div>
              <div className='grid gap-x-24 grid-cols-3'>
                  <TextField
                      label="Extencion Institucional"
                      id="outlined-size-small"
                      size="small"
                  />
              </div>
              <div className='grid gap-x-24 grid-cols-3'>
                  <TextField
                      label="Puesto"
                      id="outlined-size-small"
                      size="small"
                  />
                  <TextField
                      label="Fecha de Ingreso"
                      id="outlined-size-small"
                      size="small"
                  />
                  <TextField
                      label="Numero de Umposiciones"
                      id="outlined-size-small"
                      size="small"
                  />
              </div>
              <div className='grid gap-x-24 grid-cols-3'>
                  <TextField
                      label="Partida Ocupada"
                      id="outlined-size-small"
                      size="small"
                  />
              </div>
              <div className='grid gap-x-24 grid-cols-3'>
                  <TextField
                      label="Numero de Registro Senecyt"
                      id="outlined-size-small"
                      size="small"
                  />
                  <TextField
                      label="Actividad esigef"
                      id="outlined-size-small"
                      size="small"
                  />
                  <TextField
                      label="Proceso"
                      id="outlined-size-small"
                      size="small"
                  />
              </div>
          </div>
      </div>
  )
}
