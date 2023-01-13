import React, {useState, useRef} from 'react'
import "./Accordion.css"

export default function Accordion() {

    const [toggle, setToggle] = useState(false)

    const refHeight = useRef()

    const toggleState = () => {
        setToggle(!toggle)
    }

    return (
        <div className="accordion">
            <button onClick={toggleState} className="accordion__btn">
                <span>Accordian 1</span>
            </button>
            
            <div className={toggle ? "animated" : "accordion__an"} ref={refHeight}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, suscipit quae maiores sunt ducimus est dolorem perspiciatis earum corporis unde, dicta quibusdam aut placeat dignissimos distinctio vel quo eligendi ipsam.
                </p>
            </div>
            
            <button onClick={toggleState} className="accordion__btn">
                <span>Accordian 2</span>
            </button>
            
            <div className={toggle ? "animated" : "accordion__an"}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, suscipit quae maiores sunt ducimus est dolorem perspiciatis earum corporis unde, dicta quibusdam aut placeat dignissimos distinctio vel quo eligendi ipsam.
                </p>
            </div>
            
        </div>
    )
}
