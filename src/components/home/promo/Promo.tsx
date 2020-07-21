import React from 'react'
import {Container, ResponsiveEmbed} from "react-bootstrap";

const style = {
    backgroundImage: 'url("https://cdn.pixabay.com/photo/2020/05/23/18/19/kettlebell-5210887_960_720.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100vw',
    height: '50vh'
}

export default class Promo extends React.Component {
    render() {

        const url = 'https://www.youtube.com/embed/8BjFIvO-A5I'

        return (
            <Container id='tips' fluid style={style}>
                {/*<ResponsiveEmbed aspectRatio="21by9">*/}
                {/*    <iframe title="Promo video" src={url} frameBorder="0"*/}
                {/*            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"*/}
                {/*            allowFullScreen/>*/}
                {/*</ResponsiveEmbed>*/}
            </Container>
        )
    }
}