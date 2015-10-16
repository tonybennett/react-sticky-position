var React = require('react');
var stickyPosition = require('sticky-position');

module.exports = React.createClass({
	getDefaultProps: function() {
		return {
			className: 'position-sticky',
			computeWidth: true,
			tag: "div",
			includePlaceholder: true,
		};
	},
	componentDidMount: function() {
		this.sticky = stickyPosition({
			primary: this.refs.primary,
			placeholder: this.refs.placeholder,
			wrapper: this.refs.wrapper,
			computeWidth: this.props.computeWidth,
			includePlaceholder: this.props.includePlaceholder,
		})
	},
	componentWillUnmount: function() {
		this.sticky.destroy();
	},
	render: function() {
		return React.createElement(this.props.tag, {ref: 'wrapper', className: this.props.className}, [
				React.createElement(this.props.tag, {ref: 'primary', key: 0}, this.props.children),
				React.createElement(this.props.tag, {ref: 'placeholder', key: 1})
		]);
	}
});
