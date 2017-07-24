var React = require('react');

var About = React.createClass({
    render: function (){
        return(

            <div className="col s12 m6 card-panel grey lighten-5 z-depth-1">
                <a name="about"> </a>
                <div className="container">
                    <div className="row">
                        <div className="col s4">
                            <img src={"../assets/images/andre.jpg"} alt="Picture of Andre Seballo" className="circle responsive-img pull-left hoverable"/>
                        </div>
                        <div className="col s6">
                                <h4 className="center">ABOUT ANDRE</h4>
                            <div className="divider"/>
                            <p>I am an engineer who enjoys developing complex applications for the web. I'm originally from Orlando, FL and graduated from the University of Central Florida's Graduate School of Business in 2012. </p>
                            <p>My passion for utilizing emerging technology for business solutions has led me to learn how to code. I've worked on several full stack projects that utilize some of the web's most powerful languages, libraries, and frameworks. </p>
                            <div className="section">
                            <div className="container col s12 ">
                                <div className="chip">
                                    <i className="mdi mdi-language-html5"> </i>
                                    HTML5
                                </div>
                                <div className="chip">
                                    <i className="mdi mdi-language-css3"> </i>
                                    CSS
                                </div>
                                <div className="chip">
                                    <i className="mdi mdi-language-javascript"> </i>
                                    JavaScript
                                </div>
                                <div className="chip">
                                    <i className="mdi mdi-language-php"> </i>
                                    PHP
                                </div>
                                <div className="chip">
                                    <i className="mdi mdi-nodejs"> </i>
                                    Node.js
                                </div>
                                <div className="chip">
                                    <i className="mdi mdi-express"> </i>
                                    Express
                                </div>
                                <div className="chip">
                                    <i className="mdi mdi-react"> </i>
                                    React
                                </div>
                                <div className="chip">
                                    <i className="mdi mdi-database"> </i>
                                    MySQL
                                </div>
                                <div className="chip">
                                    <i className="mdi mdi-leaf"> </i>
                                    MongoDB
                                </div>
                                <div className="chip">
                                    <i className="mdi mdi-npm"> </i>
                                    NPM
                                </div>
                                <div className="chip">
                                    <i className="mdi mdi-bootstrap"> </i>
                                    Bootstrap
                                </div>
                                <div className="chip">
                                    jQuery
                                </div>
                                <div className="chip">
                                    <i className="mdi mdi-cloud"> </i>
                                    Firebase
                                </div>
                                <div className="chip">
                                    <i className="mdi mdi-git"> </i>
                                    Git
                                </div>
                                <div className="chip">
                                    <i className="mdi mdi-github-circle"> </i>
                                    Github
                                </div>
                                <div className="chip">
                                    <i className="mdi mdi-json"> </i>
                                    JSON
                                </div>
                                <div className="chip">
                                    <i className="mdi mdi-web"> </i>
                                    API Development & Consumption
                                </div>
                                <div className="chip">
                                    <i className="mdi mdi-language-php"> </i>
                                    Laravel
                                </div>

                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = About;

