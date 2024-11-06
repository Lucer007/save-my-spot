"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import GoogleLogo from "@/public/google.svg";
import GitHubLogo from "@/public/github.svg";
import Image from "next/image";
import { Loader2 } from "lucide-react";

export function GoogleAuthButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className="w-full font-semibold">
          <Loader2 className="size-4 mr-2 animate-spin" />
          Please wait...
        </Button>
      ) : (
        <Button variant="outline" className="w-full font-semibold">
          <Image src={GoogleLogo} alt="Google Logo" className="size-4 mr-2 " />
          Sign in with Google
        </Button>
      )}
    </>
  );
}

export function GitHubAuthButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button
          disabled
          variant="outline"
          className="w-full font-semibold bg-primary"
        >
          <Loader2 className="size-4 mr-2 animate-spin" />
          Please wait...
        </Button>
      ) : (
        <Button variant="outline" className="w-full font-semibold bg-primary">
          <Image src={GitHubLogo} alt="GitHub Logo" className="size-4 mr-2 " />
          Sign in with GitHub
        </Button>
      )}
    </>
  );
}
