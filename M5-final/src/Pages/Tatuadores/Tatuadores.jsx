import React from "react";
import "./tatuadores.css"
import {useState, useEffect} from 'react'
import axios from 'axios'

export default function Tatuadores() {
    const [data, setData] = useState([])

    useEffect(() => {
      axios.get(`https://m5-tattoo.herokuapp.com/catalogo`)
        .then(resposta => {
          setData(resposta.data)
        })
        .catch(error => {
          console.log(error)
        })
    }, [])

    return (  
        <div className='divPrincipal'>
          <div className="divSuperior">
            <h1 className='titulo'>Tatuadoeres</h1>
          </div>
          <div>
            </div>
          </div>

          
      )
    }


