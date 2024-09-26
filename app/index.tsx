import { Link } from "expo-router";
import { View, Text } from "react-native";

const HomePage = () => {
  return (
    <View>
      <Text>Home Page</Text>
      <Link href="/example">
        <Text>Go to Example Page</Text>
      </Link>
    </View>
  );
};

export default HomePage;