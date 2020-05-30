import React, {Component} from 'react';
import GameCard from "./GameCard";

function Games() {
    return (
      <div id="AccountInfo">
				<h1 id ="title" style={{marginTop:'100px'}}>Games</h1> 
        <div class="card" style={{width: "82rem", marginTop:'50px'}}>
        	<ul class="list-group list-group-flush">
        		<li class="list-group-item">
							<GameCard/>
						</li>
						<li class="list-group-item">
							<GameCard/>
						</li>
            <li class="list-group-item">
							<GameCard/>
						</li>
          </ul>
        </div>
      </div> 
    );
}

export default Games;