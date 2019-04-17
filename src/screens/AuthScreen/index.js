import React, { Component } from 'react';
import { TextInput, AsyncStorage, KeyboardAvoidingView, Platform, Text, TouchableOpacity } from 'react-native';
import { IS_ANDROID_TV } from 'vanilla-helpers';
import firebase from '../../api/firebaseConfig';
import * as firebaseService from '../../api/firebase';
import ButtonWithBackground from '../../components/ButtonWithBackground';
import stylesAll from './styles';
import stylesSTV from './styles/index.stv';
import colors from '../../res/colors';
import Api from '../../api';

export default class AuthScreen extends Component {
  state = {
    authModeLogin: true,
    email: '',
    password: '',
  };

  componentDidMount() {
    const { navigation } = this.props;
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate('App');
        unsubscribe();
      }
    });
  }

  changeAuthState = () => {
    this.setState(prevState => ({
      authModeLogin: !prevState.authModeLogin,
    }));
  };

  handleLogin = async () => {
    const { email, password, authModeLogin } = this.state;
    if (authModeLogin) {
      await firebaseService.login(email, password);
    } else {
      await firebaseService.signUp(email, password);
    }
  };

  storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log('Error saving data to async storage', error);
    }
  };

  render() {
    const { authModeLogin, email, password } = this.state;
    const IS_SMART_TV = Api.platform === 'tizen' || Api.platform === 'webos';
    const styles = IS_SMART_TV ? stylesSTV : stylesAll;

    const inputEmail = (
      <TextInput
        ref={(node) => {
          this.inputEmail = node;
        }}
        className="focusable"
        style={styles.textInput}
        returnKeyType="next"
        textContentType="emailAddress"
        keyboardType="email-address"
        placeholder="Email"
        placeholderTextColor={colors.text}
        onChangeText={mail => this.setState({ email: mail })}
        value={email}
      />
    );

    const inputPassword = (
      <TextInput
        ref={(node) => {
          this.inputPassword = node;
        }}
        className="focusable"
        style={styles.textInput}
        onChangeText={psw => this.setState({ password: psw })}
        secureTextEntry
        textContentType="password"
        placeholder="Password"
        placeholderTextColor={colors.text}
        value={password}
      />
    );

    const androidTVPassword = (
      <TouchableOpacity style={{ width: '100%' }} onPress={() => this.inputPassword.focus()}>
        {inputPassword}
      </TouchableOpacity>
    );

    const androidTVEmail = (
      <TouchableOpacity style={{ width: '100%', alignSelf: 'center' }} onPress={() => this.inputEmail.focus()}>
        {inputEmail}
      </TouchableOpacity>
    );

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
        enabled
      >
        <Text style={styles.logo}>
          <Text style={{ color: colors.midGrey }}>
Re
          </Text>
          FLIX
        </Text>
        {IS_ANDROID_TV ? androidTVEmail : inputEmail}
        {IS_ANDROID_TV ? androidTVPassword : inputPassword}
        <ButtonWithBackground
          containerStyle={styles.buttonContainer}
          textStyle={styles.buttonText}
          onPress={this.handleLogin}
          disabled={(email && password) === ''}
        >
          {authModeLogin ? 'Login' : 'Register'}
        </ButtonWithBackground>
        <Text style={styles.subscript}>
          {authModeLogin ? "Don't have an account yet?" : 'Already registered?'}
        </Text>
        <ButtonWithBackground
          textStyle={styles.subscript}
          containerStyle={{ backgroundColor: 'transparent', width: 'auto', padding: 0, margin: 0 }}
          onPress={this.changeAuthState}
        >
          {authModeLogin ? 'Register' : 'Login'}
        </ButtonWithBackground>
      </KeyboardAvoidingView>
    );
  }
}
