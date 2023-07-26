import { gql } from "@apollo/client";

export const MUTATION = gql`
 mutation($files:[File]!){
    saveFile(files:$files)
}
`;
