import "../styles/index.css"
import * as React from 'react';
import FloatingButton from '../components/organisms/floatingButton'


const Home = () => {

  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-3 back">
              Column
            </div>
            <div className="col-9">
            <input className="form-control" type="text" placeholder="Search" aria-label="default input example"/>
              Column
              <FloatingButton />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;