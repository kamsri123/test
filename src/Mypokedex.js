import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

class mypokedex extends Component {
	
		      
  render() {
    return (
		<div id="body">
			<div className="form-group">
		        	{(this.props.list) !== [] ? this.props.list.map((pp)=>{
		        		var a = 0;
		        		var bg = "";
		        		var type = pp.type;
		        		(type === "Psychic" ? bg = "#f8a5c2" : 
		        		type === "Fighting" ? bg = "#f0932b": 
		        		type === "Fairy" ? bg = "#c44569":
		        		type === "Normal" ? bg = "#f6e58d":
		        		type === "Grass" ? bg = "#badc58": 
		        		type === "Metal" ? bg = "#95afc0":
		        		type === "Water" ? bg = "#3dc1d3":
		        		type === "Lightning" ? bg = "#f9ca24":
		        		type === "Darkness" ? bg = "#574b90":
		        		type === "Colorless" ? bg = "#FFF":
		        		type === "Fire" ? bg = "#eb4d4b" : "#FFF")
	    			return (
	    				<table id='outside' style={{backgroundColor: bg}}>
	    					<tr>
	    						<td><img src={pp.imageUrl} width='150px' /></td>
	    						<td>
	    							<table id='inside'>
	    								<tr>
				    						<td>Name: {pp.name}</td>
				    					</tr>
				    					<tr>
				    						<td>HP: {(pp.hp > 100) ? 100 : pp.hp}</td>
				    					</tr>
				    					<tr>
				    						<td>Weakness: {typeof (pp.weaknesses) !== 'undefined' ? ((pp.weaknesses[0].value.substring(1) * 100) > 100 ? 100 : pp.weaknesses[0].value.substring(1) * 100 ) : null}</td>
				    					</tr>
				    					<tr>
				    						<td>Damage: {(typeof (pp.attacks) !== 'undefined') ? pp.attacks.map((test) =>{
				    							a += parseInt(test.damage.substring(0,test.damage.length - 1))
				    							if(a > 0){
				    								return (a)
				    							}else{
				    								return ("")
				    							}
				    						}): null}</td>
				    					</tr>
				    					<tr>
				    						<td>
				    							<div className="form-group">
						                            <button type="button" className="btnSubmit" onClick={() => this.addPokemon(pp)}>ADD</button>
						                        </div>
				    						</td>
				    					</tr>
	    							</table>
	    						</td>
	    					</tr>
	    					
	    				</table>
	    			)
	    		}): null}
		    </div>
		</div>
    );
  }
}


export default mypokedex;
