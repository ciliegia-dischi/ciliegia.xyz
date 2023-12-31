import React from 'react';
import Nav from './Nav';

function toggleElement(element, flag) {
  if (flag) {
    element.classList.add('active');
    console.log(element.classList);
  }
  else {
    element.classList.remove('active');
  }
}

function getScrollableContainer() {
  return document.querySelector('.App-container');
}

class Header extends React.Component {
  handleScroll = () => {
    const header = document.querySelector('header');
    const scroll = getScrollableContainer().scrollTop;
    toggleElement(header, scroll > 0);
  };

  componentDidMount() {
    getScrollableContainer()
      .addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    getScrollableContainer()
      .removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <header>
        <Nav />
      </header>
    );
  }
}
export default Header;
