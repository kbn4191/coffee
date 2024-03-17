import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Cup from "../../img/cup.png";
import MobileBanner from "../../img/mobilebanner.png";

export default function Header() {
  return (
    <>
      <Box
        mt={7}
        py={{ md: 10, xs: 6 }}
        bgcolor={"#1E1E1E"}
        display={{ md: "block", xs: "none" }}>
        <Container>
          <Box
            display={{ md: "flex", xs: "none" }}
            justifyContent={"space-between"}>
            <Box mt={3}>
              <Typography
                fontSize={50}
                fontWeight={700}
                lineHeight={"110%"}
                color={"white"}>
                Choose your Coffee<br></br>
                with <span style={{ color: "#E1A140" }}>AZ Coffee</span>
              </Typography>
              <Typography color={"white"}>
                A new world at your finger tips.
              </Typography>

              <Box display={"flex"} gap={3} mt={3}>
                <Button
                  style={{
                    backgroundColor: "#E1A140",
                    color: "#1E1E1E",
                    fontWeight: 550,
                    textTransform: "none",
                  }}>
                  Order Now
                </Button>
                <Button
                  style={{
                    backgroundColor: "none",
                    border: "1px solid #E1A140 ",
                    color: "white",
                    fontWeight: 550,
                    textTransform: "none",
                  }}>
                  Contact Us
                </Button>
              </Box>
            </Box>

            <Box>
              <Image
                src={Cup}
                width={397}
                height={343.48}
                alt="Az branding cup"
              />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box mt={12} display={{ md: "none", xs: "block" }}>
        <Container>
          <Image
            src={MobileBanner}
            style={{ width: "100%", height: "auto" }}
            alt="Mobile Banner"
          />

          <Box display={"flex"} gap={3} mt={3} justifyContent={"center"}>
            <Button
              style={{
                backgroundColor: "#E1A140",
                color: "#1E1E1E",
                fontWeight: 550,
                textTransform: "none",
              }}>
              Order Now
            </Button>
            <Button
              style={{
                backgroundColor: "none",
                border: "1px solid #1E1E1E ",
                color: "#1E1E1E",
                fontWeight: 550,
                textTransform: "none",
              }}>
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
