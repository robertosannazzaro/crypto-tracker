/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCoin = /* GraphQL */ `
  subscription OnCreateCoin {
    onCreateCoin {
      id
      name
      symbol
      price_usd
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCoin = /* GraphQL */ `
  subscription OnUpdateCoin {
    onUpdateCoin {
      id
      name
      symbol
      price_usd
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCoin = /* GraphQL */ `
  subscription OnDeleteCoin {
    onDeleteCoin {
      id
      name
      symbol
      price_usd
      createdAt
      updatedAt
    }
  }
`;
export const onCreateQuery = /* GraphQL */ `
  subscription OnCreateQuery {
    onCreateQuery {
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
export const onUpdateQuery = /* GraphQL */ `
  subscription OnUpdateQuery {
    onUpdateQuery {
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
export const onDeleteQuery = /* GraphQL */ `
  subscription OnDeleteQuery {
    onDeleteQuery {
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
export const onCreateOperation = /* GraphQL */ `
  subscription OnCreateOperation($owner: String) {
    onCreateOperation(owner: $owner) {
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
export const onUpdateOperation = /* GraphQL */ `
  subscription OnUpdateOperation($owner: String) {
    onUpdateOperation(owner: $owner) {
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
export const onDeleteOperation = /* GraphQL */ `
  subscription OnDeleteOperation($owner: String) {
    onDeleteOperation(owner: $owner) {
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
