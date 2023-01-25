import { gql } from '@apollo/client';

export const QUERY_ITEMS = gql`
  query shopItems {
    items {
      _id
      itemName
      itemPrice
      itemStock
    }
  }
`;