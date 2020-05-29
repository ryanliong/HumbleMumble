import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
// import axios from 'axios';

class Games extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Games: null,
    };
  }

  // async componentDidMount() {
  //   const questions = (await axios.get('http://localhost:8081/')).data;
  //   this.setState({
  //     shows,
  //   });
  // }
  render() {
    return (
      <React.Fragment>
      <div style={{position:'relative', left:'150px', top:'200px' }}>
      <h1 style={{position: 'relative'}}>Games</h1>
      <div class="card" style={{width: '80rem', position:'relative'}}>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="card" style={{width: '80rem'}}>
              <div class="card-body">
                <h5 class="card-title">The Flash</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                    <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheck1" checked=""></input>
                    <label class="custom-control-label" for="customCheck1">Completed</label> 
                    </div>
                </h6>
                <p class="card-text">Last Watched on 1/1/2020</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
              </div>
            </div>
          </li>

          <li class="list-group-item">
          <div class="card" style={{width: '80rem'}}>
              <div class="card-body">
                <h5 class="card-title">The Flash 2</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                    <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheck1" checked=""></input>
                    <label class="custom-control-label" for="customCheck1">Completed</label> 
                    </div>
                </h6>
                <p class="card-text">Last Watched on 1/2/2020</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
              </div>
            </div>
          </li>

          <li class="list-group-item">
          <div class="card" style={{width: '80rem'}}>
              <div class="card-body">
                <h5 class="card-title">The Flash 3</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                    <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheck1" checked=""></input>
                    <label class="custom-control-label" for="customCheck1">Completed</label> 
                    </div>
                </h6>
                <p class="card-text">Last Watched on 1/3/2020</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Games;