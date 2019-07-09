import React from 'react';
import {getAllBreeds} from './actions';
import{connect} from 'react-redux';
import _ from 'lodash';

class BreedsList extends React.Component{
    componentWillMount(){
        this.props.getAllBreeds();
    }
    render(){
        return(
            <div>
                <h1>All Posts</h1>
                {
                    _.map(this.props.breedInfo.breeds, (item, i) => {
                        return(
                            <div key={i}>
                                <h3>{item.id}. {item.title}</h3>
                                <p>{item.body}</p>
                            </div>
                        )
                    })
}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return(
        {breedInfo: state.BreedsList}
    );
}

const mapDispatchToProps = dispatch => {
    return({
        getAllBreeds: () => dispatch(getAllBreeds()),
    });
}

const BreedListComponent = connect(mapStateToProps, mapDispatchToProps)(BreedsList);
export default BreedListComponent; 