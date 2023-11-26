import "../styles/index.css"
import * as React from 'react';
import FloatingButton from '../components/organisms/floatingButton'
import SearchBar from "../components/molecules/SearchBar";


const Home = () => {

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
              <FloatingButton />
            </div>
        </div>
      </div>
    </>
  )
}

export default Home;