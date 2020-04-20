import axios from 'axios';
import Head from 'next/head';
import SpellsList from '../components/spellsList/spellsList';

const Spells = ({ spells, err }) => {
  return (
    <>
      <Head>
        <title>Spells</title>
      </Head>
      <SpellsList spells={spells} err={err} />
    </>
  );
};

export async function getStaticProps(context) {
  // const res = await axios("https://www.potterapi.com/v1/characters?key=$2a$10$yKgF8QD9Uz5dAGtiJ46VcumjgC.X2vuQhIBuIfZRtv9z45oLH.jkS")
  // const characters = await res.data;

  let spells = [];
  let err = null;

  try {
    const res = await axios(
      'https://www.potterapi.com/v1/spells?key=$2a$10$yKgF8QD9Uz5dAGtiJ46VcumjgC.X2vuQhIBuIfZRtv9z45oLH.jkS'
    );
    spells = res.data;
  } catch (error) {
    err = error.message;
  }

  return {
    props: {
      spells,
      err,
    }, // will be passed to the page component as props
  };
}

export default Spells;
