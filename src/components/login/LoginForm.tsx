import React from 'react';
import {Button, Form} from 'react-bootstrap';

import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import FieldFormControl from '../common/FieldFromControl';
import {WithTranslation, withTranslation} from 'react-i18next';

const style = {
    width: '500px'
}

const validate = (values: any): {} => {
    const errors: any = {}
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'invalid email'
    }
    if (!values.password || values.password.length === 0){
        errors.password = 'password'
    }
    return errors;
}

class LoginForm extends React.Component<InjectedFormProps &  WithTranslation> {
    render() {
        const {handleSubmit, t} = this.props;

        return (
            <Form noValidate onSubmit={handleSubmit} style={style}>
                <Field type='email' name="email"
                       placeholder={t('login.email.placeholder')} errorMsg={t('login.email.error')}
                       component={FieldFormControl}>{t('login.email.label')}</Field>
                <Field type="password" name="password"
                       placeholder={t('login.password.placeholder')} errorMsg={t('login.password.error')}
                       component={FieldFormControl}>{t('login.password.label')}</Field>
                <Button variant="primary" type="submit">
                    {t('login.in.button')}
                </Button>
            </Form>
        )
    }
}

const TranslateLoginForm = withTranslation('common')(LoginForm)
export default reduxForm({
    form: 'login',
    validate,
})(TranslateLoginForm)