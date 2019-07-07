import React from 'react';
import {getAllBreeds} from './actions';
import{connect} from 'react-redux';

class BreedsList extends React.Component{
    componentDidMount(){
        this.props.getAllBreeds();
    }
    render(){
        return(
            <div>
                {this.props.breedInfo.breeds.map(
                    (item, index) => {
                        return(
                            <div>
                                <h3>{item.id}. {item.title}</h3>
                                <p>{item.body}</p>
                            </div>
)
                    }
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return(
        {breedInfo: BreedsList.state}
    );
}

const mapDispatchToProps = dispatch => {
    return({
        getAllBreeds: () => dispatch(getAllBreeds())
    });
}

const BreedListComponent = connect(mapStateToProps, mapDispatchToProps)(BreedsList);
export default BreedListComponent; 