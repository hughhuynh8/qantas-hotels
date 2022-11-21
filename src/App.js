import React, { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

import Sort from "./components/controls/Sort";
import Summary from "./components/controls/Summary";
import Header from "./components/header/Header";
import ProductListing from "./components/productlisting/ProductListing"
import axios from "axios";

const App = () => {
    const sortOptions = [
        { value: 'price_desc', label: "Price high-low" },
        { value: 'price_asce', label: "Price low-high" },
        { value: 'rating_asce', label: "Rating low-high" },
        { value: 'rating_desc', label: "Rating high-low" },
    ]
    const [sorting, setSorting] = useState(sortOptions[0].value)
    const [products, setProducts] = useState([])
    
    const sortProducts = () => {
        // sorting methods
        const sortFunc = {}
        sortFunc.price_desc = (a, b) => b.offer.displayPrice.amount - a.offer.displayPrice.amount
        sortFunc.price_asce = (a, b) => a.offer.displayPrice.amount - b.offer.displayPrice.amount
        sortFunc.rating_asce = (a, b) => a.property.rating.ratingValue - b.property.rating.ratingValue
        sortFunc.rating_desc = (a, b) => b.property.rating.ratingValue - a.property.rating.ratingValue
        
        if(sorting !== undefined) {
            return [...products].sort(sortFunc[sorting])
        }
        else 
            return [...products]
    }


    const showProducts = sortProducts()




    useEffect(() => {
        axios.get('http://localhost:3001/results').then(
          (response) => {
            setProducts(response.data)
          }, (error) => {
            console.log(error)
          });
    }, []);

    const onChangeSort = (sortValue) => {
        setSorting(sortValue)
    }
    return (
        <div>
            <Header homeUrl="/" imgUrl="../images/qantas-logo.png" altText="Qantas logo" />
            <Container>
                <Row>
                    <Col md={8}><Summary product="hotels" quantity={5} location="Sydney"></Summary></Col>
                    <Col md={4}><Sort label="Sort by" options={sortOptions} controlId="sortBy" onChange={(evt) => onChangeSort(evt.target.value)}></Sort></Col>
                </Row>
            </Container>
            <Container>
                <ProductListing products={showProducts}></ProductListing>
            </Container>
        </div>
    )
}
export default App;