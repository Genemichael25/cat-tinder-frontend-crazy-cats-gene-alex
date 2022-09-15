import { Component } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardTitle, CardText, Button, Col , CardImg} from 'reactstrap'

class CatShow extends Component {
    render() {
        // console.log(this.props.cat)
        let {cat} = this.props
        return(
            <>
            <center>
                <Col sm="6">
                    <Card>
                        <CardImg top width="100%" src={this.props.cat.image} alt="adorable cat" />
                        <CardTitle>Hi, my name is {this.props.cat.name}!</CardTitle>
                        <CardText>I am {this.props.cat.age} years old. I enjoy  {this.props.cat.enjoys}.</CardText>
                        <NavLink to={`/catedit/${this.props.cat.id}`}>
                            <Button>
                            Update
                            </Button>
                        </NavLink>
                        <br></br>
                        <NavLink to={'/catindex'}>
                        <Button onClick={() => this.props.deleteCat(cat.id)}>Delete</Button>
                        </NavLink>                    
                    </Card>
                </Col>
            </center>
            </>
        )
    }
}

export default CatShow
                