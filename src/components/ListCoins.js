import React, { useEffect, useState } from "react";
import "./css/ListCoins.css";

import { Auth, API, graphqlOperation } from "aws-amplify";
import { listOperations as ListOperations } from "../graphql/queries";
import { onCreateOperation as OnCreateOperation } from "../graphql/subscriptions";

import PortfolioCard from "./PortfolioCard";

import { useStateValue } from "../reducer/StateProvider";

function ListCoins() {
  const [userState, setUserState] = useState([]);
  const [{ operations, user }, dispatch] = useStateValue();

  useEffect(() => {
    Auth.currentAuthenticatedUser().then((user) => {
      console.log(user.attributes);

      setUserState(user.attributes.email);
    });
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
    getData();
    // const subscription = API.graphql(
    //   graphqlOperation(OnCreateOperation)
    // ).subscribe({
    //   next: (eventData) => {
    //     const operation = eventData.value.data.onCreateOperation;
    //     console.log(operation);
    //     //dispatch({ type: "ADD_OPERATION", operation });
    //   },
    // });
    // return () => subscription.unsubscribe();
  }, []);

  return (
    <div className='listCoins'>
      <h1>
        My portfolio{" "}
        <span role='img' aria-label='wallet'>
          💼
        </span>
      </h1>
      <div className='listCoins__noScroll'>
        {operations.length > 0 ? (
          operations.map((operation) => (
            <PortfolioCard
              id={operation.id}
              key={operation.date}
              cryptocurrency={operation.cryptocurrency}
              date={operation.date}
              amount={operation.amount}
              price={operation.price_usd}
            />
          ))
        ) : (
          <h2>Seems like you have not recorded any operations yet...</h2>
        )}
      </div>
    </div>
  );
}

export default ListCoins;
