import { getCharacters } from "../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CharactrersList from "../components/charactersList/charactrersList";
import Head from "next/head";


const Characters = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters())
  }, [])

  return (
    <div>
      <Head>
        <title>Characters</title>
      </Head>
      <CharactrersList />
    </div>
  );
};

export default Characters;