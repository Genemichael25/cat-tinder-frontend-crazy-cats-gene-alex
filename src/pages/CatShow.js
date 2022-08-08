import { Component } from "react";
import { NavLink } from "react-router-dom";
import { Col, Card, CardTitle, CardText, Button } from 'reactstrap'

class CatShow extends Component {
    render() {
        // console.log(this.props.cat)
        let {cat} = this.props
        return(
            <>
            <center>
                <Col sm="6">
                    <Card>
                        <CardTitle>Hi, my name is {this.props.cat.name}!</CardTitle>
                        <img src={this.props.cat.image} alt="adorable cat" />
                        <CardText>I am {this.props.cat.age} years old. I enjoy  {this.props.cat.enjoys}.</CardText>
                        <NavLink to={`/catedit/${this.props.cat.id}`}>
                            <Button>
                            Update Cat
                            </Button>
                        </NavLink>
                        <br></br>
                        <NavLink to={'/catindex'}>
                        <Button onClick={() => this.props.deleteCat(cat.id)}>Delete Cat</Button>
                        </NavLink>                    
                    </Card>
                </Col>
            </center>
            </>
        )
    }
}

export default CatShow