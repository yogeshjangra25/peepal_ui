import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Header extends Component {
    renderContent() {
        console.log('Header :'+JSON.stringify(this.props.auth))
      switch (!this.props.auth) {
        case true:
          return <li><a href="/login">Login</a></li>;
        default:
          return [
            <li key="2"><a href="/logout">Logout</a></li>
          ];
      }
    }
  
    render() {
      return (
        <nav>
          <div className="nav-wrapper">
            <Link
              to={this.props.auth ? '/guide' : '/'}
              className="left brand-logo"
            >
              Peepal Farm
            </Link>
            <ul className="right">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      );
    }
}
  
function mapStateToProps({ auth }) {
return { auth };
}

export default connect(mapStateToProps)(Header);