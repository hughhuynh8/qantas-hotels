import React from "react"
import { Col, Container, Row } from "react-bootstrap";
import Sort from "./components/controls/Sort";
import Summary from "./components/controls/Summary";
import Header from "./components/header/Header";
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    const sortOptions = [
        {value: 'price_descending', label: "Price high-low"},
        {value: 'price_ascending', label: "Price low-high"},
    ]

    const onChangeSort = (value) => {
        console.log("Sorting by: ", value);
    }
    return (
        <div>
            <Header homeUrl="/" imgUrl="../images/qantas-logo.png" altText="Qantas logo" />
            <Container>
                <Row>
                    <Col sm={8}><Summary product="hotels" quantity={5} location="Sydney"></Summary></Col>
                    <Col sm={4}><Sort label="Sort by" options={sortOptions} controlId="sortBy" onChange={(evt) => onChangeSort(evt.target.value)} onClick={()=> { console.log("CLicked me"); }}></Sort></Col>
                </Row>
            </Container>
        </div>
    )
}
export default App;