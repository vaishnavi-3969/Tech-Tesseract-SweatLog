//root layout
import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{ title: "Sweat Log" }} 
                />
        </Stack>
    );
}