import React, { useState, useEffect } from "react";
import "./css/Home.css";
import "./css/AddCoins.css";
import { Form, Input, Button, Select, DatePicker, Spin } from "antd";
import { API, graphqlOperation } from "aws-amplify";
import { getCoins as GetCoins } from "../graphql/queries";
import { createOperation as CreateOperation } from "../graphql/mutations";
import { listOperations as ListOperations } from "../graphql/queries";

import { useStateValue } from "../reducer/StateProvider";
import { initialState } from "../reducer/reducer";

function AddCoins() {
  const [, setState] = useState();
  const [coinsOptions, setCoinsOption] = useState([]);
  const [form] = Form.useForm();

  const [, dispatch] = useStateValue();

  const onFinish = async (values) => {
    setState(values);
    await addCryptoToPortfolio(values);
    form.resetFields();
  };

  useEffect(() => {
    getCoinsData();
  }, []);

  async function getCoinsData() {
    try {
      const coinsData = await API.graphql(graphqlOperation(GetCoins));
      //console.log("coinsData:", coinsData.data);
      setCoinsOption(coinsData.data);
    } catch (err) {
      console.log("error fetching coins...", err);
    }
  }

  async function getData() {
    try {
      const operationsData = await API.graphql(
        graphqlOperation(ListOperations)
      );
      dispatch({
        type: "SET_OPERATIONS",
        operation: operationsData.data.listOperations.items,
      });
      //setOperationsData(operationsData.data.listOperations.items);
    } catch (err) {
      console.log("error fetching coins...", err);
    }
  }

  // cryptoSelector datepicker timepicker amount price
  async function addCryptoToPortfolio(values) {
    const { cryptocurrency, date, amount, price_usd } = values;

    if (
      cryptocurrency === "" ||
      date === "" ||
      amount === "" ||
      price_usd === ""
    )
      return;

    const cryptoInvestment = {
      cryptocurrency,
      date,
      amount,
      price_usd,
    };

    try {
      await API.graphql(
        graphqlOperation(CreateOperation, { input: cryptoInvestment })
      );
      getData();
      console.log("crypto investment created!");
    } catch (err) {
      console.log("error creating talk...", err);
    }
  }

  return (
    <Form
      form={form}
      name='control-hooks'
      onFinish={onFinish}
      className='addCoins'
      onFieldsChange={(_, allFields) => {
        dispatch({
          type: "SET_SELECTED_COIN",
          selectedCoin: allFields[0].value,
        });
        //console.log("SELECTED COIN", allFields[0].value);
        setState(allFields);
      }}
    >
      <h1>
        Add a new cryptocurrency to your portfolio{" "}
        <span aria-label='emoji' role='img'>
          💰
        </span>
      </h1>
      <Form.Item
        name='cryptocurrency'
        label='Select a cryptocurrency'
        // rules={[
        //   {
        //     required: true,
        //   },
        // ]}
      >
        <Select>
          {coinsOptions.getCoins ? (
            coinsOptions.getCoins.map((coin) => (
              <Select.Option value={coin.symbol} key={coin.symbol}>
                {coin.name}
              </Select.Option>
            ))
          ) : (
            <Select.Option>
              <Spin />
            </Select.Option>
          )}
        </Select>
      </Form.Item>

      <Form.Item
        name='date'
        label='Date:'
        // rules={[
        //   {
        //     required: true,
        //   },
        // ]}
      >
        <DatePicker />
      </Form.Item>

      {/* <Form.Item
        name='timepicker'
        label='Time:'
        // rules={[
        //   {
        //     required: true,
        //   },
        // ]}
      >
        <TimePicker />
      </Form.Item> */}

      <Form.Item
        name='amount'
        label='Amount'
        // rules={[
        //   {
        //     required: true,
        //   },
        // ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name='price_usd'
        label='Price USD'
        // rules={[
        //   {
        //     required: true,
        //   },
        // ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AddCoins;
