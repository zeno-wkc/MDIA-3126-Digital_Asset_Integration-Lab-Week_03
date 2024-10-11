import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

// export default function Page() {
//   return <Text>This is my "home" page</Text>;
// }

export default function Page() {
  return (
    <View className="bg-red-600" >
      <Text className="text-lg border-2 border-violet-800">This is my "home" page</Text>
      <Text className="text-lg border-2 border-green-900">This is my "home" page</Text>
      <Text className="text-lg border-2 border-blue-700">This is my "home" page</Text>
      <Text className="text-lg border-4 border-sky-800 bg-green-600">This is my "home" page</Text>
      <Link style={styles.sandwichPage} href="/sandwich">sandwich</Link>
      <Link style={styles.cheesePage} href="/cheese">cheese</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  sandwichPage: { 
    fontSize: 60,
    color: '#ca9023',
  },
  cheesePage: {
    borderWidth: 2,
    padding: 15,
    marginTop: 30,
    color: '#0014ff',
    fontSize: 80,
  }
})