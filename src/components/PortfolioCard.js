import React from "react";
import "./css/PortfolioCard.css";

import { API, graphqlOperation } from "aws-amplify";
import { deleteOperation as DeleteOperation } from "../graphql/mutations";

import { Card, Button } from "antd";
import { listOperations as ListOperations } from "../graphql/queries";

import { useStateValue } from "../reducer/StateProvider";

function PortfolioCard({ id, cryptocurrency, date, amount, price }) {
  const [, dispatch] = useStateValue();

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
  const deletedOperation = async (id) => {
    await API.graphql(graphqlOperation(DeleteOperation, { input: { id } }));
    getData();
  };

  return (
    <Card title={cryptocurrency} style={{ width: "500px" }}>
      <p>Acquired on: {date}</p>
      <p>Amount: {amount}</p>
      <p>Price (USD): {price}</p>
      <Button danger onClick={() => deletedOperation(id)}>
        Delete
      </Button>
    </Card>
  );
}

export default PortfolioCard;
