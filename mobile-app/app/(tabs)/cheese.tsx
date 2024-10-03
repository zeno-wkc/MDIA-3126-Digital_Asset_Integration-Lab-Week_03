import { Text, View } from 'react-native';
import { Link } from 'expo-router';

// export default function Page() {
//   return <Text>This is my "home" page</Text>;
// }

export default function Page() {
  return (
    <View className="bg-red-600">
      <Text className="text-lg border-2 border-violet-800">This is my "home" page</Text>
      <Text className="text-lg border-2 border-green-900">This is my "home" page</Text>
      <Text className="text-lg border-2 border-blue-700">This is my "home" page</Text>
      <Text className="text-lg border-4 border-sky-800 bg-green-600">This is my "home" page</Text>
      <Link href="/sandwich">sandwich</Link>
      <Link href="/cheese">cheese</Link>
    </View>
  );
}