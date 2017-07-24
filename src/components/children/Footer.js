// Include React
var React = require("react");


var Footer = React.createClass({
    render: function(){
        return(
            <footer className="page-footer black">

                <div className="footer-copyright">
                    <div className="container">
                        © 2017 Copyright Andre Seballo
                        <a className="grey-text text-lighten-4 right">Built with React<span><i className="mdi mdi-react"> </i></span></a>
                    </div>
                </div>
            </footer>
        );
    }
});

module.exports = Footer;