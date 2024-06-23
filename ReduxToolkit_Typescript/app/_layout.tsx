import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </Provider>
  );
}

// tutorial: https://www.youtube.com/watch?v=FBgW19Gofnk
