import { React, useState, useEffect } from 'react';
import firebase from '../../utils/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { loadAccounts, updateSelectedAccount, updateSelectedAccountDetails } from '../../store/accountslice';
import { Button, Form, Input, Select } from 'antd';
import ShowAccountSummary from './ShowAccountSummary';
import Home from '../Home';

function GetAccounts() {

    const dispatch = useDispatch();
    const { Option } = Select;
    const [form] = Form.useForm();

    let accounts = useSelector((state) => state.account.accounts);
    let user = useSelector((state) => state.login.user);

    useEffect( () => {
        fetch('https://api-fxpractice.oanda.com/v3/accounts', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer c736cba919755f597a2b59b6fed3ed17-c4a0dad782845780009b1b359d24abf0'
            },
        }).then((response) => {
            response.json().then((parsedResponse) => {
                dispatch(loadAccounts(parsedResponse.accounts));
                console.log(parsedResponse.accounts);
            })
        })
        .catch((error) => {
            console.log(error);
        });
    },[])

    const onFinish = (formData) => {
        dispatch(updateSelectedAccount(formData.account));
        fetch('https://api-fxpractice.oanda.com/v3/accounts/' + formData.account, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer c736cba919755f597a2b59b6fed3ed17-c4a0dad782845780009b1b359d24abf0'
            },
        }).then((response) => {
            response.json().then((parsedResponse) => {
                dispatch(updateSelectedAccountDetails(parsedResponse.account));
                console.log(parsedResponse.account);
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }
    
    return (
      <div id="accounts">
       { user ? 
       <>
        <Form form={form} layout={'inline'} onFinish={onFinish}>
            <Form.Item name="account" label="Choose Account" rules={[{ required: true}]}>
                <Select placeholder="Choose Account" allowClear>
                {accounts && accounts.length > 0 ? 
                    accounts.map(account => (
                        <Option value={account.id}>{account.id}</Option>
                    )) : 'No Account' }
                </Select>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType='submit'>Load Account Details</Button>
            </Form.Item>
        </Form>
        <ShowAccountSummary />
        </>
        : <Home />}
      </div>
    );
  }

  export default GetAccounts;