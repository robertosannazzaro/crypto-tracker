import React from "react";

import { Layout } from "antd";
import "antd/dist/antd.css";
import "./css/Home.css";

import PageHeader from "./PageHeader";
import ListCoins from "./ListCoins";
import AddCoins from "./AddCoins";
import Plot from "./Plot";

import { Redirect, Route } from "react-router-dom";
import { useStateValue } from "../reducer/StateProvider";

const { Footer, Content } = Layout;

function Home() {
  const [{ user }] = useStateValue();

  return (
    <>
      {user ? (
        <Layout className='home'>
          <PageHeader />
          <Content style={{ padding: "0 50px" }}>
            <div className='home__content'>
              <ListCoins />
              <AddCoins />
            </div>
            <Plot />
          </Content>
          <Footer style={{ textAlign: "center" }}>Crypto Tracker 1.0</Footer>
        </Layout>
      ) : (
        <Redirect to='/signin' />
      )}
    </>
  );
}

export default Home;
