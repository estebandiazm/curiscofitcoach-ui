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
        hidden: 'hidden'
    }

    componentDidUpdate(prevProps: Readonly<PlanProps>, prevState: Readonly<{}>, snapshot?: any) {
        console.log(`state: ${this.props.plan.title} => `, this.state)
        if (this.state.hidden === 'hidden' && this.props.plan.details) {
            setTimeout(() => {
                this.setState({hidden: ''})
            }, 150)
        }
    }

    // buildDetail(plan: any) {
    //     setTimeout(() => {
    //         this.setState({readyToShowDetails: plan.details})
    //     }, 800)
    // }

    handleClick(onClick: () => void) {
        this.setState({hidden: 'hidden'});
        onClick();
    }


    render() {
        const {onClick, plan} = this.props;
        const {details, title, imageUrl} = plan;
        const showDetails = this.state.hidden === '' && details

        const size = (details: boolean) => {
            return {'md': details ? 9 : true};
        };

        return (
            <Col className={`plan-card`} key={title} {...size(details)}>
                <div className='d-flex flex-column flex-md-row ' style={{width: '100%'}}>
                    <div className='d-flex flex-column image-container'>
                        <Card>
                            <Card.Img variant="top" src={imageUrl}/>
                            <Card.ImgOverlay>
                                <Card.Title>{title}</Card.Title>
                                <div className="icon-container">
                                    <FontAwesomeIcon icon={faPlusCircle} onClick={this.handleClick.bind(this, onClick)}
                                                     size={'2x'}
                                                     className={'show-details-icon'}/>
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                    </div>

                    <Card className={showDetails ? 'details-container show' : 'details-container hidden'}>
                        <Card.Body>
                            <Card.Text>{plan.description}</Card.Text>
                            <Card.Text>
                                <Badge variant="primary"><FontAwesomeIcon icon={faDollarSign}/> {plan.price}</Badge>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Col>
        );
    }
}
