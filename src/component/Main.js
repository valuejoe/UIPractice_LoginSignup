import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import LogIn from './Auth/LogIn';
import SignUp from './Auth/SignUp';

const Main = () => {
    const [toggle, setToggle] = useState(false);
    const moveBox = useSpring({
        position: "absolute",
        backgroundColor: "#FFFAF0",
        opacity: 1,
        borderRadius: "3px",
        height: "400px",
        width: "400px",
        boxShadow: "0 0 8px black",
        marginTop: "-40px",
        marginLeft: toggle ? "50px" : "350px",
        config: config.wobbly,
        zIndex: -1,
    })
    
    return (
        <div>
            <div className="main">
                <animated.div style={moveBox} />
                {
                    !toggle ? (
                        <React.Fragment>
                            <div className="loginleft">
                                <h2>Don't have an account?</h2>
                                <button onClick={() => { setToggle(!toggle) }}>
                                    SIGN UP
                                </button>
                            </div>
                            <LogIn />
                        </React.Fragment>
                    ) : (
                            <React.Fragment>
                                <SignUp />
                                <div className="signupright">
                                    <h2>Have an account?</h2>
                                    <button onClick={() => { setToggle(!toggle) }}>
                                        LOG IN
                                    </button>
                                </div>
                            </React.Fragment>
                        )
                }
            </div>
        </div>
    )
}

export default Main