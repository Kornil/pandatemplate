const { Navbar, Grid, Row, Col, Nav, NavItem } = ReactBootstrap;

var Main = React.createClass({
	render: function() {
    return (
    	<Grid>
	    	<Row>
	    		<Navbar inverse>
	    			<Navbar.Brand><a href="http://redpandas.surge.sh/">Red Pandas</a></Navbar.Brand>
	    				<Navbar.Text>Learning Backend</Navbar.Text>
	    				<Nav pullRight>
				        <NavItem href="http://github.com/kornil" target="_blank"><i className="fa fa-github fa-lg"></i></NavItem>
				        <NavItem href="http://freecodecamp.com/kornil" target="_blank"><i className="fa fa-free-code-camp fa-lg"></i></NavItem>
				        <NavItem href="http://codepen.io/kornil" target="_blank"><i className="fa fa-codepen fa-lg"></i></NavItem>
				      </Nav>
	    		</Navbar>
	    	<Col mdOffset={1} md={10}>
	    		<div id="title">
		    		<h1>Francesco Agnoletto</h1>
		    		<h4><i>My back-end progress journal</i></h4>
	    		</div>
	    		{/*<p id="journal">-- Back End Progress Journal --</p>*/}
	    		<div id="log-entry">
		    		<h5 id="log-title">// 001 - 29/11/2016</h5>
		    		<p>
		    			After finding out I had still much more to learn about back-end and node I decided to take the long route and start from the beginning, I bought a course on Udemy <a href="https://www.udemy.com/understand-nodejs">Learn and Understand NodeJS</a> on sale for 10$.<br/>
		    			So far so good, I'm halfway through and I feel like I am beginning to understand how things are supposed to work, what I can and can't do with it, in the next days I will try to apply what I am learning.
		    		</p>
		    		<h5 id="log-end">/* end log entry */</h5>
	    		</div>

		    	{/* here new entry*/}
	    	</Col>
	    	</Row>
    	</Grid>
    )
	}
});

ReactDOM.render(<Main />,
  document.getElementById('app'));

/* COPY THIS FOR NEW ENTRY
<div id="log-entry">
	<h5 id="log-title">// xxx - dd/mm/yyyy</h5>
	<p>
		*text*
	</p>
	<h5 id="log-end"> * end log entry * </h5>
</div>
*/