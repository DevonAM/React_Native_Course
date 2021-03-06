import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import TextInputScreen from "./src/screens/TextInputScreen";
import LayoutsScreen from "./src/screens/LayoutsScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Images: ImageScreen,
    Counter: CounterScreen,
    Colors: ColorScreen,
    Square: SquareScreen,
    TextInput: TextInputScreen,
    Layouts: LayoutsScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Dev's App",
    },
  }
);

export default createAppContainer(navigator);
