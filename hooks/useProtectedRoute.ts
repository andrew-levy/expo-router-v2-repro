import { useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

export function useProtectedRoute(user: any) {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";
    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the login page.
      router.replace("/signin");
    } else if (user && inAuthGroup) {
      // Redirect away from the login page.
      router.replace("/");
    }
  }, [user, segments]);
}
