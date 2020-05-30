import React, {Component} from 'react';
import CardStatistics from '../CardStatistics';

function MovieCard() {
	return(
		<div class="card" style={{width: '80rem'}}>
      <div class="card-body">
        <h5 class="card-title">The Flash</h5>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="customCheck1" checked=""></input>
          <label class="custom-control-label" for="customCheck1">Completed</label> 
        </div>
        <p class="card-text">Last Watched on 1/1/2020</p>
				<div>
					<a href="#" class="card-link" style={{float:'left'}}>Continue where you left off</a>
        	<a href="#" class="card-link" style={{float:'left'}}>Read Reviews</a>
					<CardStatistics style={{float:'left'}}></CardStatistics>
				</div>
      </div>
    </div>
	);
}

export default MovieCard;