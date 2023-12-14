"use client"

import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseIcon from '@mui/icons-material/Close';
import React from "react";

export default function RegisterForm() {

    return (
        <div className='flex justify-center w-full my-10'>
            <div className='grid gap-y-8'>
                <div className='grid gap-y-8 m rounded border-2 border-gray-300 p-10'>
                    <div className='grid gap-x-24 grid-cols-3'>
                        <TextField
                            label="Nombres"
                            id="outlined-size-small"
                        />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Formacion Academica</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Age"
                                // onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>Ninguna</em>
                                </MenuItem>
                                <MenuItem value={1}>Opcion 1</MenuItem>
                                <MenuItem value={2}>Opcion 2</MenuItem>
                                <MenuItem value={3}>Opcion 3</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Grupo Etnico</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Age"
                                // onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>Ninguna</em>
                                </MenuItem>
                                <MenuItem value={1}>Opcion 1</MenuItem>
                                <MenuItem value={2}>Opcion 2</MenuItem>
                                <MenuItem value={3}>Opcion 3</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className='grid gap-x-24 grid-cols-3'>
                        <TextField
                            label="Apellidos"
                            id="outlined-size-small"

                        />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Nacionalidad</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Age"
                                // onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>Ninguna</em>
                                </MenuItem>
                                <MenuItem value={1}>Opcion 1</MenuItem>
                                <MenuItem value={2}>Opcion 2</MenuItem>
                                <MenuItem value={3}>Opcion 3</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Age"
                                // onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>Ninguna</em>
                                </MenuItem>
                                <MenuItem value={1}>Opcion 1</MenuItem>
                                <MenuItem value={2}>Opcion 2</MenuItem>
                                <MenuItem value={3}>Opcion 3</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className='grid gap-x-24 grid-cols-3'>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Grupo Prioritario</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Age"
                                // onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>Ninguna</em>
                                </MenuItem>
                                <MenuItem value={1}>Opcion 1</MenuItem>
                                <MenuItem value={2}>Opcion 2</MenuItem>
                                <MenuItem value={3}>Opcion 3</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Tipo Cuarto Nivel</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Age"
                                // onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>Ninguna</em>
                                </MenuItem>
                                <MenuItem value={1}>Opcion 1</MenuItem>
                                <MenuItem value={2}>Opcion 2</MenuItem>
                                <MenuItem value={3}>Opcion 3</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className='grid gap-x-24 grid-cols-3'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker label="Fecha de Nacimiento" />
                            </DemoContainer>
                        </LocalizationProvider>
                        <FormControlLabel
                            value="end"
                            control={<Switch color="primary" />}
                            label="Migrante Retornado"
                            labelPlacement="end"
                        />

                        <TextField
                            label="Titulo Academico"
                            id="outlined-size-small"

                        />
                    </div>
                </div>
                <div className='grid gap-y-8 m rounded border-2 border-gray-300 p-10'>
                    <div className='grid gap-x-10 grid-cols-4'>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Localidad Asociada</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Age"
                                // onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>Ninguna</em>
                                </MenuItem>
                                <MenuItem value={1}>Opcion 1</MenuItem>
                                <MenuItem value={2}>Opcion 2</MenuItem>
                                <MenuItem value={3}>Opcion 3</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Localidad Laboral</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Age"
                                // onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>Ninguna</em>
                                </MenuItem>
                                <MenuItem value={1}>Opcion 1</MenuItem>
                                <MenuItem value={2}>Opcion 2</MenuItem>
                                <MenuItem value={3}>Opcion 3</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Provincia</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Age"
                                // onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>Ninguna</em>
                                </MenuItem>
                                <MenuItem value={1}>Opcion 1</MenuItem>
                                <MenuItem value={2}>Opcion 2</MenuItem>
                                <MenuItem value={3}>Opcion 3</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Canton</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Age"
                                // onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>Ninguna</em>
                                </MenuItem>
                                <MenuItem value={1}>Opcion 1</MenuItem>
                                <MenuItem value={2}>Opcion 2</MenuItem>
                                <MenuItem value={3}>Opcion 3</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className='grid gap-y-8 m rounded border-2 border-gray-300 p-10'>
                    <div className='grid gap-x-24 grid-cols-3'>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Origen Fondo</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Age"
                                // onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>Ninguna</em>
                                </MenuItem>
                                <MenuItem value={1}>Opcion 1</MenuItem>
                                <MenuItem value={2}>Opcion 2</MenuItem>
                                <MenuItem value={3}>Opcion 3</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            label="Remuneracion"
                            id="outlined-size-small"
                        />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Fondos</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Age"
                                // onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>Ninguna</em>
                                </MenuItem>
                                <MenuItem value={1}>Opcion 1</MenuItem>
                                <MenuItem value={2}>Opcion 2</MenuItem>
                                <MenuItem value={3}>Opcion 3</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className='grid gap-y-8 m rounded border-2 border-gray-300 p-10'>
                    <div className='grid gap-x-24 grid-cols-3'>
                        <TextField
                            label="Telefono Institucional"
                            id="outlined-size-small"

                        />
                        <TextField
                            label="Correo Institucional"
                            id="outlined-size-small"

                        />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Viatico Recidencial</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Age"
                                // onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>Ninguna</em>
                                </MenuItem>
                                <MenuItem value={1}>Opcion 1</MenuItem>
                                <MenuItem value={2}>Opcion 2</MenuItem>
                                <MenuItem value={3}>Opcion 3</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className='grid gap-x-24 grid-cols-3'>
                        <TextField
                            label="Extencion Telefonica"
                            id="outlined-size-small"

                        />
                    </div>
                </div>
                <div className='grid gap-y-8 m rounded border-2 border-gray-300 p-10'>
                    <div className='grid gap-x-24 grid-cols-3'>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Puesto</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Age"
                                // onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>Ninguna</em>
                                </MenuItem>
                                <MenuItem value={1}>Opcion 1</MenuItem>
                                <MenuItem value={2}>Opcion 2</MenuItem>
                                <MenuItem value={3}>Opcion 3</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            label="Numero de Umposiciones"
                            id="outlined-size-small"

                        />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Partida Ocupada</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Age"
                                // onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>Ninguna</em>
                                </MenuItem>
                                <MenuItem value={1}>Opcion 1</MenuItem>
                                <MenuItem value={2}>Opcion 2</MenuItem>
                                <MenuItem value={3}>Opcion 3</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className='grid gap-x-24 grid-cols-3'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker label="Fecha de Ingreso" />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                </div>
                <div className='grid gap-y-8 m rounded border-2 border-gray-300 p-10'>
                    <div className='grid gap-x-24 grid-cols-3'>
                        <TextField
                            label="Numero de Registro Senecyt"
                            id="outlined-size-small"

                        />
                        <TextField
                            label="Actividad esigef"
                            id="outlined-size-small"

                        />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Proceso</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Age"
                                // onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>Ninguna</em>
                                </MenuItem>
                                <MenuItem value={1}>Opcion 1</MenuItem>
                                <MenuItem value={2}>Opcion 2</MenuItem>
                                <MenuItem value={3}>Opcion 3</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className='flex justify-center space-x-8 h-14 mt-10'>
                    <Button className='bg-red-500 w-1/3 space-x-2' variant="contained" color="error">
                        <CloseIcon/>
                        <a>Cancelar</a>
                    </Button>
                    <Button className='bg-green-700 w-1/3 space-x-2' variant="contained" color="success">
                        <CheckRoundedIcon/>
                        <a>Aceptar</a>
                    </Button>
                </div>
            </div>
        </div>
    )
}
