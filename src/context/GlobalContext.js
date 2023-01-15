import AuthProvider from "./authContext";
import UserProvider from "./userContext";

export default function GlobalContext({ children }) {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  );
}
