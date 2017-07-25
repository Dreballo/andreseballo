// Include React
var React = require("react");
var Sidenav = require('../children/sidenav');

var Navbar = React.createClass({
    render: function(){
        return(
        <div>
            <div className="navbar-fixed">
                <nav className="black" role="navigation" id="bar">
                    <div className="container">
                        <a href="#" data-activates="nav-mobile" id="button-collapse">
                            <i className="mdi mdi-menu"> </i>
                        </a>
                    </div>
                </nav>
            </div>
            <Sidenav />
        </div>

        );
    }
});

module.exports = Navbar;