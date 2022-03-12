/// React Native Form
// Language: javascript

import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  StyleSheet,
  Button,
} from "react-native";

import { useForm, Controller } from "react-hook-form";

export default function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => console.log(data);

  return (
    <SafeAreaView
        style={styles.view}
    >
        <Text>
            Yecoom
        </Text>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
          style={styles.input}
            placeholder="Enter your name here"
            value={value}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
          />
        )}
        rules={{
          required: {
            value: true,
            message: "Field is required!",
          },
        }}
      />
      <Controller
        control={control}
        name="lastname" 
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your lastname here"
            value={value}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
          />
        )}
        rules={{
          required: {
            value: true,
            message: "Field is required!",
          },
        }}
      />
                  <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
          style={styles.input}
            placeholder="Enter your email here"
            value={value}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
          />
        )}
        rules={{
          required: {
            value: true,
            message: "Field is required!",
          },
        }}
      />
            <Controller
        control={control}
        name="ville"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
          style={styles.input}
            placeholder="Enter your ville here"
            value={value}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
          />
        )}
        rules={{
          required: {
            value: true,
            message: "Field is required!",
          },
        }}
      />
      
      <Button
      style={styles.button}
      title="Submit" onPress={handleSubmit(onSubmit)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    marginTop: 100,
    alignItems: "center",
  },

  input: {
    borderColor: "black",
    borderWidth: 0.2,
    marginTop: "5%",
    padding: "5%",
    borderRadius: 30,
    width: 300,
  },

  button: {
    borderRadius: 20,
    padding: "5%",
    color: "white",
    marginTop: "5%",
    width: 300,
    alignItems: "center",
    justifyContent: "center",
  },
});
