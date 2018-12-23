import React, { Component } from 'react';
import { Segment, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
// import { dispatch } from 'rxjs/internal/observable/range'
// import busca from '../store/reducers/busca'
import {buscaVideo} from '../store/actions/busca-video'


//const Searchbar = props => { 
class Searchbar extends Component {
    pesquisatermo = e =>{
        const termo = e.target.value;
        if(e.keyCode === 13){
            console.log(termo);
            this.props.buscaVideo(termo)
        }
    }

    render(){
        return (
            <div className="search-bar">
               <Segment stacked>
                    <Input icon="search" onKeyDown={(e)=> this.pesquisatermo(e)} size="large" placeholder="Search..."></Input>
               </Segment>
            </div>
        )
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        buscaVideo: (termo) => dispatch(buscaVideo(termo))
    }
}
export default connect(null, mapDispathToProps)(Searchbar)