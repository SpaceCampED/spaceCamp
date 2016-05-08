import React from 'react';
import ReactDOM from 'react-dom';

var Hello = React.createClass({
  render: function(){
    return <div>hello</div>
  }
});

ReactDOM.render(
  <Hello />,
  document.getElementById('app')
);


