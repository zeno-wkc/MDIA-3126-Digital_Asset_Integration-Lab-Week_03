import { Text, View } from 'react-native';
import { Link } from 'expo-router';

// export default function Page() {
//   return <Text>This is my "home" page</Text>;
// }

export default function Page() {
  return (
    <View>
      <Text>This is my "home" page</Text>
      <Link href="/sandwich">sandwich</Link>
      <Link href="/cheese">cheese</Link>
    </View>
  );
}