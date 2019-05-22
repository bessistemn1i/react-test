import React, { Component } from 'react';
import Spinner from '../spinner';

const DetailWithData = (View) => {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                item: null,
                loading: true,
                currentImage: null
            }
        }
        
        componentDidMount() {
            this.personUpdate();
        }
    
        componentDidUpdate(prevProps) {
            if(this.props.persId !== prevProps.persId) {
                this.personUpdate();
                this.setState({
                    loading: true
                })
            }
        }
    
        personUpdate = () => {
            const id = this.props.persId;
            if(!id) {
                return;
            }
    
            this.props.getData(id)
            .then((item) =>{
                this.setState({
                    item,
                    loading: false,
                    currentImage: this.props.getImage(item)
                });
            });
        }

        render () {
            const {item, loading, currentImage} = this.state;
            if(item == null) {
                return(
                    <span className="default-message">Please select your testing person</span>
                )
            }
            if(loading) {
                return <Spinner/>
            }
            return <View {...this.props} data={item} image={currentImage}/>
        }
    }
}

export default DetailWithData;