import { useState } from "react"



const FloatingButton = () => {
  const [show, setShow] = useState(false)
  const [scheduleClicked, setScheduleClicked] = useState(false)
  const [messageClicked, setMessageClicked] = useState(false)
  return (
    <>
      <div className="floating-container">
        <div className="floating-button" onClick={() => setShow(true)}>
          <img src="./images/logo1.svg" alt="lighting" />
        </div>
        {show && (
          <div className="element-container">

            <span className="float-element" onClick={()=>{
              setScheduleClicked(true)
            }}>
                {scheduleClicked ? (
                  <img src="./images/logo3clicked.svg" alt="schedule" />
                  ):(
                  <img src="./images/logo3.svg" alt="schedule" />
                )}
            </span>

            <span className="float-element" onClick={()=> {
              setMessageClicked(true)
            }}>
              {messageClicked ? (
                <img src="./images/logo2clicked.svg" alt="message"/>
                ):(
                  <img src="./images/logo2.svg" alt="message" />
              )}
            </span>
            
          </div>
        )}
      </div>
    </>
  )
}

export default FloatingButton