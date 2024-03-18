import { Box, Button, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ProductList } from "../data/product";
import Image from "next/image";
import Style from '../product/product.module.css'

export default function Product() {
    return(
        <>
        <Box py={{md:10, xs:4}}>
            <Container>
                <Box textAlign={"center"}>
                    <Typography fontSize={{md:50, xs:20}}
                fontWeight={700}
                color={"#1E1E1E"}>
                    Available Coffee
                    </Typography>
                    <Typography  color={"#1E1E1E"}>
                    Shop your coffee now
                    </Typography>
                </Box>

                <Box px={{md:20, xs:0}} justifyContent={"center"} display={{md:"flex", xs:"block"}} mt={{md:5, xs:3}}>
                    <Grid2 container spacing={2}>
                        {ProductList.map((Item)=>(
                            <Grid2 md={4} xs={6} key={Item.id}>
                               <Box bgcolor={"white"} borderRadius={3}>
                                <Box className={Style.imagecontainer}>
                                <Image src={Item.img} className={Style.image} alt="product image" style={{width:"100%", height:"auto"}}/>
                                </Box>

                                <Box bgcolor={"#EDEDED"} borderRadius={"0px 0px 12px 12px"} p={2} color={"#1E1E1E"} display={"flex"} justifyContent={"space-between"} gap={2} flexDirection={{md:"row", xs:"column"}}>
                                    <Box >
                                    <Typography>
                                        {Item.name}
                                    </Typography>
                                    <Typography fontWeight={"600"} fontSize={20} >
                                        ${Item.price}
                                    </Typography>
                                    </Box>
                                    <Box>
                                        <Box bgcolor={"#1E1E1E"} width={40} height={40} borderRadius={10} display={"flex"} justifyContent={"center"} alignItems={"center"}>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M4.83 20.5687C3.7575 16.2788 3.22124 14.135 4.34749 12.6925C5.47249 11.25 7.685 11.25 12.1062 11.25H17.8937C22.3162 11.25 24.5262 11.25 25.6525 12.6925C26.7787 14.1338 26.2425 16.28 25.17 20.5687C24.4875 23.2975 24.1475 24.6612 23.13 25.4562C22.1125 26.25 20.7062 26.25 17.8937 26.25H12.1062C9.29375 26.25 7.88749 26.25 6.86999 25.4562C5.85249 24.6612 5.51125 23.2975 4.83 20.5687Z" stroke="white" stroke-width="1.5"/>
  <path d="M24.375 11.875L23.4875 8.61875C23.145 7.3625 22.9737 6.735 22.6225 6.26125C22.2723 5.79058 21.7966 5.428 21.25 5.215C20.7 5 20.05 5 18.75 5M5.625 11.875L6.5125 8.61875C6.855 7.3625 7.02625 6.735 7.3775 6.26125C7.72772 5.79058 8.20336 5.428 8.75 5.215C9.3 5 9.95 5 11.25 5" stroke="white" stroke-width="1.5"/>
  <path d="M11.25 5C11.25 4.66848 11.3817 4.35054 11.6161 4.11612C11.8505 3.8817 12.1685 3.75 12.5 3.75H17.5C17.8315 3.75 18.1495 3.8817 18.3839 4.11612C18.6183 4.35054 18.75 4.66848 18.75 5C18.75 5.33152 18.6183 5.64946 18.3839 5.88388C18.1495 6.1183 17.8315 6.25 17.5 6.25H12.5C12.1685 6.25 11.8505 6.1183 11.6161 5.88388C11.3817 5.64946 11.25 5.33152 11.25 5Z" stroke="white" stroke-width="1.5"/>
</svg>
                                        </Box>
                                    </Box>

                                </Box>


                               </Box>

                            </Grid2>
                        ))}
                    </Grid2>
                    
                </Box>
                <Box display={"flex"} justifyContent={"center"} mt={3}>
                    <Button
                  style={{
                    backgroundColor: "#E1A140",
                    color: "#1E1E1E",
                    fontWeight: 550,
                    textTransform: "none",
                  }}>
                  View more
                </Button>
                    </Box>
            </Container>
        </Box>
        </>
    )
    
}