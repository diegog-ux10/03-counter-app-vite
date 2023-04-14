// import { Fragment } from "react"
import ProTypes, { string } from 'prop-types';

const imprimirEdad = (nacimiento, actual, hija) => actual - nacimiento

const frameworks = {
    javascript: ['React', 'Angular', 'Node.js'],
    PHP: ['Laravel', 'Wordpress']
}

const nombre = "Diego Granados"

const lenguajes = ['PHP', 'Javascript']

export const ImprimirNombre = ({esposa, edadEsposa, hija}) => {
    return (
        // <Fragment>
        <>
            <h1>{ nombre }</h1> 
            <h2>Lenguajes que sé</h2>            
            <h2>{ lenguajes }</h2>
            <h3>Edad: {imprimirEdad(1992, 2023)}</h3>
            <code>{JSON.stringify(frameworks)}</code>
            <h4>Mi esposa es: {esposa}</h4>
            <p>La edad de mi esposa es: {edadEsposa}</p>
            <p>Mi hija se llama: {hija}</p>
        </>
        // </Fragment>   
    )
}

// Protypes

ImprimirNombre.ProTypes = {
    esposa: ProTypes.string.isRequired,
    edadEsposa: ProTypes.number.isRequired,
}

// Default values on props

ImprimirNombre.defaultProps = {
    esposa: "Bella Rosales",
    edadEsposa: 0,
    hija: "Ariadna"
}
