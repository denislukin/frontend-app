import { LoginButton as LG } from "@telegram-auth/react";

export default function LoginButton() {
  return (
    <div className="App">
      <LG
        botUsername={process.env.BOT_USERNAME || "testName"}
        authCallbackUrl="/path/to/callback/url"
        buttonSize="large" // "large" | "medium" | "small"
        cornerRadius={5} // 0 - 20
        showAvatar={true} // true | false
        lang="en"
      />
    </div>
  );
}
