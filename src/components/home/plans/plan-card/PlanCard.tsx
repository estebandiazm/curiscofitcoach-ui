import React, {Component} from 'react'
import Col from 'react-bootstrap/Col';
import {Badge, Card} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDollarSign, faPlusCircle} from '@fortawesome/free-solid-svg-icons';

interface PlanProps {
    plan: any,
    onClick: () => void
}

export default class PlanCard extends Component<PlanProps> {

    public state = {
        readyToShowDetails: false
    }

    buildDetail(plan: any) {
        setTimeout(() => {
            this.setState({readyToShowDetails: plan.details})
        }, 800)
        return (
            <Card className={this.state.readyToShowDetails ? 'details-container show' : 'details-container'}>
                <Card.Body>
                    <Card.Text>{plan.description}</Card.Text>
                    <Card.Text>
                        <Badge  variant="primary"><FontAwesomeIcon icon={faDollarSign}/> {plan.price}</Badge>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }

    render() {
        const {onClick, plan} = this.props;
        const {details, title, imageUrl} = plan;

        const size = (details: boolean) => {
            return {'md': details ? 9 : true};
        };

        return (
            <Col className={`plan-card`} key={title} {...size(details)}>
                <div className='d-flex flex-column flex-md-row justify-content-center' style={{width: '100%'}}>
                    <div className='d-flex flex-column'>
                        <Card>
                            <Card.Img variant="top" src={imageUrl}/>
                            <Card.ImgOverlay>
                                <Card.Title>{title}</Card.Title>
                                <div className="icon-container">
                                    <FontAwesomeIcon icon={faPlusCircle} onClick={onClick} size={'2x'}
                                                     className={'show-details-icon'}/>
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                    {details && this.buildDetail(plan)}
                </div>
            </Col>
        );
    }
}
