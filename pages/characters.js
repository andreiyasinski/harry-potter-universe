import { getCharacters } from "../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CharactrersList from "../components/charactersList/charactrersList";


const Characters = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters())
  }, [])

  return (
    <div>
      <CharactrersList />
    </div>
  );
};

export default Characters;