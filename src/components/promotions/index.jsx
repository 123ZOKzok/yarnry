import { MessageText, PromotionsContainer } from "../../styles/promotions";
import { useEffect, useState } from "react";
import { Box, Slide } from "@mui/material";
import { useRef } from "react";

const messages = [
  "20% off on your first order",
  "Get your chunky knit blanket today!",
  "Handmade with love 💕",
  "follow us on all our social media platforms :)",
];

export default function Promotions() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setshow] = useState(true);
  const containerRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setshow(false);
    }, 3000);

    const intervalId = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length);

      setshow(true);

      setTimeout(() => {
        setshow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <PromotionsContainer ref={containerRef}>
      <Slide
        container={containerRef.current}
        direction={show ? "left" : "right"}
        in={show}
        timeout={{
          enter: 500,
          exit: 100,
        }}
      >
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          <MessageText>{messages[messageIndex]}</MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  );
}
