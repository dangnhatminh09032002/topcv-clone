import AuthProvider from "./authContext";
import UserProvider from "./userContext";
import CvGeneratorProvider from "./cvGeneratorContext";

export default function GlobalContext({ children }) {
  return (
    <AuthProvider>
      <UserProvider>
        <CvGeneratorProvider>{children}</CvGeneratorProvider>
      </UserProvider>
    </AuthProvider>
  );
}
