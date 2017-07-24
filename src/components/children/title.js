var React = require('react');

var Title = React.createClass({
    render: function (){
        return (
            <div className="container" id="title-container">
                <div className="col s12 white-text">
                    <h2 className="center" id="title-name">ANDRE MICHAEL SEBALLO</h2>
                    <h4 className="center">Full Stack Software Engineer</h4>
                    <div className="co s12 white-text center">
                        <div className="row">
                            <a id="intro-social" href="http://github.com/dreballo" title="Github" target="#"><i className="mdi mdi-github-circle"> </i> </a>
                            <a id="intro-social" href="http://linkedin.com/in/andreseballo" title="LinkedIn" target="#"><i className="mdi mdi-linkedin-box"> </i> </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Title;
