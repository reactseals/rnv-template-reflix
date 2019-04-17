import React from 'react';
import { TouchableOpacity, Text, Platform } from 'react-native';
import PropTypes from 'prop-types';
import stylesAll from './styles';
import stylesTV from './styles/index.tv';

const { isTV } = Platform;

const styles = isTV ? stylesTV : stylesAll;

const parallax = {
  enabled: true,
  shiftDistanceY: 2,
  shiftDistanceX: 2,
  tiltAngle: 0.05,
  pressMagnification: 1,
  magnification: 1.1,
};

class ButtonWithBackground extends React.Component {
  state = {
    isFocused: false,
    inlineStyles: {},
  };

  render() {
    const { containerStyle, disabled, children, textStyle, onPress } = this.props;
    const { isFocused, inlineStyles } = this.state;
    const content = (
      <Text style={[styles.text, textStyle, disabled ? styles.disabledText : null]}>
        {children}
      </Text>
    );
    return (
      <TouchableOpacity
        tvParallaxProperties={parallax}
        className="focusable"
        style={[
          isTV && isFocused ? styles.focused : null,
          styles.button,
          containerStyle,
          disabled ? styles.disabledStyle : null,
          inlineStyles,
        ]}
        onFocus={() => {
          this.setState({ isFocused: true });
        }}
        onBlur={() => {
          this.setState({ isFocused: false });
        }}
        onMouseEnter={() => {
          this.setState({ inlineStyles: { opacity: 0.8 } });
        }}
        onMouseLeave={() => {
          this.setState({ inlineStyles: { opacity: 1 } });
        }}
        onPress={!disabled && onPress}
      >
        {content}
      </TouchableOpacity>
    );
  }
}

export default ButtonWithBackground;

ButtonWithBackground.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  disabled: PropTypes.bool,
  children: PropTypes.node,
  textStyle: PropTypes.object,
  onPress: PropTypes.func,
};

ButtonWithBackground.defaultProps = {
  containerStyle: null,
  disabled: false,
  children: '',
  textStyle: null,
  onPress: () => {},
};
