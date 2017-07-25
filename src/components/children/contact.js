// Include React
var React = require("react");

var Contact = React.createClass({
    render: function(){
        return(

            <div className="col s12">
                <a name="contact"> </a>

                    <div className="row">
                        <div className="col s12 center">
                            <a href="mailto:andre.m.seballo@gmail.com" className="btn-large waves-effect waves-light" type="submit" name="action">Email
                                <i className="mdi mdi-send right"> </i>
                            </a>
                        </div>
                    </div>
            </div>
        );
    }
});

module.exports = Contact;