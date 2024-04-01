import { MessageText, PromotionsContainer } from "../../styles/promotions"
import { useState } from "react"
import { Box } from "@mui/material"



const messages =[
    '20% off on your first order',
    'Get your chunky knit blanket today!',
    'Handmade with love',
    'follow us on all our social media platforms :)'
]

export default function Promotions () {

    const [messageIndex, setmessageIndex] = useState(0)

  return (
   <PromotionsContainer>
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <MessageText>
            {messages[messageIndex]}
        </MessageText>
    </Box>
   </PromotionsContainer>
  )
}

