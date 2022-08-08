import { Component } from "react";
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'
import { Redirect } from 'react-router-dom'

class CatEdit extends Component {
    constructor(props){
        super(props)
        this.state = {
            editCat: {
              name: this.props.cat.name,
              age: this.props.cat.age,
              enjoys: this.props.cat.enjoys,
              image: this.props.cat.image
            },
            submitted: false
          }
        }
    
    handleChange = (e) => {
    let { editCat } = this.state
    editCat[e.target.name] = e.target.value
    this.setState({editCat: editCat})
    }

    handleSubmit = () => {
        this.props.updateCat(this.state.editCat, this.props.cat.id)
        this.setState({submitted: true})
    }

    render() {
        return(
            <>
                
                <Form style={{margin:"30px"}}>
                    <FormGroup >
                        <Label for="name">Name</Label>
                        <Input 
                            type="text" 
                            name="name" 
                            onChange={this.handleChange} 
                            value={this.state.editCat.name}
                        />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for="age">Age</Label>
                        <Input 
                            type="text" 
                            name="age" 
                            onChange={this.handleChange} 
                            value={this.state.editCat.age}
                        />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for="enjoys">Enjoys</Label>
                        <Input 
                            type="text" 
                            name="enjoys" 
                            onChange={this.handleChange} 
                            value={this.state.editCat.enjoys}
                        />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for="image">Image</Label>
                        <Input 
                            type="text" 
                            name="image" 
                            onChange={this.handleChange} 
                            value={this.state.editCat.image}
                        />
                    </FormGroup>
                    <Button
                        name="submit"
                        onClick={this.handleSubmit}
                    > Submit Changes
                    </Button>
                    {/* Redirect here */}
                    {this.state.submitted && <Redirect to={`/catshow/${this.props.cat.id}`}/>}
                </Form>
            </>
        )
    }
}

export default CatEdit