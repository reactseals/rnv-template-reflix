import React from 'react';
import ModalSelector from 'react-native-modal-selector';
import PropTypes from 'prop-types';
import styles from '../../screens/DetailsScreen/styles';
import colors from '../../res/colors';

const PickerTV = ({ handleSeasonChange, movie }) => (
  <ModalSelector
    data={movie.seasons}
    keyExtractor={item => item.id}
    labelExtractor={item => item.name}
    initValue="Select season"
    ref={(selector) => {
      this.selector = selector;
    }}
    onChange={(option) => {
      handleSeasonChange(option.season_number);
    }}
    cancelStyle={{ backgroundColor: colors.lightGrey }}
    cancelTextStyle={{ color: colors.text }}
    optionContainerStyle={{ backgroundColor: colors.lightGrey }}
    optionTextStyle={{ color: colors.text }}
    selectStyle={styles.modalSelectStyle}
    selectTextStyle={styles.modalSelectTextStyle}
  />
);

export default PickerTV;

PickerTV.propTypes = {
  handleSeasonChange: PropTypes.func,
  movie: PropTypes.object,
};
