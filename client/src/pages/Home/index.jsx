import React from "react";
import RecipesList from "components/RecipesList/RecipesList";
import { useMutation } from "@apollo/client";
import { MUTATION } from "queries/mutations";

function UploadFiles() {
  const [mutate] = useMutation(MUTATION);

  async function onChange({ target: { validity, files } }) {
    try {
      if (validity.valid) {
        const { data } = await mutate({ variables: { files } });
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return <input type="file" multiple required onChange={onChange} />;
}

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-main">Recipes List!</h1>
      <UploadFiles />
      <RecipesList />
    </div>
  );
};

export default Home;
