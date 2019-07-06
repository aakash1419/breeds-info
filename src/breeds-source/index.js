import React from 'ract';
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
                            <div key={i}>
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
        {breedInfo: state.BreedsList}
    );
}

const mapDispatchToProps = dispatch => {
    return({
        getAllBreeds: () => dispatch(getAllBreeds())
    });
}

const BreedListComponent = connect(mapStateToProps, mapDispatchToProps)(BreedsList);
export default BreedListComponent; 