import React, { useState } from "react";
import NavBar from "./NavBar/NavBar";

function TvShow() {
  return (
    <React.Fragment>
      <NavBar name="SmallLogo" />
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/The_Flash_season_6.jpg/220px-The_Flash_season_6.jpg"
        alt="Profile Thumbnail" class = "image-thumbnail"
        style={{
             position:'absolute',
             width:'215px',
             height:'304px',
             left:'200px',
             borderStyle:'solid'
            }}>   
      </img>
      
      <h1 style={{position:'absolute', left:'500px', maxWidth:'50%'}}>The Flash</h1>

      <div class="progress" style={{position:'relative', left:'500px', maxWidth:'50%', top:'60px'}}>
        <div class="progress-bar" role="progressbar" aria-valuenow="70"
        aria-valuemin="0" aria-valuemax="100" style={{width:'50%'}}>
        <span class="sr-only">70% Complete</span>
        </div>
      </div>

      <p style={{
        position:'relative',
        padding:'15px',
        fontSize: '1.4rem',
        top:'80px',
        right:'15px',
        borderStyle:'solid',
        margin:'auto',
        maxWidth:'500px'
        }}>Barry Allen, a forensic scientist with the Central City police force, is struck by lightning in a freak accident. When he wakes up after nine months, he discovers that he can achieve great speeds.
      </p>

      <p style={{
        position:'absolute',
        padding:'15px',
        fontSize: '1.4rem',
        top:'200px',
        right:'300px',
        borderStyle:'solid',
        margin:'auto',
        maxWidth:'500px'
        }}>Average Score: 6
      </p>
      
          
      
      
      <div style={{position:'relative', left:'150px', top:'100px'}}>
      <div class="card" style={{width: '80rem', position:'relative'}}>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="card" style={{width: '80rem'}}>
              <div class="card-body">
                <h5 class="card-title">Review 1 from ReviewBomb</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                <p class="card-text">This show is great!</p>
                </h6>
                <p class="card-text">Last reviewed on 1/1/2020</p>
                <a href="#" class="card-link">Read more</a>
                <a href="#" class="card-link">Another Review</a>
              </div>
            </div>
          </li>

          <li class="list-group-item">
            <div class="card" style={{width: '80rem'}}>
              <div class="card-body">
                <h5 class="card-title">Review 2 from YourBasement</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                <p class="card-text">This show is sucks!</p>
                </h6>
                <p class="card-text">Last reviewed on 1/1/2020</p>
                <a href="#" class="card-link">Read more</a>
                <a href="#" class="card-link">Another Review</a>
              </div>
            </div>
          </li>

          <li class="list-group-item">
            <div class="card" style={{width: '80rem'}}>
              <div class="card-body">
                <h5 class="card-title">Review 3 from TheDogNextDoor</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                <p class="card-text">Only for the hardcore!</p>
                </h6>
                <p class="card-text">Last reviewed on 1/2/2020</p>
                <a href="#" class="card-link">Read more</a>
                <a href="#" class="card-link">Another Review</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      </div>
      </React.Fragment>
  );
}

export default TvShow;
