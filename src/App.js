import React, { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

import Sort from "./components/controls/Sort";
import Summary from "./components/controls/Summary";
import Header from "./components/header/Header";
import ProductListing from "./components/productlisting/ProductListing"
import sortingUtil from "./util/sorting"
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
        // define sorting methods using the same name as the sorting options (value)
        const sortMethod = {}
        sortMethod.price_desc = (a, b) => 
            sortingUtil.sortDescendingCallback(a.offer.displayPrice.amount, b.offer.displayPrice.amount)
        sortMethod.price_asce = (a, b) => 
            sortingUtil.sortAscendingCallback(a.offer.displayPrice.amount, b.offer.displayPrice.amount)
        sortMethod.rating_asce = (a, b) => 
            sortingUtil.sortAscendingCallback(a.property.rating.ratingValue, b.property.rating.ratingValue)
        sortMethod.rating_desc = (a, b) => 
            sortingUtil.sortDescendingCallback(a.property.rating.ratingValue, b.property.rating.ratingValue)
        
        if(sorting !== undefined) {
            // call the sorting method based on their name
            // e.g. sortMethod["price_asce"] to sort price in ascending order
            return [...products].sort(sortMethod[sorting])
        }
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