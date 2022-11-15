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
    ]
    const [sorting, setSorting] = useState(sortOptions[0].value)
    const [products, setProducts] = useState([])
    const showProducts = (sorting === 'price_desc') ? [...products].sort((a, b) => b.offer.displayPrice.amount - a.offer.displayPrice.amount) : [...products].sort((a, b) => a.offer.displayPrice.amount - b.offer.displayPrice.amount)

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
                    <Col sm={8}><Summary product="hotels" quantity={5} location="Sydney"></Summary></Col>
                    <Col sm={4}><Sort label="Sort by" options={sortOptions} controlId="sortBy" onChange={(evt) => onChangeSort(evt.target.value)}></Sort></Col>
                </Row>
            </Container>
            <Container>
                <ProductListing products={showProducts}></ProductListing>
            </Container>
        </div>
    )
}
export default App;