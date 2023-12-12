import animation from "@/assets/loading/animation_lmzymls5.json";
import { useLottie } from "lottie-react";
import React from "react";
import styled from "styled-components";

const LoadingBox = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

const Loading: React.FC = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const { View: lottie } = useLottie(defaultOptions);

    return (
        <LoadingBox> {lottie}</LoadingBox>
    );
}

export default Loading;