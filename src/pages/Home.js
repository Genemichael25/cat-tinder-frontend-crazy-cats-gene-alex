import { Component } from "react";
import africanlion from "../assets/africanlion.jpeg"



class Home extends Component {
    render() {
        return(
            <>
                <div className="home">
                    <center>
                        <h1>Home</h1>
                        <img style={{height:"100px", width:"auto" }} src={africanlion} ></img>
                    </center>
                </div>
            </>
        )
    }
}

export default Home