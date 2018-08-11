var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
/*      React.createElement('div', {className: 'contactItem'},
          React.createElement('img', {
              className: 'contactImage',
              src: 'https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg'
            }),
            React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
            React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
            React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},
              this.props.item.email
        )
            )
    */
      <div className={'contactItem'}>
        <img className={contactImage} src={'https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg'}></img>
        <p className={'contactLabel'}>Imię: {this.props.item.firstName}</p>
        <p className={'contactLabel'}>Nazwisko: {this.props.item.lastName}</p>
        <a className={'contactEmail'} href={'mailto:' + this.props.item.email}>this.props.item.email</a>
      </div>
    )
  },
});

  