import React, {Component} from 'react'
import {Button, Form, Modal} from 'react-bootstrap';
import {AppState} from '../../../store';
import {SubscribeNewsState} from '../../../store/types';
import {ThunkDispatch} from 'redux-thunk';
import {AppActions, subscribeNewsAction} from '../../../store/actions';
import {connect} from 'react-redux';

interface SubscribeNewsProps {
}

interface ISubscribeNewsState {
    validated: boolean
}

type Props = SubscribeNewsProps & LinkDispatchProps & SubscribeNewsState


class SubscribeNewsModal extends Component<Props, ISubscribeNewsState> {

    public state = {
        validated: false
    }

    handleClose() {
        this.props.subscribeNewsAction(false, '');
    }

    handleSubmit(event: any) {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
            this.setState({
                validated: true
            })
        } else {
            this.props.subscribeNewsAction(false, event.target.formEmail.value)
        }
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.handleClose.bind(this)}>
                <Form noValidate validated={this.state.validated} onSubmit={(event) => this.handleSubmit(event)}>
                    <Modal.Header closeButton>
                        <Modal.Title>SIGN UP NEWSLETTER</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Text style={{textAlign: 'center', margin:'1em 0'}}>
                            Subscribe to our newsletters and don’t miss new plans, the latest fitness tips and our promotions.
                        </Form.Text>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required type="email" placeholder="Enter email"/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit">
                            Subscribe
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        );
    }
}


interface LinkDispatchProps {
    subscribeNewsAction: (show: boolean, email: string) => void
}

const mapStateToProps = (state: AppState): SubscribeNewsState => ({
    show: state.subscribeNews.show,
    email: state.subscribeNews.email
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => ({
    subscribeNewsAction: (show: boolean, email: string) => dispatch(subscribeNewsAction(show, email))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubscribeNewsModal);