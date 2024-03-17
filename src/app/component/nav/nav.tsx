"use client";
import { AppBar, Box, Button, Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../img/logo.png";
import { usePathname } from "next/navigation";
import Drawer from "@mui/material/Drawer";
import React, { useState } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const toggleDrawer = (open:any) => (event:any) => {
        if (
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setOpen(open);
      };
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
    <>
    <AppBar style={{zIndex:1000}} position="fixed">
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
          <Box
            color={"white"}
            display={{ md: "flex", xs: "none" }}
            gap={5}
            alignItems={"center"}>
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
          <Box display={{ md: "none", xs: "flex" }} gap={3}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.80345 1.06667C6.10212 0.437333 6.74639 0 7.49092 0H11.7576C12.5021 0 13.1453 0.437333 13.4451 1.06667C14.1736 1.07307 14.7421 1.10613 15.2499 1.30453C15.856 1.54162 16.3831 1.94455 16.7709 2.4672C17.1624 2.99413 17.3469 3.66933 17.5987 4.5984L18.3901 7.50187L18.6888 8.39893L18.7144 8.43093C19.6755 9.66187 19.2179 11.4923 18.3027 15.152C17.7203 17.4805 17.4301 18.6443 16.5619 19.3227C15.6936 20 14.4936 20 12.0936 20H7.15492C4.75492 20 3.55492 20 2.68665 19.3227C1.81839 18.6443 1.52719 17.4805 0.945854 15.152C0.0306537 11.4923 -0.426946 9.66187 0.53412 8.43093L0.55972 8.39893L0.858387 7.50187L1.64985 4.5984C1.90265 3.66933 2.08719 2.99307 2.47759 2.46613C2.86556 1.94387 3.39268 1.54133 3.99865 1.30453C4.50639 1.10613 5.07385 1.072 5.80345 1.06667ZM5.80559 2.66987C5.09945 2.67733 4.81572 2.704 4.58105 2.79573C4.25462 2.92339 3.97072 3.14038 3.76185 3.42187C3.57412 3.67467 3.46319 4.02773 3.15385 5.16587L2.54585 7.39413C3.63385 7.2 5.12079 7.2 7.15385 7.2H12.0936C14.1277 7.2 15.6136 7.2 16.7016 7.392L16.0947 5.16373C15.7853 4.0256 15.6744 3.67253 15.4867 3.41973C15.2778 3.13825 14.9939 2.92126 14.6675 2.7936C14.4328 2.70187 14.1491 2.6752 13.4429 2.66773C13.2915 2.9865 13.0527 3.25581 12.7545 3.44441C12.4562 3.63302 12.1105 3.7332 11.7576 3.73333H7.49092C7.13811 3.7333 6.79254 3.63328 6.49426 3.44486C6.19597 3.25646 5.95719 2.98844 5.80559 2.66987Z"
                fill="white"
              />
            </svg>
            <Box onClick={toggleDrawer(true)} color={"#E1A140"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="#E1A140">
                <path
                  d="M0.833403 8.33236C0.612371 8.33236 0.400391 8.24456 0.244098 8.08826C0.0878048 7.93197 0 7.71999 0 7.49896V0.833403C0 0.612371 0.0878048 0.400391 0.244098 0.244098C0.400391 0.0878048 0.612371 0 0.833403 0H7.50062C7.72166 0 7.93364 0.0878048 8.08993 0.244098C8.24622 0.400391 8.33403 0.612371 8.33403 0.833403V7.49896C8.33403 7.71999 8.24622 7.93197 8.08993 8.08826C7.93364 8.24456 7.72166 8.33236 7.50062 8.33236H0.833403ZM12.501 8.33236C12.28 8.33236 12.068 8.24456 11.9117 8.08826C11.7554 7.93197 11.6676 7.71999 11.6676 7.49896V0.833403C11.6676 0.612371 11.7554 0.400391 11.9117 0.244098C12.068 0.0878048 12.28 0 12.501 0H19.1666C19.3876 0 19.5996 0.0878048 19.7559 0.244098C19.9122 0.400391 20 0.612371 20 0.833403V7.49896C20 7.71999 19.9122 7.93197 19.7559 8.08826C19.5996 8.24456 19.3876 8.33236 19.1666 8.33236H12.501ZM0.833403 20C0.612371 20 0.400391 19.9122 0.244098 19.7559C0.0878048 19.5996 0 19.3876 0 19.1666V12.4994C0 12.2783 0.0878048 12.0664 0.244098 11.9101C0.400391 11.7538 0.612371 11.666 0.833403 11.666H7.50062C7.72166 11.666 7.93364 11.7538 8.08993 11.9101C8.24622 12.0664 8.33403 12.2783 8.33403 12.4994V19.1666C8.33403 19.3876 8.24622 19.5996 8.08993 19.7559C7.93364 19.9122 7.72166 20 7.50062 20H0.833403ZM12.501 20C12.28 20 12.068 19.9122 11.9117 19.7559C11.7554 19.5996 11.6676 19.3876 11.6676 19.1666V12.4994C11.6676 12.2783 11.7554 12.0664 11.9117 11.9101C12.068 11.7538 12.28 11.666 12.501 11.666H19.1666C19.3876 11.666 19.5996 11.7538 19.7559 11.9101C19.9122 12.0664 20 12.2783 20 12.4994V19.1666C20 19.3876 19.9122 19.5996 19.7559 19.7559C19.5996 19.9122 19.3876 20 19.1666 20H12.501Z"
                  fill="#E1A140"
                />
              </svg>
            </Box>
          </Box>
        </Box>
      </Container>
      
    </Box>
    </AppBar>
    <Box >
    
    <Drawer
    
      anchor="left"
      open={open}
      onClose={toggleDrawer(false)}
      style={{ zIndex: 10,  }}
      PaperProps={{
          sx: {
            width: "70%",
           
          }
        }}
       
        
      
    >
      <Container>
        <Box mt={12}>
            <Box display={"flex"} justifyContent={"end"} onClick={toggleDrawer(false)} >
                <Box width={40} height={40} borderRadius={3} border={"1px solid #1E1E1E"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <CloseRoundedIcon />
                </Box>

            </Box>

            <Box display={"flex"} flexDirection={"column"} gap={2} mt={2}>

            {Nav.map((nav) => (
              <Link
                key={nav.id}
                href={nav.href}
                className={path === nav.href ? "active" : "defualtnav"}>
                {nav.name}
              </Link>
            ))}
              
            </Box>

        </Box>
      </Container>
      </Drawer>
      </Box>
     </>
  );
}
