import axios from 'axios';
import Head from 'next/head';
import HousesList from '../components/housesList/housesList';

const Houses = ({ houses, err }) => {
  return (
    <>
      <Head>
        <title>Houses</title>
      </Head>
      <HousesList houses={houses} err={err} />
    </>
  );
};

export async function getStaticProps(context) {
  // const res = await axios("https://www.potterapi.com/v1/characters?key=$2a$10$yKgF8QD9Uz5dAGtiJ46VcumjgC.X2vuQhIBuIfZRtv9z45oLH.jkS")
  // const characters = await res.data;

  let houses = [];
  let err = null;

  try {
    const res = await axios(
      'https://www.potterapi.com/v1/houses?key=$2a$10$yKgF8QD9Uz5dAGtiJ46VcumjgC.X2vuQhIBuIfZRtv9z45oLH.jkS'
    );
    houses = res.data;
  } catch (error) {
    err = error.message;
  }

  return {
    props: {
      houses,
      err,
    }, // will be passed to the page component as props
  };
}

export default Houses;
