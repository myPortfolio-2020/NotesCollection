// import { Button, Text, View, TextInput, StyleSheet } from "react-native";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   decreaseCount,
//   increaseCount,
//   countByNumber,
// } from "./redux/slices/appSlice";
// import { RootState } from "./redux/store";

// const Index: any = () => {
//   const dispatch = useDispatch();
//   const count = useSelector((state: RootState) => state.appReducer.count);
//   const countNumber = useSelector(
//     (state: RootState) => state.appReducer.countNumber
//   );
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>count={count}</Text>
//       <View>
//         <TextInput
//           style={styles.inputStyle}
//           value={countNumber}
//           onChange={(e) => dispatch(countByNumber(e.target.value))}
//         />
//       </View>
//       <Text onPress={() => dispatch(increaseCount())}>Increase</Text>
//       <Text onPress={() => dispatch(decreaseCount())}>Decrease</Text>
//     </View>
//   );
// };

// export default Index;

// const styles = StyleSheet.create({
//   inputStyle: {
//     padding: 11,
//     backgroundColor: "red",
//     color: "#fff",
//   },
// });

import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

const index = () => {
  const [textVal, setTextVal] = useState<number>(0);

  const handlerPress = () => {
    setTextVal(Number(textVal) + 1);
  };
  return (
    <View>
      <Text>{textVal}</Text>
      <TextInput
        placeholder="enter nm"
        placeholderTextColor={"red"}
        onChangeText={(newVal: any) => setTextVal(newVal)}
      />

      <TouchableOpacity onPress={handlerPress}>on press</TouchableOpacity>
    </View>
  );
};

export default index;
