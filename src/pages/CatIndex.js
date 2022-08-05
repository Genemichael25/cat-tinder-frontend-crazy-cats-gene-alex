import { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class CatIndex extends Component {
    render() {
        // console.log(this.props.cats)
        return(
            <>
                <h1>All our members</h1>
                {this.props.cats && this.props.cats.map(cats => {
                    return(
                      // <center >
                      // <div class="card w-50" >
                        <Card  key={cats.id}>
                            <CardImg style = {{height:"auto", width:"auto"}} src={cats.image} alt="Card image cap" />
                            <CardBody>
                              <CardTitle>{cats.name}</CardTitle>
                              <CardSubtitle>Age:{cats.age}</CardSubtitle>
                              <NavLink to={`/catshow/${cats.id}`}>
                                <Button>More info here</Button>
                              </NavLink>
                            </CardBody>
                        </Card>
                      // {/* </div>
                      // </center> */}
                    )
                })}

            </>
        )
    }
}

export default CatIndex