import React from 'react'
import styled from 'styled-components'


const ISlideContainer = styled.div`
    position: relative;
    margin: auto;
`
const ISlideFade = styled.div`
    display: none;
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
`

const InumberText = styled.div`
    color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
`


const IText = styled.a`
    color: #f2f2f2;
    font-size: 15px;
    padding: 8px 12px;
    position: absolute;
    bottom: 8px;
    width: 100%;
    text-align: center;
`

const Iprev = styled.a`
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;

    &:hover {
        background-color: rgba(0,0,0,0.8);
    }
`

const Inext = styled(Iprev)`
    right: 0;
    border-radius: 3px 0 0 3px;

`

const Image = styled.img`
    vertical-align: middle;
    width: 100%;
`
const SlidesFade = () => {

    var slideIndex = 1;
    const plusSlides = (count: number) => {
        showSlides(slideIndex += count);
    }

    const showSlides = (n:number) => {
        // var i;
        // var slides = document.getElementsByClassName("mySlides");
        // var dots = document.getElementsByClassName("dot");
        // if (n > slides.length) { slideIndex = 1 }
        // if (n < 1) { slideIndex = slides.length }
        // for (i = 0; i < slides.length; i++) {
        //     slides[i].style.display = "none";
        // }
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        // }
        // slides[slideIndex - 1].style.display = "block";
        // dots[slideIndex - 1].className += " active";
    }

    return (
        <>
            <ISlideContainer></ISlideContainer>
            <ISlideFade>
                <InumberText>1/3</InumberText>
                <Image src='' />
                <IText>One</IText>
            </ISlideFade>

            <ISlideFade>
                <InumberText>2/3</InumberText>
                <Image src='' />
                <IText>Two</IText>
            </ISlideFade>

            <ISlideFade>
                <InumberText>3/3</InumberText>
                <Image src='' />
                <IText>Three</IText>
            </ISlideFade>

            <Iprev onClick={() => plusSlides(-1)}></Iprev>
            <Inext onClick={() => plusSlides(-1)}></Inext>
        </>
    )
}

export default SlidesFade