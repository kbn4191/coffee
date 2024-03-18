'use client'
import { Box, Container, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ() {
   
     const FAQData =[
        {
            id:1,
            question:"Who is AZ Coffee",
        },
        {
            id:2,
            question:"What happens if i don't like the coffee",
        },
        {
            id:3,
            question:"How do i pay for thr Coffee",
        },
        {
            id:4,
            question:"Can i specify how my coffee should be mixed",
        },
        {
            id:5,
            question:"If i have complains how do i tender my complains",
        },
    
    
    ]
       
  return (
    <>
      <Box
      suppressHydrationWarning={true}
        bgcolor={"#2E2D2D"}
        borderRadius={{ md: "437px 0px 0px 0px", xs: "80px 0px 0px 0px" }}
        py={{ md: 10, xs: 4 }}>
        <Container>
          <Box>
            <Typography
              fontSize={25}
              fontWeight={600}
              textAlign={"center"}
              color={"white"}>
              Frequently Asked Question
            </Typography>

            <Box mt={3} px={{ md: 30, xs: 0 }}>
              <Grid2 container spacing={2}>
                {FAQData.map((data:any) => (
                  <Grid2 md={12} xs={12} key={data.id}>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header">
                        <Typography color={"#2E3532"} fontWeight={520}>
                        
                          {data.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails color={"#2E3532"}>
                        {data.question}
                      </AccordionDetails>
                    </Accordion>
                  </Grid2>
                ))}
              </Grid2>
            </Box>
          </Box>
          <Typography mt={3} color={"#E1A140"} textAlign={"center"}>more Faq</Typography>
        </Container>
      </Box>
    </>
  );
}

