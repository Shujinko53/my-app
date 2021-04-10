import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/';
import reportWebVitals from './reportWebVitals';

// class App extends React.Component {
//     render() {
//         return (
//             <div className="wrapper">
//                 <Clock />
//                 <Button />
//             </div>
//         )
//     }
// }

ReactDOM.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
