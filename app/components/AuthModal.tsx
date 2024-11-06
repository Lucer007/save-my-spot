import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { signIn } from "../lib/auth";
import { GitHubAuthButton, GoogleAuthButton } from "./SubmitButtons";

export function AuthModel() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Sign Up</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[360px] border-none">
        <DialogHeader className="flex justify-center items-center">
          <DialogTitle>
            <h4 className="text-3xl font-semibold">
              Save<span className="text-primary">MySpot</span>
            </h4>
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col mt-5 gap-3">
          <form
            action={async () => {
              "use server";

              await signIn("google");
            }}
            className="w-full"
          >
            <GoogleAuthButton />
          </form>

          <form
            action={async () => {
              "use server";

              await signIn("github");
            }}
            className="w-full"
          >
            <GitHubAuthButton />
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
