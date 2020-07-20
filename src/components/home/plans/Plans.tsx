import React, {Component} from 'react'
import {Container, Row} from "react-bootstrap";
import './Plans.sass'
import PlanCard from "./plan-card/PlanCard";

export default class Plans extends Component {

    public state = {
        plans: [
            {title: 'Month', status: 'show', details: false, description: 'description of the plan'},
            {title: 'Three month', status: 'show', details: false, description: 'description of the plan'},
            {title: 'Training Online', status: 'show', details: false, description: 'description of the plan'}
        ],
        showDetails: false
    }

    showPlanDetails(name: string): void {
        this.state.plans.forEach(plan => {
            plan.details = plan.details? false : name === plan.title;
        })
        this.setState(this.state)
        console.log(this.state);
    }

    render() {
        return (
            <Container id='plans' fluid className="plans-panel">
                <Row>
                    {this.state.plans
                        .filter(plan => plan.status === 'show')
                        .map((plan: any) => {
                            return <PlanCard title={plan.title} key={plan.title} description={plan.description}  showDetails={plan.details}
                                             onClick={this.showPlanDetails.bind(this, plan.title)} />
                        })}
                </Row>
            </Container>
        );
    }
}