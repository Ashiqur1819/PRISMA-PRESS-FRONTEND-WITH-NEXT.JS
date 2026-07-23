"use client";

import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import {
  Boxes,
  LogOut,
  Settings,
  User,
  CreditCard,
  LifeBuoy,
  Menu,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logout from "@/service/logout";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


const navItems = [
  { label: "Dashboard", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Team", href: "#" },
  { label: "Pricing", href: "#" },
];

type User = {
  success: boolean;
  message: string;
  data: {
    id: string;
    name: string;
    email: string;
    activeStatus: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    profile: {
      id: string;
      userId: string;
      profilePhoto: string;
      bio: string;
      createdAt: string;
      updatedAt: string;
    };
  };
};

type NavabarProps = {
  user?: User;
};

type UserDropdownProps = {
  user?: User;
  handleLogout: (action: string) => Promise<void>;
};

export function Navbar({ user }: NavabarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLogout, setIslogout] = useState(false);
  const router = useRouter()

  const handleLogout = async (action: string) => {
    if (action === "logout") {
      await logout();
      setIslogout(true)
    }
  };

  useEffect(() => {
    if (isLogout) {
      toast.success("Logout Successfull.");
            router.push("/login")
    }
  }, [isLogout, router]);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Boxes className="size-5" aria-hidden="true" />
          </span>
          <span className="text-2xl font-semibold tracking-tight">
            Prisma Press
          </span>
        </Link>

        {/* Desktop menu items */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side: user dropdown + mobile toggle */}
        <div className="flex items-center gap-2">
          {/* <UserDropdown user={user} handleLogout={handleLogout} /> */}

          {
            !isLogout ? (<UserDropdown user={user} handleLogout={handleLogout} />) : <Link href={"/login"}>Login</Link>
          }

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <Menu className="size-5" />
          </Button>
        </div>
      </div>

      {/* Mobile menu items */}
      <nav
        className={cn("border-t md:hidden", mobileOpen ? "block" : "hidden")}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

function UserDropdown({ user, handleLogout }: UserDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <button
            type="button"
            className="flex items-center gap-2 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Open user menu"
          >
            <Avatar className="size-9 justify-center items-center">
              <User className="size-5" />
            </Avatar>
          </button>
        }
      />
      <DropdownMenuContent align="end" className="w-56">
        <div className="flex flex-col gap-0.5 px-1.5 py-1">
          <span className="text-sm font-medium">
            {user?.data?.name || "Name"}
          </span>
          <span className="text-xs text-muted-foreground">
            {user?.data?.email || "Email"}
          </span>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User />
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard />
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings />
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LifeBuoy />
            Support
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={async () => {
            await handleLogout("logout");
          }}
          variant="destructive"
        >
          <LogOut />
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
