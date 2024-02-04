import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  Image
} from "react-native";
import React, { useState } from "react";
import PageLayout from "../../PageLayout";
import { useTheme } from "../../components/ThemeProvider";
import { DARK, LIGHT, STYLES, RoutePaths, IMAGES } from "../../constants";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import CountryPicker from 'react-native-country-picker-modal'
import CheckBox from "../../components/CheckBox"
export default function ({ route, navigation }) {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  const styles = STYLES();
  

  const [dob, setDob] = useState(null);
  const [gender, setGender] = useState(null);

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [country, setCountry] = useState()
  const [countryCode,setCountryCode] = useState(route.params.countryCode);

  const [terms, setTerms] = useState(false)

  const onSelect = (country) => {
    setCountryCode(country.cca2)
    setCountry(country)
  }

  const onTermsAccepted = () => {
    setTerms(!terms)
  }

  const onChange = ({ type }, selectedDate) => {
    const currentDate = selectedDate;
    if (type == "set") {
      setDate(currentDate);

      if (Platform.OS === "android") {
        toggleDatePicker();
        setDob(currentDate.toDateString());
      }
    } else {
      toggleDatePicker();
    }
  };

  const toggleDatePicker = () => {
    setOpen((prev) => !prev);
  };


  const goToNextRoute = () => {
    if(terms && dob && gender){
      navigation.navigate(RoutePaths.HOME_PAGE)
    }
    alert('fix the errors')
  }

  return (
    <PageLayout>
      <View className="mt-2 flex-1">
        {/* NAME */}
        <View className="mb-4">
          <Text style={styles.textLabel}>Name</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="Enter Name"
              inputMode="text"
              keyboardType="name-phone-pad"
              style={styles.textInput}
              cursorColor={theme.TABS_INACTIVE}
              placeholderTextColor={theme.TABS_INACTIVE}
            />
          </View>
        </View>

        {/*EMAIL */}
        <View className="mb-4">
          <Text style={styles.textLabel}>Email</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="Enter Email"
              inputMode="email"
              keyboardType="email-address"
              style={styles.textInput}
              cursorColor={theme.TABS_INACTIVE}
              placeholderTextColor={theme.TABS_INACTIVE}
            />
          </View>
        </View>

        {/*DOB */}
        {open && (
          <DateTimePicker
            value={date}
            mode="date"
            display="spinner"
            onChange={onChange}
          />
        )}
        <View className="mb-4">
          <Text style={styles.textLabel}>Date of birth</Text>
          <TouchableOpacity onPress={toggleDatePicker}>
            <View style={styles.textInputContainer}>
              <TextInput
                placeholder="DD/MM/YY"
                style={styles.textInput}
                value={dob}
                cursorColor={theme.TABS_INACTIVE}
                placeholderTextColor={theme.TABS_INACTIVE}
                editable={false}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* GENDER */}
        <View className="mb-4">
          <Text style={styles.textLabel}>Gender</Text>
          <TouchableOpacity>
            <View style={styles.textInputContainer}>
              <Picker
                style={styles.textInput}
                selectedValue={gender}
                onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
              >
                <Picker.Item label="Male" value="M" />
                <Picker.Item label="Female" value="F" />
              </Picker>
            </View>
          </TouchableOpacity>
        </View>

        {/* Country */}

        <View className="mb-4">
          <TouchableOpacity>
            <Text style={styles.textLabel}>Country</Text>
            <View style={styles.textInputContainer}>
              <View style={styles.textInput}>
                <CountryPicker countryCode={countryCode} withCountryNameButton={true} withCloseButton={false} onSelect={onSelect}/>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* CHECKBOX */}
        <View className=" mt-48 flex-row items-center">
          <CheckBox checked={terms} checkedImage={<Image source={IMAGES.CHECKBOX} tintColor={theme.PRIMARY}/>} onSelect={onTermsAccepted}/>
          <View style={{width:290}} className='ml-4'>
          <Text style={styles.paragraph}> I agree to Mercatus <Text style={styles.terms}>Terms of Use</Text> and <Text style={styles.terms}>Privacy Policy</Text>.</Text>
          </View>
        </View>

        {/*BUTTON */}
        <View className="mb-1">
          <View className="my-5">
            <TouchableOpacity
              style={styles.button}
              className=""
              onPress={goToNextRoute}
            >
              <Text style={(styles.paragraph, { color: theme.SHADES })}>
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </PageLayout>
  );
}
