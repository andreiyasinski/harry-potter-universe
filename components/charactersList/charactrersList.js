import { useSelector } from "react-redux";
import CharacterItem from "./characterItem/characterItem";
import { CircularProgress } from "@material-ui/core";
import styles from './charactersList.module.css';

const CharactrersList = () => {
  const { items, isFetching, error } = useSelector(state => state.characters)

  return (
    <div>
      {
        isFetching && <CircularProgress color="secondary" className={styles.loader} />
      }
      {
        error && !isFetching &&
        <Typography variant="h4" noWrap>
          Something went wrong. Please reload the page.
        </Typography>
      }
      {
        !isFetching && !error &&
        <ul className={styles.list}>
          {
            items.map(item => (
              <CharacterItem item={item} key={item._id} />
            ))
          }
        </ul>
      }
    </div>
  );
};

export default CharactrersList;