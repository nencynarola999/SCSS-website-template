import React from 'react'
import main from '/styles/Service.module.scss'
import { Accordion } from 'react-bootstrap'

const Saccorsec = () => {
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
        <div className='container-fluid p-0 g-0'>
            <div className={main.saccormaindiv}>
                <div className={main.saccorimage}>
                    <div className={main.saccorimage2}>
                    </div>
                    <div className={main.saccorimage3}>
                        <p>BEST ARCHITECTURE</p>
                        <h2>ARCHITECTURE DID EXPECT <span>STRATEGIST</span></h2>
                        <Accordion>
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

export default Saccorsec