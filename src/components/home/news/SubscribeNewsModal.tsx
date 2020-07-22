import React, {useState} from 'react'
import {Button, Form, Modal} from 'react-bootstrap';
import {AppState} from '../../../store';
import {SubscribeNewsState} from '../../../store/types';
import {ThunkDispatch} from 'redux-thunk';
import {AppActions, subscribeNewsAction} from '../../../store/actions';
import {connect} from 'react-redux';
import {useTranslation} from 'react-i18next';

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

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

interface SubscribeNewsProps {
}

type Props = SubscribeNewsProps & LinkDispatchProps & SubscribeNewsState


const SubscribeNewsModal = (props: Props) => {

    const [validated, setValidated] = useState(false);
    const {t} = useTranslation('common');

    const handleClose = () => {
        props.subscribeNewsAction(false, '');
    }

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true)
        } else {
            props.subscribeNewsAction(false, event.target.formEmail.value)
        }
    }

    return (
        <Modal show={props.show} onHide={handleClose}>
            <Form noValidate validated={validated} onSubmit={(event) => handleSubmit(event)}>
                <Modal.Header closeButton>
                    <Modal.Title>{t('subscribeNews.title')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Text style={{textAlign: 'center', margin: '1em 0'}}>
                        {t('subscribeNews.message')}
                    </Form.Text>
                    <Form.Group controlId="formEmail">
                        <Form.Label>{t('subscribeNews.email.label')}</Form.Label>
                        <Form.Control required type="email" placeholder={t('subscribeNews.email.placeholder')}/>
                        <Form.Text className="text-muted">
                            {t('subscribeNews.email.note')}
                        </Form.Text>
                        <Form.Control.Feedback>{t('subscribeNews.email.feedback')}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Check
                            required
                            label={t('subscribeNews.terms.label')}
                            feedback={t('subscribeNews.terms.feedback')}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit">
                        {t('subscribeNews.buttonText')}
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default connector(SubscribeNewsModal);