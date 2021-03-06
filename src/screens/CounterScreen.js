import React, { useReducer } from "react";
import { Text, View, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, counter: state.counter + action.payload };
    case "decrease":
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  //   const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "increase", payload: 1 })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "decrease", payload: 1 })}
      />

      <Text>The count is: {state.counter}</Text>
    </View>
  );
};

export default CounterScreen;
