"use client";
import { LoginButton } from "@telegram-auth/react";

export default function Home() {
  return (
    <div className="container mx-auto px-1">
      <button className="bg-red-400 hover:bg-cyan-600 ...">Subscribe</button>
      <LoginButton
        botUsername={"denislukin_test_bot"}
        authCallbackUrl="/path/to/callback/url"
        buttonSize="large" // "large" | "medium" | "small"
        cornerRadius={5} // 0 - 20
        showAvatar={true} // true | false
        lang="en"
      />
    </div>
  );
}
