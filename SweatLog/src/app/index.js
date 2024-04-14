import { Link } from "expo-router";
import { Button } from "react-native-web";
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


export default function App() {
    return (
       <Link href="Welcome">
         <Button
        title="Click me"
        />
       </Link>
    );
}


