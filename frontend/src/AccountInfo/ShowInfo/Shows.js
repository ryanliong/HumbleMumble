import React, {Component} from 'react';
import ShowCard from "./ShowCard";

function Shows() {
    return (
      <div id="AccountInfo">
				<h1 id ="title" style={{marginTop:'100px'}}>TV Shows</h1> 
        <div class="card" style={{width: "82rem", marginTop:'50px'}}>
        	<ul class="list-group list-group-flush">
        		<li class="list-group-item">
							<ShowCard
								imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/The_Flash_season_6.jpg/	220px-The_Flash_season_6.jpg"
							></ShowCard> 
						</li>
						<li class="list-group-item">
							<ShowCard
								imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/The_Flash_season_6.jpg/	220px-The_Flash_season_6.jpg"
							></ShowCard>
						</li>
            <li class="list-group-item">
							<ShowCard
								imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/The_Flash_season_6.jpg/	220px-The_Flash_season_6.jpg"
							></ShowCard>
						</li>
          </ul>
        </div>
      </div> 
    );
}

export default Shows;