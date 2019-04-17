import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import ButtonWithBackground from '../ButtonWithBackground';
import stylesTV from '../../screens/DetailsScreen/styles/index.tv';
import stylesSTV from '../../screens/DetailsScreen/styles/index.stv';
import Api from '../../api';

const IS_STV = Api.platform === 'tizen' || Api.platform === 'webos';
const styles = IS_STV ? stylesSTV : stylesTV;

const PickerTV = ({ handleSeasonChange, movie }) => (
  <View>
    <Text style={[styles.description, { marginTop: 20 }]}>
Select season:
    </Text>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
      {movie.seasons
        && movie.seasons.map((season, i) => (
          <ButtonWithBackground
            label={`Season ${i}`}
            value={season.season_number}
            containerStyle={{
              alignSelf: 'center',
              backgroundColor: '#0e0e0e',
              width: '10%',
            }}
            onPress={() => handleSeasonChange(i)}
          >
            {`Season ${i}`}
          </ButtonWithBackground>
        ))}
    </View>
  </View>
);

export default PickerTV;

PickerTV.propTypes = {
  handleSeasonChange: PropTypes.func,
  movie: PropTypes.object,
};
