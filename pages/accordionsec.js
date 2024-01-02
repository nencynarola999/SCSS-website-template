import React from 'react'
import { Accordion } from 'react-bootstrap'
import main from '/styles/Main.module.scss'


const Accordionsec = () => {
  let array = [
    {
      eventkey: "1",
      heading: "CORE ARCHITETURE",
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad   minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in  reprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum."
    },
    {
      eventkey: "2",
      heading: "RESTAURANTS",
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad   minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in  reprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum."
    },
    {
      eventkey: "3",
      heading: "HOSPITAL",
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad   minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in  reprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum."
    },
    {
      eventkey: "4",
      heading: "RESTAURANTS",
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad   minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in  reprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum."
    },
  ]
  return (
    <div className='container-fluid g-0'>
      <div className="row row-cols-1 row-cols-lg-2 g-0">
        <div className="col p-0">
          <img src="/accordionimg.png" alt="" width="100%" height="700px" />
        </div>
        <div className="col">
          <div className={main.accorset}>
            <p>BEST ARCHITECTURE</p>
            <h2>ARCHITECTURE DID EXPECT <span>STRATEGIST</span></h2>
            <Accordion >
              {
                array?.map((x, i) => {
                  return <Accordion.Item eventKey={x?.eventkey} key={i}>
                    <Accordion.Header>{x?.heading}</Accordion.Header>
                    <Accordion.Body>{x?.text}</Accordion.Body>
                  </Accordion.Item>
                })
              }

            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordionsec

// 11.11.11.11.11.11.11.11.11..... {{{{{{{{{{{{{accordion}}}}}}}}}}}}}
