import { createContext, useState } from "react";
import { useProtectedRoute } from "../hooks/useProtectedRoute";

export const AuthContext = createContext<{
  signIn: () => void;
  signOut: () => void;
  user: any;
} | null>(null);

export function AuthProvider({ children }: any) {
  const [user, setAuth] = useState<any>(null);
  useProtectedRoute(user);

  return (
    <AuthContext.Provider
      value={{
        signIn: () => setAuth({ name: "Andrew" }),
        signOut: () => setAuth(null),
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
