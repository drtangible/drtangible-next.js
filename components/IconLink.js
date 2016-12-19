import React, { PropTypes } from 'react'
import css from 'next/css'


export class IconLink extends React.Component {

  static propTypes = {

    /**
     * URL to link to.
     */
    href: PropTypes.string.isRequired,

    /**
     * Name of the Font Awesome icon to render.
     */
    icon: PropTypes.string.isRequired,

  };

  render() {
    let { href, icon } = this.props;

    return (
      <a className={style} href={href}>
        <i className={`fa fa-2x fa-${icon}`}></i>
      </a>
    );
  }
}

const style = css({
  color: 'white',
  textDecoration: 'none',
  transition: 'opacity 0.5s',

  '&:hover': {
    opacity: '0.8',
  },

  '& .fa': {
    margin: '0 0.5em',
  },

  '& .fa-taco:before': {
    content: "url('static/images/taco.svg')",
    position: 'relative',
    left: '-2px',
  },
});
