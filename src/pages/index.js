import "../styles/index.css"
import * as React from 'react';
import FloatingButton from '../components/organisms/floatingButton'
import SearchBar from "../components/molecules/SearchBar";

const Home = () => {

  const getUser = () => {
    fetch(`${process.env.REACT_APP_URL_BACKEND}/user`, {
      method: 'GET',
      headers: {
        'app-id': process.env.REACT_APP_TOKEN,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
return (
  <>
    <div>
      <div className="row">
        <div className="col-2 back">
        </div>
        <div className="col-10 back2">
          <div className="search">
            <SearchBar />
          </div>
          <FloatingButton getUser={getUser} />
        </div>
      </div>
    </div>
  </>
)
}

export default Home;