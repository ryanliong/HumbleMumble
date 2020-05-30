import React, {Component} from 'react';
import MovieCard from "./MovieCard";

function Movies() {
    return (
      <div id="AccountInfo">
				<h1 id ="title" style={{marginTop:'100px'}}>Movies</h1> 
        <div class="card" style={{width: "82rem", marginTop:'50px'}}>
        	<ul class="list-group list-group-flush">
        		<li class="list-group-item">
							<MovieCard/>
						</li>
						<li class="list-group-item">
							<MovieCard/>
						</li>
            <li class="list-group-item">
							<MovieCard/>
						</li>
          </ul>
        </div>
      </div> 
    );
}

export default Movies;