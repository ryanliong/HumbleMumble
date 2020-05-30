import React, {Component} from 'react';
import CardStatistics from '../CardStatistics';

function ShowCard() {
	return(
		<div class="card" style={{width: '80rem'}}>
      <div class="card-body">
        <h5 class="card-title">The Flash</h5>
        <h6 class="card-subtitle mb-2 text-muted">
          <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="70"
            aria-valuemin="0" aria-valuemax="100" style={{width:'70%'}}>
            <span class="sr-only">70% Complete</span>
            </div>
          </div>
        </h6>
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

export default ShowCard;