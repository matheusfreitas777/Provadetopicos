import React from "react"
import Card from "./Card"

import { connect } from "react-redux"

function Desafio(props){
    const {min, max} = props
    return (
        <Card title="DESAFIO REACT-REDUX:" blue>
            <div>
                <span>
                    <span>Esse desafio é fácil d+ Dev’s do 6º ADS!!!: </span>
                
                </span>
            </div>
        </Card>
    )
}



export default connect(mapStateToProps)(Desafio)