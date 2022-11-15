import React, { useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

import Sort from "./components/controls/Sort";
import Summary from "./components/controls/Summary";
import Header from "./components/header/Header";
import ProductListing from "./components/productlisting/ProductListing"

const App = () => {
    const productList = [
        {
            "id": "cxd650nuyo",
            "property": {
                "propertyId": "P107801",
                "title": "Courtyard by Marriott Sydney-North Ryde",
                "address": [
                    "7-11 Talavera Rd",
                    "North Ryde"
                ],
                "previewImage": {
                    "url": "https://unsplash.it/145/125/?random",
                    "caption": "Image of Courtyard by Marriott Sydney-North Ryde",
                    "imageType": "PRIMARY"
                },
                "rating": {
                    "ratingValue": 4.5,
                    "ratingType": "self"
                }
            },
            "offer": {
                "promotion": {
                    "title": "Exclusive Deal",
                    "type": "MEMBER"
                },
                "name": "Deluxe Balcony Room",
                "displayPrice": {
                    "amount": 329.000000000,
                    "currency": "AUD"
                },
                "savings": {
                    "amount": 30.000000000,
                    "currency": "AUD"
                },
                "cancellationOption": {
                    "cancellationType": "NOT_REFUNDABLE"
                }
            }
        },
        {
            "id": "mesq6mggyn",
            "property": {
                "propertyId": "P107802",
                "title": "Primus Hotel Sydney",
                "address": [
                    "339 Pitt St",
                    "Sydney"
                ],
                "previewImage": {
                    "url": "https://unsplash.it/145/125/?random",
                    "caption": "Image of Primus Hotel Sydney",
                    "imageType": "PRIMARY"
                },
                "rating": {
                    "ratingValue": 5,
                    "ratingType": "self"
                }
            },
            "offer": {
                "promotion": {
                    "title": "Exclusive Deal",
                    "type": "MEMBER"
                },
                "name": "Deluxe King",
                "displayPrice": {
                    "amount": 375.000000000,
                    "currency": "AUD"
                },
                "savings": {
                    "amount": 28.000000000,
                    "currency": "AUD"
                },
                "cancellationOption": {
                    "cancellationType": "FREE_CANCELLATION"
                }
            }
        },
        {
            "id": "xbtlihs45t",
            "property": {
                "propertyId": "P107803",
                "title": "Rydges World Square Sydney",
                "address": [
                    "389 Pitt St",
                    "Sydney"
                ],
                "previewImage": {
                    "url": "https://unsplash.it/145/125/?random",
                    "caption": "Image of property",
                    "imageType": "PRIMARY"
                },
                "rating": {
                    "ratingValue": 4,
                    "ratingType": "star"
                }
            },
            "offer": {
                "promotion": {
                    "title": "Red Hot",
                    "type": "CAMPAIGN"
                },
                "name": "Deluxe King Room",
                "displayPrice": {
                    "amount": 227.000000000,
                    "currency": "AUD"
                },
                "savings": null,
                "cancellationOption": {
                    "cancellationType": "NOT_REFUNDABLE"
                }
            }
        },
        {
            "id": "5lm8loqk1s",
            "property": {
                "propertyId": "P107804",
                "title": "PARKROYAL Darling Harbour Sydney",
                "address": [
                    "150 Day Street",
                    "Sydney"
                ],
                "previewImage": {
                    "url": "https://unsplash.it/145/125/?random",
                    "caption": "Image of PARKROYAL Darling Harbour Sydney",
                    "imageType": "PRIMARY"
                },
                "rating": {
                    "ratingValue": 4.5,
                    "ratingType": "star"
                }
            },
            "offer": {
                "promotion": {
                    "title": "Exclusive Deal",
                    "type": "MEMBER"
                },
                "name": "Deluxe King",
                "displayPrice": {
                    "amount": 535.000000000,
                    "currency": "AUD"
                },
                "savings": null,
                "cancellationOption": {
                    "cancellationType": "FREE_CANCELLATION"
                }
            }
        },
        {
            "id": "kwjf8jlxg9",
            "property": {
                "propertyId": "P107805",
                "title": "Metro Hotel Marlow Sydney Central",
                "address": [
                    "431-439 Pitt Street",
                    "Sydney"
                ],
                "previewImage": {
                    "url": "https://unsplash.it/145/125/?random",
                    "caption": "Image of Metro Hotel Marlow Sydney Central",
                    "imageType": "PRIMARY"
                },
                "rating": {
                    "ratingValue": 3.5,
                    "ratingType": "star"
                }
            },
            "offer": {
                "promotion": {
                    "title": "Bonus Points",
                    "type": "MEMBER"
                },
                "name": "Deluxe King",
                "displayPrice": {
                    "amount": 295.000000000,
                    "currency": "AUD"
                },
                "savings": null,
                "cancellationOption": {
                    "cancellationType": "FREE_CANCELLATION"
                }
            }
        }
    ]

    const sortOptions = [
        { value: 'price_desc', label: "Price high-low" },
        { value: 'price_asce', label: "Price low-high" },
    ]
    const [sorting, setSorting] = useState(sortOptions[0].value)
    const [products, setProducts] = useState(productList)
    const showProducts = (sorting === 'price_desc') ? [...products].sort((a, b) => b.offer.displayPrice.amount - a.offer.displayPrice.amount) : [...products].sort((a, b) => a.offer.displayPrice.amount - b.offer.displayPrice.amount)


    const onChangeSort = (sortValue) => {
        setSorting(sortValue)
        console.log("Sorting by: ", sortValue)
    }
    return (
        <div>
            <Header homeUrl="/" imgUrl="../images/qantas-logo.png" altText="Qantas logo" />
            <Container>
                <Row>
                    <Col sm={8}><Summary product="hotels" quantity={5} location="Sydney"></Summary></Col>
                    <Col sm={4}><Sort label="Sort by" options={sortOptions} controlId="sortBy" onChange={(evt) => onChangeSort(evt.target.value)} onClick={() => { console.log("CLicked me"); }}></Sort></Col>
                </Row>
            </Container>
            <Container>
                <ProductListing products={showProducts}></ProductListing>
            </Container>
        </div>
    )
}
export default App;