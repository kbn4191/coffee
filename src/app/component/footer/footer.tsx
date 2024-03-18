import { Box, Container, Grid, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Style from "../footer/footer.module.css";

export default function Footer() {
  return (
    <>
      <Box bgcolor={"#1E1E1E"} py={{ md: 10, xs: 6 }}>
        <Container>
          <Box>
            <Grid2 container spacing={2} gap={{md:11, xs:0}}>
              <Grid2 md={4} xs={12}>
                <Typography color={"white"} fontWeight={600}>
                  Company
                </Typography>
                <Typography mt={2} color={"white"}>
                  want to know more about us
                </Typography>

                <Box
                  px={1}
                  justifyItems={"center"}
                  alignItems={"center"}
                  border={"1px solid white"}
                  borderRadius={2}
                  display={"flex"}
                  justifyContent={"space-between"}>
                  <input
                    className={Style.inpute}
                    type="text"
                    placeholder="eample@email.com"
                  />
                  <Box
                    bgcolor={"#E1A140"}
                    height={30}
                    width={30}
                    borderRadius={1}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.425 15.8076L9.615 14.8713C6.67375 13.8913 5.2025 13.4013 5.2025 12.5001C5.2025 11.6001 6.67375 11.1088 9.615 10.1288L20.2562 6.58132C22.3262 5.89132 23.3612 5.54632 23.9075 6.09257C24.4537 6.63882 24.1087 7.67382 23.42 9.74257L19.8713 20.3851C18.8913 23.3263 18.4012 24.7976 17.5 24.7976C16.6 24.7976 16.1087 23.3263 15.1287 20.3851L14.1912 17.5763L19.6337 12.1338C19.8614 11.8981 19.9874 11.5823 19.9846 11.2546C19.9817 10.9268 19.8503 10.6133 19.6185 10.3815C19.3868 10.1498 19.0732 10.0183 18.7455 10.0155C18.4178 10.0126 18.102 10.1386 17.8663 10.3663L12.425 15.8076Z"
                        fill="black"
                      />
                    </svg>
                  </Box>
                </Box>

                <Box mt={2} display={"flex"} gap={2}>
                  <Box>
                    <Box
                      width={54}
                      height={54}
                      border={"1px solid #777676"}
                      borderRadius={20}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none">
                        <g clip-path="url(#clip0_12_312)">
                          <path
                            d="M15.4204 11.0094L24.8913 0H22.6468L14.4235 9.55906L7.85523 0H0.27948L10.2119 14.4552L0.27948 26H2.52401L11.2084 15.9053L18.1447 26H25.7205L15.4198 11.0094H15.4204ZM12.3463 14.5823L11.3398 13.143L3.33265 1.68959H6.78009L13.2417 10.933L14.248 12.3723L22.6478 24.3872H19.2008L12.3463 14.583V14.5823Z"
                            fill="#777676"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_12_312">
                            <rect width="26" height="26" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Box>
                  </Box>
                  <Box>
                    <Box
                      width={54}
                      height={54}
                      border={"1px solid #777676"}
                      borderRadius={20}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none">
                        <path
                          d="M16.9167 16.3126H19.9375L21.1458 11.4792H16.9167V9.06258C16.9167 7.818 16.9167 6.64591 19.3333 6.64591H21.1458V2.58591C20.7519 2.53396 19.2645 2.41675 17.6936 2.41675C14.413 2.41675 12.0833 4.41896 12.0833 8.09591V11.4792H8.45834V16.3126H12.0833V26.5834H16.9167V16.3126Z"
                          fill="#777676"
                        />
                      </svg>
                    </Box>
                  </Box>
                  <Box>
                    <Box
                      width={54}
                      height={54}
                      border={"1px solid #777676"}
                      borderRadius={20}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none">
                        <path
                          d="M13 17.3334C14.1493 17.3334 15.2515 16.8769 16.0641 16.0642C16.8768 15.2516 17.3333 14.1494 17.3333 13.0001C17.3333 11.8508 16.8768 10.7486 16.0641 9.93595C15.2515 9.12329 14.1493 8.66675 13 8.66675C11.8507 8.66675 10.7485 9.12329 9.93586 9.93595C9.1232 10.7486 8.66666 11.8508 8.66666 13.0001C8.66666 14.1494 9.1232 15.2516 9.93586 16.0642C10.7485 16.8769 11.8507 17.3334 13 17.3334Z"
                          stroke="#777676"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.25 17.3333V8.66667C3.25 7.23008 3.82068 5.85233 4.8365 4.8365C5.85233 3.82068 7.23008 3.25 8.66667 3.25H17.3333C18.7699 3.25 20.1477 3.82068 21.1635 4.8365C22.1793 5.85233 22.75 7.23008 22.75 8.66667V17.3333C22.75 18.7699 22.1793 20.1477 21.1635 21.1635C20.1477 22.1793 18.7699 22.75 17.3333 22.75H8.66667C7.23008 22.75 5.85233 22.1793 4.8365 21.1635C3.82068 20.1477 3.25 18.7699 3.25 17.3333Z"
                          stroke="#777676"
                          stroke-width="1.5"
                        />
                        <path
                          d="M18.9583 7.05153L18.9683 7.04053"
                          stroke="#777676"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              <Grid2>
              <Typography color={"white"} fontWeight={600}>
              Contact
                </Typography>

                <Box>
                <Typography mt={2} color={"white"}>
                +234 000 000 000
                </Typography>
                <Typography mt={2} color={"white"}>
                +234 000 000 000
                </Typography>
                <Typography mt={2} color={"white"}>
                +234 000 000 000
                </Typography>
                <Typography mt={2} color={"white"}>
                info@azcoffee.com
                </Typography>

                </Box>

              </Grid2>
              <Grid2>
              <Typography color={"white"} fontWeight={600}>
              Address
                </Typography>

                <Box>
                <Typography mt={2} color={"white"}>
                Island Lagos Nigeria
                </Typography>
                

                </Box>

              </Grid2>
              <Grid2>
              <Typography color={"white"} fontWeight={600}>
              Office
                </Typography>

                <Box>
                <Typography mt={2} color={"white"}>
                Mon - Saturday <br></br>
                Mon - Saturday
                </Typography>
                

                </Box>

              </Grid2>
            </Grid2>
          </Box>
        </Container>
      </Box>
    </>
  );
}
