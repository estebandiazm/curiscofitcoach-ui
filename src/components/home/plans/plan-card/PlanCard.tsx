import React, {Component} from 'react'
import Col from "react-bootstrap/Col";
import {Button} from "react-bootstrap";

interface PlanProps {
    title: string,
    description: string,
    showDetails: boolean
    onClick: () => void
}
const detailStyle = {
    padding: '.5em'
}

export default class PlanCard extends Component<PlanProps> {

    buildDetail() {
        return (
            <div style={detailStyle}>
                <p>Detail of plan </p>
            </div>
        );
    }

    render() {
        const {title, description, onClick, showDetails} = this.props;

        let size = (details: boolean) => {
            if (details) {
                return {'xs': 9}
            } else {
                return {}
            }
        };

        return (
            <Col className={`plan-card`} key={title} {...size(showDetails)}>
                <div className='d-flex'>
                    <div className='d-flex flex-column'>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <Button onClick={onClick} className='align-self-end' variant='link'>
                            {showDetails ? 'Hide' : 'Details'}
                        </Button>
                    </div>
                    {showDetails && this.buildDetail()}
                </div>
            </Col>
        );
    }
}