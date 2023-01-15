/* -------------- ACC_ROLE -------------- */
export const ACC_ROLE = {
  ADMIN: "admin",
  USER: "user",
  MANAGER: "manager",
};

/* -------------- TYPE_PROVIDER FIREBASE -------------- */
export const TYPE_PROVIDER = {
  GOOGLE: "google",
  FACEBOOK: "facebook",
};

/* -------------- NAVIGATION -------------- */
export const NAVIGATION = {
  HOME: "/",
  // Auth
  SIGN_IN: "/auth/sign-in",
  SIGN_UP: "/auth/sign-up",
  FORGOT_PASSWORD: "/auth/forgot-password",
  // Erorr
  ERROR: "/error",
  // Admin
  DASHBOARD: "/admin/dashboard",
  MANAGE_ACCOUNT: "/admin/manage-account",
};

/* -------------- ERROR CODE -------------- */
export const ERROR_CODE = {
  EMAIL_NOT_SIGNUP: "auth/user-not-found",
  WRONG_PASS: "auth/wrong-password",
  INVALID_EMAIL: "auth/invalid-email",
};

export const ERROR_MESSAGE = {
  [ERROR_CODE.EMAIL_NOT_SIGNUP]: "Email chưa được đăng ký",
  [ERROR_CODE.WRONG_PASS]: "Email hoặc mật khẩu không đúng",
  [ERROR_CODE.INVALID_EMAIL]: "Email không hợp lệ",
};
