import React from 'react';
import { Picker } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../screens/DetailsScreen/styles';

const PickerWeb = ({ handleSeasonChange, movie, selectedSeason }) => (
  <Picker
    mode="dialog"
    selectedValue={selectedSeason}
    style={styles.picker}
    onValueChange={itemValue => handleSeasonChange(itemValue)}
  >
    <Picker.Item label="Select season" value={null} />
    {movie.seasons
      && movie.seasons.map((season, i) => <Picker.Item label={`Season ${i}`} key={i} value={season.season_number} />)}
  </Picker>
);

export default PickerWeb;

PickerWeb.propTypes = {
  handleSeasonChange: PropTypes.func,
  movie: PropTypes.object,
  selectedSeason: PropTypes.number,
};
