import React, {Component} from 'react'
import Col from 'react-bootstrap/Col';
import {Button} from 'react-bootstrap';

interface PlanProps {
    plan: any,
    showDetails: boolean
    onClick: () => void
}

const detailStyle = {
    padding: '.5em'
}

export default class PlanCard extends Component<PlanProps> {

    buildDetail(plan: any) {
        return (
            <div style={detailStyle}>
                <p>{plan.description}</p>
                <p>COP {plan.price}</p>
            </div>
        );
    }

    render() {
        const {onClick, plan, showDetails} = this.props;
        const {details, title, shortDescription} = plan;

        let size = (details: boolean) => {
            if (details) {
                return {'md': 9}
            } else {
                return  {'md': true}
            }
        };

        return (
            <Col className={`plan-card`} key={title} {...size(details)}>
                <div className='d-flex flex-row' style={{width: '100%'}}>
                    <div className='d-flex flex-column'>
                        <h3>{title}</h3>
                         <p>{!showDetails && shortDescription}</p>
                    </div>
                    {details && this.buildDetail(plan)}
                    <Button onClick={onClick} className='align-self-end' variant='link'>
                        {details ? 'Hide' : 'Details'}
                    </Button>
                </div>
            </Col>
        );
    }
}