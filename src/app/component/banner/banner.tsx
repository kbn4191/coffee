import { Box, Container } from '@mui/material'
import Banner1 from '../../img/banner2.png'
import Banner2 from '../../img/banner3.png'
import Image from 'next/image'
export default function Banners() {
    return(
        <>
        <Box py={{md:10, xs:4}}>
            <Container>
                <Box display={"flex"} gap={{md:5,xs:2}} flexDirection={{md:"row", xs:"column"}}>
                    <Box  width={{md:"50%", xs:"100%"}}>
                    <Image src={Banner1} alt='Banner' style={{width:"100%", height:"auto"}}/>
                    </Box>
                    <Box width={{md:"50%", xs:"100%"}}>
                    <Image src={Banner2} alt='Banner' style={{width:"100%", height:"auto"}}/>
                    </Box>
                   
                </Box>
            </Container>
        </Box>
        </>
    )
    
}