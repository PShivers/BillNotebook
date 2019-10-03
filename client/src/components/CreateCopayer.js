import React, { Component } from 'react';

class CreateCopayer extends Component {
    state = { 
        showForm: false,
        newCopayer: {
            name: '',
            email: ''
        }
     }

    handleClick = () => {
        this.setState({
          showForm: !this.state.showForm
        });
    }

    handleChange = (event) => {
        event.preventDefault();
        const attributeName = event.target.name;
        const attributeValue = event.target.value;
        const newCopayer = { ...this.state.newCopayer };  
        newCopayer[attributeName] = attributeValue;
        this.setState({ newCopayer },()=>{});
    } 

    handleSubmit = (event) => {
        this.props.createCopayer(this.state.newCopayer);
    }

    formToggle = () => {
        if(this.state.showForm){
            return (   
                <div>
                    <form>
    
                        <input 
                            name="name"
                            placeholder="name" 
                            type="text" onChange={this.handleChange} 
                            value={this.state.newCopayer.name} 
                        />
    
                        <input 
                            name="email"
                            placeholder="email address" 
                            type="text" onChange={this.handleChange}
                            value={this.state.newCopayer.email} 
                        />
    
                        <button type="submit" onClick={this.handleSubmit}>Submit</button>
    
                    </form>
                </div> 
            );
        }
    }

    render() { 
        return (
        <div>
            <button onClick={this.handleClick} >Create Copayer</button>
            {this.formToggle()}
        </div>
        )
    }
}
 
export default CreateCopayer;