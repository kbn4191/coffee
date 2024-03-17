"use client";
import { Box, Button, Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../img/logo.png";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const path = usePathname();
  const Nav = [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 2,
      name: "Products",
      href: "/products",
    },
    {
      id: 3,
      name: "About",
      href: "/about",
    },
    {
      id: 4,
      name: "Contact",
      href: "/contact",
    },
  ];
  return (
    <Box bgcolor={"#1E1E1E"} py={1}>
      <Container>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}>
          <Image
            src={Logo}
            alt="AZ Coffee Logo"
            style={{ width: "auto", height: 50 }}
          />
          <Box color={"white"} display={"flex"} gap={5} alignItems={"center"}>
            {Nav.map((nav) => (
              <Link
                key={nav.id}
                href={nav.href}
                className={path === nav.href ? "active" : "defualtnav"}>
                {nav.name}
              </Link>
            ))}
            <Button
              style={{
                backgroundColor: "#E1A140",
                color: "#1E1E1E",
                fontWeight: 550,
                textTransform: "none",
              }}>
              Order Now
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
