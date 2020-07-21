import React, {Component} from 'react'
import {Container, Row} from 'react-bootstrap';
import './Plans.sass'
import PlanCard from './plan-card/PlanCard';

export default class Plans extends Component {

    public state = {
        plans: [
            {
                title: 'Month',
                status: 'show',
                details: false,
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, harum magnam. Architecto deleniti iusto laborum maiores, minus nisi, provident rerum,',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, harum magnam. Architecto deleniti iusto laborum maiores, minus nisi, provident rerum, sequi temporibus totam ullam voluptatum. Aut fuga ipsum laudantium quasi!',
                price: 99.9
            },
            {
                title: 'Three month',
                status: 'show',
                details: false,
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, harum magnam. Architecto deleniti iusto laborum maiores, minus nisi, provident rerum,',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, harum magnam. Architecto deleniti iusto laborum maiores, minus nisi, provident rerum, sequi temporibus totam ullam voluptatum. Aut fuga ipsum laudantium quasi!',
                price: 0.0
            },
            {
                title: 'Training Online',
                status: 'show',
                details: false,
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, harum magnam. Architecto deleniti iusto laborum maiores, minus nisi, provident rerum,',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, harum magnam. Architecto deleniti iusto laborum maiores, minus nisi, provident rerum, sequi temporibus totam ullam voluptatum. Aut fuga ipsum laudantium quasi!',
                price: 0.0
            }
        ],
        showDetails: false
    }

    showPlanDetails(name: string): void {
        this.state.plans.forEach(plan => {
            plan.details = plan.details ? false : name === plan.title;
        })
        this.state.showDetails = this.state.plans.some(plan => plan.details);
        this.setState(this.state);
    }

    render() {
        return (
            <Container id='plans' fluid className="plans-panel">

                <Row>
                    {this.state.plans
                        .filter(plan => plan.status === 'show')
                        .map((plan: any) => {
                            return <PlanCard plan={plan} showDetails={this.state.showDetails} key={plan.title}
                                             onClick={this.showPlanDetails.bind(this, plan.title)}/>
                        })}
                </Row>
            </Container>
        );
    }
}