import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "../product-card/ProductCard";
import {
  fastFoodProducts,
  riceMenuProducts,
  pizzaProducts,
  dessertProducts,
  coffeeProducts,
} from "../../assets/fake-data/products";
import "./menu-pack.css";

const MenuPack = () => {

    const [filter, setFilter] = useState('RICE_MENU')
    const [product, setProducts] = useState(riceMenuProducts);

    useEffect(()=>{
        if(filter === "RICE-MENU"){
            setProducts(riceMenuProducts)
        }
        if(filter === "FAST_FOOD"){
            setProducts(fastFoodProducts)
        }
        if(filter === "PIZZA"){
            setProducts(pizzaProducts)
        }
        if(filter === "DESSERTS"){
            setProducts(dessertProducts)
        }
        if(filter === "COFFE"){
            setProducts(coffeeProducts)
        }

    },[filter])


  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-4">
            <h3>Our Menu Pack</h3>
          </Col>
          <Col lg="12" className="text-center mb-5">
            <button className={`filter-btn ${filter === 'FAST_FOOD' ? 'active__btn' : ""}`} onClick={()=> setFilter("FAST_FOOD")}>Fast Food</button>
            <button className={`filter-btn ${filter === 'RICE_MENU' ? 'active__btn' : ""}`} onClick={()=> setFilter("RICE_MENU")}>Rice Menu</button>
            <button className={`filter-btn ${filter === 'PIZZA' ? 'active__btn' : ""}`} onClick={()=> setFilter("PIZZA")}>Pizza</button>
            <button className={`filter-btn ${filter === 'DESSERT' ? 'active__btn' : ""}`} onClick={()=> setFilter("DESSERT")}>Desserts</button>
            <button className={`filter-btn ${filter === 'COFFEE' ? 'active__btn' : ""}`} onClick={()=> setFilter("COFFEE")}>Coffee</button>
          </Col>

          {product.map((item) => (
            <Col lg="3" md='4' sm='6' xs='6' key={item.id} className="mb-4">
              {" "}
              <ProductCard item={item}></ProductCard>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MenuPack;
