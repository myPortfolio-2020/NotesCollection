import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCount, increaseCount } from "./redux/slices/appSlice";
import appSlice from "./redux/slices/appSlice";
import { RootState } from "./redux/store";

export default function Index() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.appReducer.count);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>count={count}</Text>
      <Text onPress={() => dispatch(increaseCount())}>Increase</Text>
      <Text onPress={() => dispatch(decreaseCount())}>Decrease</Text>
    </View>
  );
}
