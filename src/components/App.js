import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';

const fleek = require('@fleekhq/fleek-storage-js')
const ipfsClient = require('ipfs-http-client')
//const ipfs = ipfsClient({ host: 'storageapi2.fleek.co/79346f15-da69-4d37-9c98-8df2ab07ed6d-bucket'})

class App extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			buffer: null
		};
	}
	
	captureFile = (event) => {
		event.preventDefault()
		//Process File for IPFS...
		const file = event.target.files[0]
		const reader = new window.FileReader()
			console.log(event.target.files)
		reader.readAsArrayBuffer(file)
		reader.onloadend = () => {
			this.setState({ buffer: Buffer(reader.result)})
			console.log('buffer', Buffer(reader.result))
		}
	}
	
	onSubmit = (event) => {
		event.preventDefault()
		console.log("Submitting the form...")
		//ipfs.add(this.state.buffer, (errro, result) => {
			//console.log('ipfs result', result)
		})
				}

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="https://app.clickup.com/25601387/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whim
          </a>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <a
                  href="http://www.dappuniversity.com/bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo} className="App-logo" alt="logo" />
                </a>
				<p>&nbsp;</p>
				<h2>Change Media</h2>
				<form onSubmit={this.onSubmit} >
					<input type='file' onChange={this.captureFile} />
					<input type='submit' />
				</form>
				<p>&nbsp;</p>
				<h2>Whim App</h2>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
