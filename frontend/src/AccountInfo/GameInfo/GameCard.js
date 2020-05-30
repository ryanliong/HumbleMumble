import React, {Component} from 'react';
import CardStatistics from '../CardStatistics';
import Form from 'react-bootstrap/Form';

function GameCard() {
	return(
		<div class="card" style={{width: '80rem'}}>
      <div class="card-body">
        <h5 class="card-title">The Flash</h5>
        <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Completed" />
        </Form.Group>
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

export default GameCard;