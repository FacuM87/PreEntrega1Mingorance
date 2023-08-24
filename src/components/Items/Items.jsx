import { Link } from "react-router-dom"
import "./items.css"


// ESTE COMPONENTE ES EL "ItemList"

function Items({productos}) {
  return (
    <div className="container tarj-container justify-content-center">
            {productos.map((producto) =>
            // -- DE ACÁ PARA ABAJO SERÍA EL COMPONENTE "Item" -- 
                <div key={producto.id} className="tarjetas"> 
                    <div className="sizeImgItems"> 
                        <img src={producto.img} alt={producto.product} className="img-fluid"/>
                    </div>
                    <div className="bodyTarj">
                        <h6>{producto.product}</h6>
                        <p className="mb-0">Precio: ${producto.price}</p>
                        <p>{producto.category}</p>
                        <Link className="btn btn-primary" to={`/item/${producto.id}`}>Mas Info</Link>
                    </div>
                </div>
            // -- HASTA ACÁ SERÍA COMPONENTE "Item" -- //
              )                
            }
    </div>
  )
}

export default Items