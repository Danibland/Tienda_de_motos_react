import React from "react";
import catalogostyle from "./catalogostyle.css";

function Catalogo() {
  return (
    <main id="catalogo" class="catalogo">  

    <div class="fila">  
        
        <div class="moto">  
            <img src="/assets/futsports-motorcycle.jpg" alt="Moto 1"/>  
            <h2>Moto Honda CB500F</h2>  
            <p>La Honda CB500F es una moto deportiva ideal para todos los días.</p>  
            <p class="precio">Precio: $6,500</p>  
            <button class="btn-comprar">Comprar</button>  
        </div>  

       
        <div class="moto">  
            <img src="/assets/motorcycle3.jpg" alt="Moto 2"/>  
            <h2>Moto Yamaha MT-07</h2>  
            <p>La Yamaha MT-07 es perfecta para los amantes de la velocidad y el diseño moderno.</p>  
            <p class="precio">Precio: $7,200</p>  
            <button class="btn-comprar">Comprar</button>  
        </div>  

        
        <div class="moto">  
            <img src="/assets/combination.jpg" alt="Moto 3"/>  
            <h2>Moto Kawasaki Z650</h2>  
            <p>La Kawasaki Z650 es una naked versátil, ideal para la ciudad y la carretera.</p>  
            <p class="precio">Precio: $8,000</p>  
            <button class="btn-comprar">Comprar</button>  
        </div>  

       
        <div class="moto">  
            <img src="/assets/motorcycle 4.jpg" alt="Moto 4"/>  
            <h2>Moto Honda CBR500R</h2>  
            <p>La Honda CBR500R combina rendimiento y comodidad, ideal para principiantes.</p>  
            <p class="precio">Precio: $7,500</p>  
            <button class="btn-comprar">Comprar</button>  
        </div>  
    </div>  

  
    
</main>

  );
};

export default Catalogo;