import React, {Component} from 'react'
import {Container, Row, Col, Button} from "react-bootstrap";
import './Plans.sass'

export default class Plans extends Component {

    public state = {
        plans: [
            {name: 'plan A', status: 'show', details: false},
            {name: 'plan B', status: 'show', details: false},
            {name: 'plan C', status: 'show', details: false}
        ],
        showDetails: false
    }

    showPlanDetails(name: string) {
        console.log(`click in ${name}`)
        this.state.plans.forEach(plan => {
            plan.details = plan.details? false : name === plan.name;
        })
        this.setState(this.state)
        console.log(this.state);
    }

    render() {
        let size = (details: boolean) => {
            if (details) {
                return {'xs': 10}
            } else {
                return {}
            }
        };
        return (
            <Container fluid className="plans-panel">
                <Row>
                    {this.state.plans
                        .filter(plan => plan.status === 'show')
                        .map((plan: any) => {
                            return <Col className={ `plan-card`} key={plan.name} {...size(plan.details)} >
                                {plan.name} <Button
                                onClick={this.showPlanDetails.bind(this, plan.name)}>Details</Button>
                            </Col>
                        })}
                </Row>
            </Container>
        );
    }
}