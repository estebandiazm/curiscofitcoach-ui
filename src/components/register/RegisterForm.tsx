import React from 'react'
import {Form} from 'react-bootstrap';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import FieldFormControl from '../common/FieldFromControl';
import {WithTranslation, withTranslation} from 'react-i18next';
import {IRegisterFormField} from '../../ducks/register';

interface IRegisterFormProps {
    formFields: [IRegisterFormField]
}

type Props =  WithTranslation & IRegisterFormProps & InjectedFormProps<{}, IRegisterFormProps>
const RegisterForm: React.FunctionComponent<Props> = (props: Props) => {

    const {t, formFields} = props
    console.log('form props',props);

    return (
        <Form>
            {formFields.map(({translationKey, name, type}: any) => {
                return (
                    <Field type={type} name={name} component={FieldFormControl} key={name}
                           placeholder={t(`${translationKey}.placeholder`)} errorMsg={t(`${translationKey}.errorMsg`)}>
                        {t(`${translationKey}.label`)}
                    </Field>
                )
            })}
        </Form>
    )
}

const TranslateRegisterForm = withTranslation('common')(RegisterForm)
export default  reduxForm<{}, IRegisterFormProps>({
    form: 'register'
})(TranslateRegisterForm)

// export default TranslateRegisterForm