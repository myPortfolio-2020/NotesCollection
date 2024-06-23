import { Button, Text, View, TextInput, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCount,
  increaseCount,
  countByNumber,
} from "./redux/slices/appSlice";
import { RootState } from "./redux/store";

const Index = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.appReducer.count);
  const countNumber = useSelector(
    (state: RootState) => state.appReducer.countNumber
  );
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>count={count}</Text>
      <View>
        <TextInput style={styles.inputStyle} value="5" />
      </View>
      <Text onPress={() => dispatch(increaseCount())}>Increase</Text>
      <Text onPress={() => dispatch(decreaseCount())}>Decrease</Text>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  inputStyle: {
    padding: 11,
    backgroundColor: "red",
    color: "#fff",
  },
});
