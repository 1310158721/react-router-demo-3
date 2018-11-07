import React, { Component } from 'react'
import './common/app.css'
import MainLeft from './components/main-left'
class App extends Component {
  render() {
    return (
      <div>
      	<div className="container">
      		<header>
            header
          </header>
      		<main>
    				<div className="main-left">
              <MainLeft />
            </div>
    				<div className="main-right">
              {this.props.children}
            </div>
      		</main>
      	</div>
      </div>
    )
  }
}

export default App;
