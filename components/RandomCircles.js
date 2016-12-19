import React, { PropTypes } from 'react'
import Head from 'next/head'

export class RandomCircles extends React.Component {

  static propTypes = {

    /**
     * Number of circles to display when the component mounts.
     */
    numberToDisplayOnMount: PropTypes.number.isRequired,

    /**
     * Amount of time (in seconds) to wait between rendering new circles.
     */
    frequency: PropTypes.number.isRequired,

    /**
     * Minimum radius (in pixels) of circles.
     * 
     * @default 5
     */
    radiusMin: PropTypes.number,

    /**
     * Maximum radius (in pixels) of circles.
     * 
     * @default 30
     */
    radiusMax: PropTypes.number,

    /**
     * Minimum angle (in degrees) of trajectory of circles.
     * 
     * @default 0
     */
    angleMin: PropTypes.number,

    /**
     * Maximum angle (in degrees) of trajectory of circles.
     * 
     * @default 360
     */
    angleMax: PropTypes.number,

    /**
     * Minimum speed (in pixels moved per interval) of circles.
     * 
     * @default 1
     */
    speedMin: PropTypes.number,

    /**
     * Maximum speed (in pixels moved per interval) of circles.
     * 
     * @default 8
     */
    speedMax: PropTypes.number,

    /**
     * Minimum offset (in pixels) of circles' starting position.
     * 
     * @default -100
     */
    offsetMin: PropTypes.number,

    /**
     * Maximum offset (in pixels) of circles' starting position.
     * 
     * @default 100
     */
    offsetMax: PropTypes.number,

  };

  static defaultProps = {

    radiusMin: 0,

    radiusMax: 30,

    angleMin: 0,

    angleMax: 360,

    speedMin: 1,

    speedMax: 8,

    offsetMin: -100,

    offsetMax: 100,

  };

  componentDidMount() {
    let { numberToDisplayOnMount, frequency } = this.props;

    this.project = new Woof({
      global: false,
      fullScreen: true,
    });

    // Render initial explosion.
    this.project.repeat(numberToDisplayOnMount, this._addCircle.bind(this));

    // Render new circles.
    this.project.every(frequency, 'seconds', this._addCircle.bind(this));
    this.project.every(frequency * 2.4, 'seconds', this._addCircle.bind(this));

    // Hack: Re-emit load event for Woof.
    dispatchEvent(new Event('load'));
  }

  render() {
    return (
      <Head>
        <style>{`
          #project {
            position: absolute !important;
            top: 0;
            z-index: -1;
          }
        `}</style>

        <script src="static/javascript/woof.js"></script>
      </Head>
    );
  }

  _addCircle() {
    let {
      radiusMin,
      radiusMax,
      angleMin,
      angleMax,
      speedMin,
      speedMax,
      offsetMin,
      offsetMax,
    } = this.props;

    var circle = new this.project.Circle({
      project: this.project,
      x: this.project.random(offsetMin, offsetMax),
      y: this.project.random(offsetMin, offsetMax),
    });

    circle.color = this.project.randomColor();
    circle.radius = this.project.random(radiusMin, radiusMax);
    circle.angle = this.project.random(angleMin, angleMax);
    circle.speed = this.project.random(speedMin, speedMax);

    this.project.forever(function() {
      circle.move(circle.speed);
    });
  }

}
