var React = require('react');

var Landing = React.createClass({
    render: function (){
        return (
            <div className="parallax parallax_layer--back" id="parallax">
                <video playsInline autoPlay loop>
                    <source src="../assets/images/dust2.mp4" type="video/mp4"/>
                </video>
            </div>
        )
    }
});

module.exports = Landing;
