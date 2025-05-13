import { LoginPage } from "@/features";

if (__DEV__) {
  require("../ReactotronConfig");
}

export default function Index() {
  return <LoginPage />;
}
