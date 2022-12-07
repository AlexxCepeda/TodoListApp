import React from "react"
import { Link } from "react-router-dom"

const NotFound = () =>
    <div>
        Ya buscamos por todos lados y no encontramos lo que buscas, lo sentimos!
        <br />
        Sugerimos ir a <Link to='/'>aquí</Link>
    </div>

export default NotFound