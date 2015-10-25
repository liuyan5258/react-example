import Hello from './components/Hello.jsx';

var render = function() {

  ReactDOM.render(
    <div>
      <Hello name="kenan"/>
      <p>how are you?</p>
    </div>,
    document.getElementById("example")
 );
};

render();

