/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCoins = /* GraphQL */ `
  query GetCoins($limit: Int, $start: Int) {
    getCoins(limit: $limit, start: $start) {
      id
      name
      symbol
      price_usd
      createdAt
      updatedAt
    }
  }
`;
export const getHistoricalDatas = /* GraphQL */ `
  query GetHistoricalDatas($cryptocurrency: String!, $limit: Int!) {
    getHistoricalDatas(cryptocurrency: $cryptocurrency, limit: $limit) {
      id
      time
      high
      low
      open
      volumefrom
      volumeto
      close
      conversionType
      conversionSymbol
      createdAt
      updatedAt
    }
  }
`;
export const getCoin = /* GraphQL */ `
  query GetCoin($id: ID!) {
    getCoin(id: $id) {
      id
      name
      symbol
      price_usd
      createdAt
      updatedAt
    }
  }
`;
export const listCoins = /* GraphQL */ `
  query ListCoins(
    $filter: ModelCoinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        symbol
        price_usd
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuery = /* GraphQL */ `
  query GetQuery($id: ID!) {
    getQuery(id: $id) {
      getCoins {
        id
        name
        symbol
        price_usd
        createdAt
        updatedAt
      }
      getHistoricalDatas {
        id
        time
        high
        low
        open
        volumefrom
        volumeto
        close
        conversionType
        conversionSymbol
        createdAt
        updatedAt
      }
      getCoin {
        id
        name
        symbol
        price_usd
        createdAt
        updatedAt
      }
      listCoins {
        nextToken
      }
      getQuery {
        createdAt
        updatedAt
      }
      listQuerys {
        nextToken
      }
      createdAt
      updatedAt
      getOperation {
        id
        cryptocurrency
        date
        amount
        price_usd
        createdAt
        updatedAt
        owner
      }
      listOperations {
        nextToken
      }
    }
  }
`;
export const listQuerys = /* GraphQL */ `
  query ListQuerys(
    $filter: ModelQueryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuerys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const createdAt = /* GraphQL */ `
  query CreatedAt {
    createdAt
  }
`;
export const updatedAt = /* GraphQL */ `
  query UpdatedAt {
    updatedAt
  }
`;
export const getOperation = /* GraphQL */ `
  query GetOperation($id: ID!) {
    getOperation(id: $id) {
      id
      cryptocurrency
      date
      amount
      price_usd
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listOperations = /* GraphQL */ `
  query ListOperations(
    $filter: ModelOperationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOperations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cryptocurrency
        date
        amount
        price_usd
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
