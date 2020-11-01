/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCoin = /* GraphQL */ `
  mutation CreateCoin(
    $input: CreateCoinInput!
    $condition: ModelCoinConditionInput
  ) {
    createCoin(input: $input, condition: $condition) {
      id
      name
      symbol
      price_usd
      createdAt
      updatedAt
    }
  }
`;
export const updateCoin = /* GraphQL */ `
  mutation UpdateCoin(
    $input: UpdateCoinInput!
    $condition: ModelCoinConditionInput
  ) {
    updateCoin(input: $input, condition: $condition) {
      id
      name
      symbol
      price_usd
      createdAt
      updatedAt
    }
  }
`;
export const deleteCoin = /* GraphQL */ `
  mutation DeleteCoin(
    $input: DeleteCoinInput!
    $condition: ModelCoinConditionInput
  ) {
    deleteCoin(input: $input, condition: $condition) {
      id
      name
      symbol
      price_usd
      createdAt
      updatedAt
    }
  }
`;
export const createQuery = /* GraphQL */ `
  mutation CreateQuery(
    $input: CreateQueryInput!
    $condition: ModelQueryConditionInput
  ) {
    createQuery(input: $input, condition: $condition) {
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
export const updateQuery = /* GraphQL */ `
  mutation UpdateQuery(
    $input: UpdateQueryInput!
    $condition: ModelQueryConditionInput
  ) {
    updateQuery(input: $input, condition: $condition) {
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
export const deleteQuery = /* GraphQL */ `
  mutation DeleteQuery(
    $input: DeleteQueryInput!
    $condition: ModelQueryConditionInput
  ) {
    deleteQuery(input: $input, condition: $condition) {
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
export const createOperation = /* GraphQL */ `
  mutation CreateOperation(
    $input: CreateOperationInput!
    $condition: ModelOperationConditionInput
  ) {
    createOperation(input: $input, condition: $condition) {
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
export const updateOperation = /* GraphQL */ `
  mutation UpdateOperation(
    $input: UpdateOperationInput!
    $condition: ModelOperationConditionInput
  ) {
    updateOperation(input: $input, condition: $condition) {
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
export const deleteOperation = /* GraphQL */ `
  mutation DeleteOperation(
    $input: DeleteOperationInput!
    $condition: ModelOperationConditionInput
  ) {
    deleteOperation(input: $input, condition: $condition) {
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
