import { Component } from "react";
import africanlion from "../assets/africanlion.jpeg"



class Home extends Component {
    render() {
        return(
            <>
                <div className="home">
                    <center>

                        <img style={{height:"300px", width:"auto" }} src={africanlion} ></img>
                    </center>
                </div>
            </>
        )
    }
}

export default Home