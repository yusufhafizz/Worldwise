import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import { Outlet } from "react-router-dom";
import { useCities } from "../Contexts/CitiesContext";

function CityList() {
  const { isLoading, cities } = useCities();
  if (isLoading) {
    return <Spinner />;
  }

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map." />
    );
  return (
    <>
      <ul className={styles.cityList}>
        {cities.map((city) => (
          <CityItem city={city} key={city.id} />
        ))}
      </ul>
      <Outlet />
    </>
  );
}

export default CityList;
