import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import React, { useState } from "react";
import PageLayout from "../../PageLayout";
import { useTheme } from "../../components/ThemeProvider";
import { DARK, LIGHT, STYLES, RoutePaths, IMAGES } from "../../constants";
import DateTimePicker from "@react-native-community/datetimepicker";
import CountryPicker from "react-native-country-picker-modal";
import CheckBox from "../../components/CheckBox";
import Dropdown from "../../components/DropDown";
import CustomTextInput from "../../components/CustomTextInput";

export default function ({ route, navigation }) {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  const styles = STYLES();

  const [name, setName] = useState();
  const [email, setEmail] = useState()
  const [dob, setDob] = useState(null);
  const [gender, setGender] = useState(null);

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [country, setCountry] = useState();
  const [countryCode, setCountryCode] = useState(
    route.params?.countryCode || "NG"
  );

  const [terms, setTerms] = useState(false);

  const options = ["Male", "Female"];
  const [selectedValue, setSelectedValue] = useState();

  const onSelect = (country) => {
    setCountryCode(country.cca2);
    setCountry(country);
  };

  const onTermsAccepted = () => {
    setTerms(!terms);
  };

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
    if (terms && dob && gender) {
      navigation.navigate(RoutePaths.HOME_PAGE);
    }
    alert("fix the errors");
  };

  return (
    <PageLayout>
      <View className="mt-2 flex-1">
        {/* NAME */}
        <View className="mb-4">
          <Text style={styles.textLabel} className="mb-1">
            Name
          </Text>
          <CustomTextInput
            placeholder="Enter Name"
            inputMode="text"
            textStyle={styles.textInput}
            cursorColor={theme.TABS_INACTIVE}
            placeholderTextColor={theme.TABS_INACTIVE}
            onChangeText={(e) => setName(e)}
          />
        </View>

        {/*EMAIL */}
        <View className="mb-4">
          <Text style={styles.textLabel} className="mb-1">
            Email
          </Text>

          <CustomTextInput
            placeholder="Enter Email"
            inputMode="email"
            keyboardType="email-address"
            textStyle={styles.textInput}
            cursorColor={theme.TABS_INACTIVE}
            placeholderTextColor={theme.TABS_INACTIVE}
            onChangeText={(e)=> setEmail(e)}
          />
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
          <Text style={styles.textLabel} className='mb-1'>Date of birth</Text>
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
          <Text style={styles.textLabel} className='mb-1'>Gender</Text>

          <Dropdown
            options={options}
            onOptionSelect={setSelectedValue}
            selectedValue={selectedValue}
            borderColor={theme.PRIMARY}
          />
        </View>

        {/* Country */}

        <View className="mb-4">
          <TouchableOpacity>
            <Text style={styles.textLabel} className='mb-1'>Country</Text>
            <View style={styles.textInputContainer}>
              <View style={styles.textInput}>
                <CountryPicker
                  countryCode={countryCode}
                  withCountryNameButton={true}
                  withCloseButton={false}
                  onSelect={onSelect}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* CHECKBOX */}
        <View className=" mt-48 flex-row items-center">
          <CheckBox
            checked={terms}
            checkedImage={
              <Image source={IMAGES.CHECKBOX} tintColor={theme.PRIMARY} />
            }
            onSelect={onTermsAccepted}
          />
          <View style={{ width: 290 }} className="ml-4">
            <Text style={styles.paragraph}>
              {" "}
              I agree to Mercatus <Text style={styles.terms}>
                Terms of Use
              </Text>{" "}
              and <Text style={styles.terms}>Privacy Policy</Text>.
            </Text>
          </View>
        </View>

        {/*BUTTON */}
        <View className="mb-1">
          <View className="my-3">
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
