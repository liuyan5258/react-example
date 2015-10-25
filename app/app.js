(function(React) {
  var Hello = require('./components/Hello.jsx'),
      Funcs = require('./models/Functions.js');

  var render = function() {

    var age = Funcs.multiply(2,5);

    ReactDOM.render(
    	<div>
    		<Hello name="liuyan"/>
    		<p>how are you? {age} years ago.</p>
    	</div>,
    	document.getElementById("example")
	 );
  };

  render();
  
}(React));