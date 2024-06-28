"use client";
import { useState } from "react";
import { Group, Code } from "@mantine/core";
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
  IconUsers,
  IconHandFinger,
  IconChalkboard,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./NavbarSimple.module.css";

const data = [
  { link: "/dashboard", label: "Dashboard", icon: IconChalkboard },
  {
    link: "/request-workforce",
    label: "Request Workforce",
    icon: IconReceipt2,
  },
  {
    link: "/manual-allocation",
    label: "Manual Allocation",
    icon: IconHandFinger,
  },
  {
    link: "/jobsite-registration",
    label: "Register a Jobsite",
    icon: IconUsers,
  },
];

export function NavbarSimple() {
  const [active, setActive] = useState("Billing");
  const pathname = usePathname();
  const links = data.map((item) => (
    <Link
      href={item.link}
      className={classes.link}
      data-active={item.link === pathname || undefined}
      key={item.label}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>{links}</div>
      <div className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}
