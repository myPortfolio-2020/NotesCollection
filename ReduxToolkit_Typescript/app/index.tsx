import { Button, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { decreaseCount, increaseCount } from "./redux/slices/appSlice";

export default function Index() {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>count={0}</Text>
      <Text onPress={() => dispatch(increaseCount())}>Increase</Text>
      <Text onPress={() => dispatch(decreaseCount())}>Decrease</Text>
    </View>
  );
}
