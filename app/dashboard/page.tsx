"use client";

import { LoginButton } from "@telegram-auth/react";

export default function Home() {
  return (
    <div className="container mx-auto px-1">
      <LoginButton
        botUsername={"denislukin_test_bot"}
        onAuthCallback={data => {
          console.log(data);
          // call your backend here to validate the data and sign in the user
        }}
      />
    </div>
  );
}
