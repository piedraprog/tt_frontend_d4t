import { logoutAction } from "@/app/data/actions/outh-actions";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  return (
    <form action={logoutAction}>
      <Button
        variant={"outline"}
        type="submit"
        className="font-bold py-2 px-4 rounded w-full mt-6"
      >
        <LogOut className="w-6 h-6 mr-6" />
        Log Out
      </Button>
    </form>
  );
}