import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import PageLayout from "../../PageLayout";
import { useTheme } from "../../helpers/ThemeProvider";
import { DARK, LIGHT, STYLES, RoutePaths } from "../../constants";
import DatePicker from "react-native-date-picker";
export default function ({ navigation }) {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? DARK : LIGHT;
  const styles = STYLES();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <PageLayout>
      <View className="mt-5 flex-1">
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
