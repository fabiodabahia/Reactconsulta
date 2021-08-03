import React from 'react';

const SearchArea = (props) => {
    return (
       
        <div className="container"style={{ paddingTop: 30, paddingBottom: 30 }}> 
            <div className="row">
                <section className="test col s4 offset-s4">
                    <form  onSubmit={props.handleSubmit} action="">
                        <div class="input-field">
                            <input placeholder="Procurar..." type="text" onChange={props.handleChange} />                            
                        </div>  
                    </form>
                </section>                
            </div>
        </div>
        
    )
}

export default SearchArea;

