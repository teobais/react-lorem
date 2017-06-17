import React, { Component } from 'react';
import PropTypes from 'prop-types';
import str8 from 'str8';

const loremText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis vitae risus non viverra. Vivamus condimentum sed ipsum vitae ullamcorper. Vestibulum ac mi malesuada, fermentum magna non, tincidunt ligula. Nam in elit sapien. Maecenas interdum quam tellus, a malesuada augue hendrerit eget. Praesent ullamcorper non felis id pulvinar. Donec efficitur semper ultrices. Integer aliquam cursus urna ac ullamcorper. Curabitur pulvinar quis lectus at vehicula. Quisque tempus mattis diam non sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur turpis velit, semper eget consectetur nec, commodo in felis. Sed tristique elit ut quam vestibulum egestas. Aenean aliquam urna id auctor euismod. Sed fringilla accumsan nibh. Nunc tincidunt, nisi sit amet pharetra bibendum, purus erat hendrerit ipsum, sit amet bibendum ante mauris ac ex. Vestibulum lectus neque, hendrerit at mi sit amet, tristique rhoncus leo. In ultricies felis vel maximus scelerisque. Proin a pharetra lorem. Donec in neque eu purus elementum mattis. Suspendisse nisl erat, gravida eu aliquet vitae, ornare venenatis risus. Sed rutrum eleifend massa sit amet elementum. In ut ante tellus. Vestibulum imperdiet quam eu nisl condimentum eleifend. Duis mi arcu, scelerisque quis ipsum a, gravida facilisis lorem. Donec quis ultricies urna. Suspendisse molestie feugiat nisi sit amet malesuada. Curabitur porta sed nibh non tincidunt. Cras nec lacus dui. Nam fermentum tincidunt diam, sed posuere nisl dictum a. Curabitur ipsum turpis, porta vitae neque mattis, congue eleifend eros. Mauris id rhoncus nulla. Integer facilisis, nisi vel maximus hendrerit, massa urna gravida quam, quis semper lorem eros at augue. Integer magna sem, blandit scelerisque cursus id, eleifend non magna. Etiam eu tempor nunc. Phasellus in suscipit urna, eu malesuada nunc. Morbi consequat, nisi at tristique sodales, sapien tortor euismod tortor, eget commodo mauris ligula et est. Fusce sollicitudin accumsan posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam suscipit, nibh nec faucibus rutrum, massa lacus auctor sem, quis pulvinar ante urna nec augue. Ut luctus magna lacus, eget aliquam mi pretium nec. Duis tempus tincidunt tellus quis faucibus. Morbi mattis placerat est. Ut eget mi mauris.';
const fonts = { small: 9, medium: 20, large: 50 };

export default class Lorem extends Component {

  static propTypes =
  {
    color: PropTypes.string,
    fontSize: PropTypes.oneOfType([PropTypes.oneOf(Object.keys(fonts)), PropTypes.number]),
    /**
     * Repetitions object of the text. Contains amount of reps and whether a line break should
     * be added for each intermediate occurence of the repetitions.
     */
    reps: PropTypes.shape({
      times: PropTypes.number.isRequired, // if reps is provided, then times is required
      lineBreak: PropTypes.bool
    })
  };

  static defaultProps =
  {
    color: 'blueviolet',
    fontSize: 25,
    reps: {
      times: 1,
      lineBreak: null
    }
  };

  render() {
    const times = this.props.reps.times;
    const color = this.props.color;
    const fontSize = typeof (this.props.fontSize) === 'string' ? fonts[this.props.fontSize] : this.props.fontSize;
    const displayText = [];
    for (let t = 0; t < times; t += 1) {
      // Determine whether a line break has to be added for each intermediate occurence of the repetitions.
      if (times > 1 && t > 0 && this.props.reps.lineBreak) displayText.push(<br key={str8.quickHash(t.toString())} />);
      displayText.push(
        <div key={t} style={{ color, fontSize }}>
          {loremText}
        </div>
      );
    }

    return (
      <div>{displayText}</div>
    );
  }
}
