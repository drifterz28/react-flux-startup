'use strict';
var React = require('react');
var Actions = require('../js/lib/actions');
var Store = require('../js/lib/stores');

module.exports = React.createClass({
    getInitialState:function() {
        return {
            works: 'Hello World'
        };
    },
    componentWillReceiveProps: function(nextProps) {
        console.log('app next ', nextProps);
    },
    render: function() {
        return (
            <div>
                {this.state.works}
            </div>
        );
    }
});
