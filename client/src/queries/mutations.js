import { gql } from "@apollo/client";

export const MUTATION = gql`
  mutation ($files: [Upload!]!) {
    saveFile(files: $files) {
      files
    }
  }
`;
