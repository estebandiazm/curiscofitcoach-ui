import React from 'react'
import {Container, ResponsiveEmbed} from "react-bootstrap";

export default class Promo extends React.Component {
    render() {

        const url = 'https://www.youtube.com/embed/8BjFIvO-A5I'

        return (
            <Container id='tips' fluid>
                <ResponsiveEmbed aspectRatio="21by9">
                    <iframe title="Promo video" src={url} frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                </ResponsiveEmbed>
            </Container>
        )
    }
}