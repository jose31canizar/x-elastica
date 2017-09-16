import React, { Component } from 'react'
import Section from '../Section/Section'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      negativeOffset: 100,
      timer: null
    }
    this.stop = this.stop.bind(this)
    this.scrollTo = this.scrollTo.bind(this);
  }
  stop() {
      clearTimeout(this.state.timer);
  }
  scrollTo(id, callback) {
      var settings = {
          duration: 500,
          easing: {
              outQuint: function (x, t, b, c, d) {
                  return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
              }
          }
      };
      var percentage;
      var startTime;
      var node = document.getElementById(id);
      var nodeTop = node.offsetTop;
      var nodeHeight = node.offsetHeight;
      var body = document.body;
      var html = document.documentElement;
      var height = Math.max(
          body.scrollHeight,
          body.offsetHeight,
          html.clientHeight,
          html.scrollHeight,
          html.offsetHeight
      );
      var windowHeight = window.innerHeight
      var offset = window.pageYOffset;
      var delta = nodeTop - offset;
      var bottomScrollableY = height - windowHeight;
      var targetY = (bottomScrollableY < delta) ?
          bottomScrollableY - (height - nodeTop - nodeHeight + offset) :
          delta;
      startTime = Date.now();
      percentage = 0;

      if (this.state.timer) {
          clearInterval(this.state.timer);
      }

      function step() {
          var yScroll;
          var elapsed = Date.now() - startTime;

          if (elapsed > settings.duration) {
              clearTimeout(this.state.timer);
          }

          percentage = elapsed / settings.duration;

          if (percentage > 1) {
              clearTimeout(this.state.timer);

              if (callback) {
                  callback();
              }
          } else {
              yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
              if(this.props.mobile) {
                this.setState({
                  negativeOffset: 0
                })
              }
              window.scrollTo(0, yScroll - this.state.negativeOffset);
              this.setState({
                timer: setTimeout(step.bind(this), 10)
              })
          }
      }

      this.state.timer = setTimeout(step.bind(this), 10);
  }
  componentDidMount() {
    var route = this.props.match.params
    if(Object.keys(route).length === 0 && route.constructor === Object) {
        window.scrollTo(0, 0)
    } else {
      this.scrollTo(route.subroute)
    }
  }
  render() {
    return (
      <Section name='Projects' data='projects' route={this.props.match.params ? this.props.match.params : null}/>
    )
  }
}

export default Projects
