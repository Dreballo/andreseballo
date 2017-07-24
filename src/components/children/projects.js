// Include React
var React = require("react");

var Projects = React.createClass({
    render: function(){
        return(

            <div className="col s12">
                <a name="projects"> </a>
                <div className="row">

                        <div className="col s4">
                            <div className="card medium">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src="../assets/images/yolo.png"/>
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">YOLO<i className="material-icons right">more_vert</i></span>
                                    <p><a href="http://yolo-orlando.herokuapp.com/" target="#">Check out the live demo</a></p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">YOLO<i className="material-icons right">close</i></span>
                                    <p><strong>Role:</strong> Backend Development (team)</p>
                                    <p><strong>Description:</strong> Utilizing the Open Weather & IPinfo.io APIs. This powerful app finds your location, checks your local weather, and returns a suggested event based on that local weather data.</p>
                                    <p><a target="#" href="https://github.com/adeerjustoutside/YOLO">Check out the repo</a></p>
                                    <p><strong>Key Features: </strong>
                                        <div className="chip"><i className="mdi mdi-language-javascript"> </i>JavaScript</div>
                                        <div className="chip"><i className="mdi mdi-currency-usd"> </i>jQuery</div>
                                        <div className="chip"><i className="mdi mdi-language-html5"> </i>HTML</div>
                                        <div className="chip"><i className="mdi mdi-language-css3"> </i>CSS</div>
                                        <div className="chip"><i className="mdi mdi-web"> </i>API Consumption</div>
                                        <div className="chip"><i className="mdi mdi-bootstrap"> </i>Bootstrap</div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col s4">
                            <div className="card medium">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src="../assets/images/burger.png"/>
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">Eat-Da-Burger<i className="material-icons right">more_vert</i></span>
                                    <p><a href="https://server-burger.herokuapp.com/burgers" target="#">Check out the live demo</a></p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Eat-Da-Burger<i className="material-icons right">close</i></span>
                                    <p><strong>Role:</strong> Full Stack Developer</p>
                                    <p><strong>Description:</strong> Educational exercise to showcase rendering persistent data from a MySQL database to the browser. Create, read, update, and delete (CRUD) database records from the client-side.</p>
                                    <p><a target="#" href="https://github.com/dreballo/sequelizeburger">Check out the repo</a></p>
                                    <p><strong>Key Features: </strong>
                                        <div className="chip"><i className="mdi mdi-language-javascript"> </i>JavaScript</div>
                                        <div className="chip"><i className="mdi mdi-language-html5"> </i>HTML</div>
                                        <div className="chip"><i className="mdi mdi-language-css3"> </i>CSS</div>
                                        <div className="chip"><i className="mdi mdi-nodejs"> </i>Node.js</div>
                                        <div className="chip"><i className="mdi mdi-NPM"> </i>NPM</div>
                                        <div className="chip"><i className="mdi mdi-express"> </i>Express</div>
                                        <div className="chip"><i className="mdi mdi-database"> </i>MySQL</div>
                                        <div className="chip"><i className="mdi mdi-handlebars"> </i>Handlebars</div>

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col s4">
                            <div className="card medium">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src="../assets/images/Stile.png"/>
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">Stile<i className="material-icons right">more_vert</i></span>
                                    <p><a href="http://github.com/dreballo" target="#">Coming Summer 2017</a></p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Stile<i className="material-icons right">close</i></span>
                                    <p><strong>Role:</strong> Full Stack Developer</p>
                                    <p><strong>Description:</strong> Find available stylists in your area and schedule appointments with ease.</p>
                                    <p><strong>Key Features: </strong>
                                        <div className="chip"><i className="mdi mdi-language-javascript"> </i>JavaScript</div>
                                        <div className="chip"><i className="mdi mdi-language-html5"> </i>HTML</div>
                                        <div className="chip"><i className="mdi mdi-language-css3"> </i>CSS</div>
                                        <div className="chip"><i className="mdi mdi-nodejs"> </i>Node.js</div>
                                        <div className="chip"><i className="mdi mdi-NPM"> </i>NPM</div>
                                        <div className="chip"><i className="mdi mdi-express"> </i>Express</div>
                                        <div className="chip"><i className="mdi mdi-leaf"> </i>MongoDB</div>
                                        <div className="chip"><i className="mdi mdi-react"> </i>React</div>

                                    </p>
                                </div>
                            </div>
                        </div>

                </div>
            </div>
        );
    }
});

module.exports = Projects;