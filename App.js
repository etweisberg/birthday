import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import First from "./screens/First";
import Second from "./screens/Second";
import Third from "./screens/Third";
import Fourth from "./screens/Fourth";
import Fifth from "./screens/Fifth";
import Sixth from "./screens/Sixth";
import Seventh from "./screens/Seventh";
import Summary from "./screens/Summary";
import { AppProvider } from "./utils/AppContext";
import HomeScreen from "./screens/HomeScreen";
import CameraScreen from "./screens/Camera";
import { pages } from "./utils/pages";

const Stack = createStackNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="🎂" component={HomeScreen} />
          <Stack.Screen name="Breakfast ☕️" component={First} />
          <Stack.Screen name="Game ⛳️" component={Second} />
          <Stack.Screen name="Shopping 🛍" component={Third} />
          <Stack.Screen name="Makeup 💄" component={Fourth} />
          <Stack.Screen name="Dinner 🥘" component={Fifth} />
          <Stack.Screen name="Dessert 🎂" component={Sixth} />
          <Stack.Screen name="Night-time 🌖" component={Seventh} />
          <Stack.Screen name="Summary" component={Summary} />
          <Stack.Screen
            name={`Camera for ${pages[1]}`}
            component={CameraScreen}
            initialParams={{ pictureID: pages[1], nextPage: pages[2] }}
          />
          <Stack.Screen
            name={`Camera for ${pages[2]}`}
            component={CameraScreen}
            initialParams={{ pictureID: pages[2], nextPage: pages[3] }}
          />
          <Stack.Screen
            name={`Camera for ${pages[3]}`}
            component={CameraScreen}
            initialParams={{ pictureID: pages[3], nextPage: pages[4] }}
          />
          <Stack.Screen
            name={`Camera for ${pages[4]}`}
            component={CameraScreen}
            initialParams={{ pictureID: pages[4], nextPage: pages[5] }}
          />
          <Stack.Screen
            name={`Camera for ${pages[5]}`}
            component={CameraScreen}
            initialParams={{ pictureID: pages[5], nextPage: pages[6] }}
          />
          <Stack.Screen
            name={`Camera for ${pages[6]}`}
            component={CameraScreen}
            initialParams={{ pictureID: pages[6], nextPage: pages[7] }}
          />
          <Stack.Screen
            name={`Camera for ${pages[7]}`}
            component={CameraScreen}
            initialParams={{ pictureID: pages[7], nextPage: pages[8] }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
