import React, {useEffect} from 'react'
import RegisterForm from './RegisterForm';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {bindActionCreators} from 'redux';
import * as registerDuck from '../../ducks/register'
import {IRegisterFormField} from '../../ducks/register';
import Loading from '../loding';

const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#343a40',
    height: '100vh',
    color: '#fff'
}

interface Props {
    fetchRegisterFields: () => void
    fetched: boolean,
    loading: boolean,
    data: IRegisterFormField
}

const callRegisterFields = (isFetched: boolean, fetchRegisterFields: () => void) => {
    if (!isFetched) {
        fetchRegisterFields()
    }
}

const Register = (props: Props) => {
    const {fetchRegisterFields, loading, fetched, data} = props

    useEffect(() => {
        callRegisterFields(fetched, fetchRegisterFields)
    })

    return (
        loading ? <Loading/> :
            <div style={style}>
                <RegisterForm formFields={Object.values(data) as [IRegisterFormField]}/>
            </div>
    )
}

const mapStateToProps = (state: any) => {
    const {Register: {data, fetched, fetching}} = state
    const loading = fetching || !fetched
    return {
        loading,
        fetched,
        data
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => (bindActionCreators(registerDuck, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(Register)