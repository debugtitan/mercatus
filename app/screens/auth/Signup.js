import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useState } from "react";
import PageLayout from "../../PageLayout";
import { useTheme } from "../../components/ThemeProvider";
import { DARK, LIGHT, STYLES, RoutePaths } from "../../constants";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function ({ navigation }) {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  const styles = STYLES();

  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

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

  console.log(gender)

  
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
              <TextInput
                placeholder="M or F"
                inputMode="text"
                style={styles.textInput}
                cursorColor={theme.TABS_INACTIVE}
                onChange={(e) => setGender(e.target.value)}
                placeholderTextColor={theme.TABS_INACTIVE}
                maxLength={1}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Country */}

        <View className="mb-4">
          <TouchableOpacity>
            <Text style={styles.textLabel}>Country</Text>

            <View style={styles.textInputContainer}>
              <View style={styles.textInput}>
                
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* CHECKBOX */}
        <View className="mb-5">
        </View>

        {/*BUTTON */}
        <View className="mt-8">
          <View className="my-5">
            <TouchableOpacity
              style={styles.button}
              className=""
              onPress={() => navigation.navigate(RoutePaths.HOME_PAGE)}
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
