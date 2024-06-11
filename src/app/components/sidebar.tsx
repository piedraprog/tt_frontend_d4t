import { NavItem } from "./navItem";
import { LogoutButton } from "./custom/LogOutButton";

export function Sidebar() {
  return (
    <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-5">
          Rick & Morty Dashboard
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <NavItem href="/dashboard">
              Dashboard
            </NavItem>
            <NavItem href="/dashboard/episodes">
              Episodes
            </NavItem>
            <NavItem href="/dashboard/characters">
              Characters
            </NavItem>
            <LogoutButton />
          </nav>
        </div>
      </div>
    </div>);
}


