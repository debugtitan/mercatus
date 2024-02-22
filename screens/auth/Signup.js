/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { PageLayout } from '../../AppLayout';
import { useTheme, Dropdown, Checkbox } from '../../components';
import {
  DARK,
  LIGHT,
  Styles,
  genderOptions,
  IMAGES,
  RoutePaths,
} from '../../constants';
import DateTimePicker from '@react-native-community/datetimepicker';
import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal';

export default function Signup({ route, navigation }) {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  const styles = Styles();

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [gender, setGender] = useState(null);
  const [dob, setDob] = useState(null);
  const [terms, setTerms] = useState(false);
  const [country, setCountry] = useState();
  const [countryCode, setCountryCode] = useState('NG');

  const onSelect = country => {
    setCountryCode(country.cca2);
    setCountry(country);
  };

  //Date of birth
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleDatePickerOpen = () => {
    setOpen(!open);
  };
  const getMaximumDate = () => {
    const today = new Date();
    const maximumDate = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate()
    );
    return maximumDate;
  };

  const onDateChange = ({ type }, selectedDate) => {
    const dateString = selectedDate.toDateString();
    const userDOB = new Date(dateString);
    const year = userDOB.getFullYear();
    const month = userDOB.getMonth() + 1;
    const day = userDOB.getDate();
    const formattedDate = [day, month, year].join('/');
    if (type == 'set') {
      setDate(selectedDate);

      if (Platform.OS === 'android') {
        handleDatePickerOpen();
        setDob(formattedDate);
      }
    }
    handleDatePickerOpen();
  };

  return (
    <PageLayout>
      <View style={{ marginBottom: 5, paddingHorizontal: 14, marginTop: 20 }}>
        {/* NAME */}
        <View style={{ marginBottom: 18 }}>
          <Text style={styles.textLabel}>Name</Text>
          <View style={styles.formContainer}>
            <TextInput
              placeholder="Enter Name"
              cursorColor={theme.TABS_INACTIVE}
              placeholderTextColor={theme.TABS_INACTIVE}
              onChangeText={userName => setName(userName)}
              style={styles.textInput}
            />
          </View>
        </View>
        {/* EMAIL */}
        <View style={{ marginBottom: 18 }}>
          <Text style={styles.textLabel}>Email</Text>
          <View style={styles.formContainer}>
            <TextInput
              placeholder="Enter Email"
              inputMode="email"
              keyboardType="email-address"
              cursorColor={theme.TABS_INACTIVE}
              placeholderTextColor={theme.TABS_INACTIVE}
              onChangeText={userEmail => setEmail(userEmail)}
              style={styles.textInput}
            />
          </View>
        </View>

        {/* Date Of Birth */}

        {open && (
          <DateTimePicker
            value={date}
            mode="date"
            display="spinner"
            onChange={onDateChange}
            maximumDate={getMaximumDate()}
          />
        )}
        <View style={{ marginBottom: 18 }}>
          <Text style={styles.textLabel}>Date of birth</Text>
          <TouchableOpacity
            style={styles.formContainer}
            onPress={handleDatePickerOpen}
          >
            <TextInput
              placeholder="DD/MM/YY"
              editable={false}
              style={styles.textInput}
              value={dob}
              cursorColor={theme.TABS_INACTIVE}
              placeholderTextColor={theme.TABS_INACTIVE}
            />
          </TouchableOpacity>
        </View>

        {/* GENDER */}
        <View style={{ marginBottom: 18 }}>
          <Text style={styles.textLabel}>Gender</Text>
          <Dropdown
            data={genderOptions}
            placeholder="Select Gender"
            valueField="value"
            value={gender}
            style={styles.dropDown}
            //onSelect={selectedGender}
            setSelected={userGender => setGender(userGender)}
          />
        </View>

        {/* Country Picker */}
        <View style={{ marginBottom: 18 }}>
          <Text style={styles.textLabel}>Country</Text>
          <View style={styles.formContainer}>
            <View style={{ padding: 8 }}>
              <CountryPicker
                countryCode={countryCode}
                withCountryNameButton={true}
                withCloseButton={false}
                onSelect={onSelect}
              />
            </View>
          </View>
        </View>
        {/* TERMS AND POLICY */}
        <View style={{ marginTop: 150, flexDirection: 'row' }}>
          <Checkbox
            checked={terms}
            checkedImage={
              <Image source={IMAGES.CHECKBOX} tintColor={theme.PRIMARY} />
            }
            onSelect={() => setTerms(!terms)}
          />
          <View style={{ width: 270, marginLeft: 10 }}>
            <Text style={styles.paragraph}>
              {' '}
              I agree to Mercatus <Text style={styles.terms}>
                Terms of Use
              </Text>{' '}
              and <Text style={styles.terms}>Privacy Policy</Text>.
            </Text>
          </View>
        </View>

        {/*BUTTON */}
        <View style={{ marginTop: 35, paddingHorizontal: 8 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutePaths.SET_PASWORD)}
            style={[styles.button, { backgroundColor: theme.PRIMARY }]}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </PageLayout>
  );
}
