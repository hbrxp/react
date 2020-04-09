import React from 'react';
import ReactDOM from 'react-dom';
import propsTypes from 'prop-types';
import Header from './components/Header';
import Cell from './components/Cell';
import Footer from './components/Footer';
import Button from './components/Button';
class App extends React.Component{
	// static defaultProps = {
	// 	title:"123"
	// }
	
	static propsTypes = {
		title:propsTypes.array
	}
	constructor(props){
		super(props)
		console.log(props)
	};

  render(){
    return (
      <div id="container">
	  <div>{this.props.title}</div>
		<Header/>
		<Cell/>
		<Footer/>
		<Button/>
      </div>
    )

  }

}

ReactDOM.render(
  <App title={'随时'}/>,
  document.querySelector('#root')
);
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
