import { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Col, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class CatIndex extends Component {
    render() {
        // console.log(this.props.cats)
        return(
            <>
                {/* <h1>All our members</h1> */}
                <Row>
                {this.props.cats && this.props.cats.map(cats => {
                    return(
                        <Col sm={4}>
                            <Card style={{backgroundColor:"orange", margin:"5px"}}  key={cats.id}>
                                <CardImg top width="100%" style = {{height:"300px", width:"auto"}} src={cats.image} alt="Card image cap" />
                                <CardBody style={{textAlign:"center"}}>
                                    <CardTitle>{cats.name}</CardTitle>
                                    <CardSubtitle>Age:{cats.age}</CardSubtitle>
                                    <NavLink to={`/catshow/${cats.id}`}>
                                        <Button>More info here</Button>
                                    </NavLink>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                })}
                </Row>
            </>
        )
    }
}

export default CatIndex