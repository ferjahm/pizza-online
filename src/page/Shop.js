import React from "react";
import { Link } from "react-router-dom";
//import img from "./style/panier.png";

const Shop = () => {
  return (
    <div className="panier">
      <h2 className="title">Votre panier est vide</h2>
      <p>Parcourez nos catégories et découvrez nos meilleures offres!</p>
      <di>
        <Link to="/product">
          <button className="btn-panier">commencer vos achats</button>
        </Link>
      </di>
    </div>
  );
};

export default Shop;
