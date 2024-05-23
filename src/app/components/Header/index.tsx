'use client'
import { Navbar, Link, Dropdown, Avatar, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import AppLogo from "../AppLogo";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <Navbar className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <Link href="#">
          <AppLogo />
        </Link>
      </div>
      <div className={styles.navbarContent}>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="warning"
              name="Jason Hughes"
              size="sm"
              src="https://img.icons8.com/doodle/96/plant-under-sun--v1.png"
              alt="plant-under-sun--v1"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-10 gap-2">
              <p className="font-semibold">Vegetarian</p>
            </DropdownItem>
            <DropdownItem key="profile" className="h-10 gap-2">
              <p className="font-semibold">Vegan</p>
            </DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </Navbar>
  );
}
