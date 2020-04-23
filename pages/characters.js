import axios from 'axios';
import CharactrersList from '../components/charactersList/charactrersList';
import Head from 'next/head';

const Characters = ({ characters, err }) => {
  return (
    <div>
      <Head>
        <title>Characters</title>
      </Head>
      <CharactrersList characters={characters} err={err} />
    </div>
  );
};

export async function getStaticProps(context) {
  // const res = await axios("https://www.potterapi.com/v1/characters?key=$2a$10$yKgF8QD9Uz5dAGtiJ46VcumjgC.X2vuQhIBuIfZRtv9z45oLH.jkS")
  // const characters = await res.data;

  let characters = [];
  let err = null;

  try {
    const res = await axios(
      'https://www.potterapi.com/v1/characters?key=$2a$10$yKgF8QD9Uz5dAGtiJ46VcumjgC.X2vuQhIBuIfZRtv9z45oLH.jkS'
    );
    characters = res.data;
  } catch (error) {
    err = error.message;
  }

  return {
    props: {
      characters,
      err,
    }, // will be passed to the page component as props
  };
}

export default Characters;
