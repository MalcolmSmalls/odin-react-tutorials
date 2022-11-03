import React, { Component } from "react"

class PropsTest extends Component {
    render(){
        return(
            <div>
                <p>The names of the students are, {this.props.names}</p>
            </div>
        )
    }

}

export default PropsTest