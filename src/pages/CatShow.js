import { Component } from "react";
import { Col, Card, CardTitle, CardText } from 'reactstrap'

class CatShow extends Component {
    render() {
        // console.log(this.props.cat)
        let {cat} = this.props
        return(
            <>
                <Col sm="6">
                    <Card>
                        <CardTitle>Hi, my name is {this.props.cat.name}!</CardTitle>
                        <img src={this.props.cat.image} alt="adorable cat" />
                        <CardText>I am {this.props.cat.age} years old. I enjoy  {this.props.cat.enjoys}.</CardText>
                    </Card>
                </Col>
            </>
        )
    }
}

export default CatShow