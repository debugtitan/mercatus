/* eslint-disable react-native/no-inline-styles */
import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import { PageLayout } from '../../AppLayout';
import { useTheme, Dropdown } from '../../components';
import { DARK, LIGHT, Styles, genderOptions } from '../../constants';
import DateTimePicker from 'react-native-ui-datepicker';
//import CountryPicker from "react-native-country-picker-modal";

export default function Signup() {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  const styles = Styles();

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [gender, setGender] = useState(null);

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
        <View style={{ marginBottom: 18 }}>
          <Text style={styles.textLabel}>Date of birth</Text>
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
      </View>
    </PageLayout>
  );
}
