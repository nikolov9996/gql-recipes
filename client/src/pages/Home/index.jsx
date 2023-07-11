import React from "react";
import RecipesList from "components/RecipesList/RecipesList";
import { useMutation } from "@apollo/client";
import { MUTATION } from "queries/mutations";
import { createUploadLink } from "apollo-upload-client";
import { uri } from "index";

function UploadFiles() {
  const [mutate] = useMutation(MUTATION);

  function onChange({ target: { validity, files } }) {
    try {
      if (validity.valid) mutate({ variables: { files } });
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
