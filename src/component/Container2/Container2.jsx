import React, { useEffect, useState } from "react";
import "./Container2.css";
import { Link } from "react-router-dom";

const Container2 = () => {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);

    const welcomeText = "Welcome to Advitha Exim";
    const typingSpeed = 150;
    const eraseSpeed = 100;
    const pauseAfterTyping = 1000;
    const pauseAfterErasing = 500;

    useEffect(() => {
        let timeout;

        const handleTyping = () => {
            if (!isDeleting) {
                setText(welcomeText.substring(0, text.length + 1));
                if (text === welcomeText) {
                    timeout = setTimeout(() => setIsDeleting(true), pauseAfterTyping);
                } else {
                    timeout = setTimeout(handleTyping, typingSpeed);
                }
            } else {
                setText(welcomeText.substring(0, text.length - 1));
                if (text === "") {
                    setIsDeleting(false);
                    setLoopNum(loopNum + 1);
                    timeout = setTimeout(handleTyping, pauseAfterErasing);
                } else {
                    timeout = setTimeout(handleTyping, eraseSpeed);
                }
            }
        };

        timeout = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timeout);
    }, [text, isDeleting, loopNum]);

    return (
        <div className="container2">
             <img
                style={{ width: "100%" }}
                src="https://images.yourstory.com/cs/2/3fb20ae02dc911e9af58c17e6cc3d915/Image7wkk-1615273053905.jpg?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1200&q=75"
                alt="Descriptive text"
            />
            <h1 className="main-heading">Experience the True Taste of Nature</h1>
            <div className="container2-content">
                {/* First Container (Typing Effect + Button) */}
                <div className="container2-item">
                    <div className="animated-text-container">
                        <h2 className="animated-text">{text}</h2>
                    </div>
                    <Link to="/about">
                        <button className="fixed-button">More About</button>
                    </Link>
                </div>

                {/* Second Container (Image) */}
                <div className="container2-item">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY0opOhc1D1RApp04FaHki2p4-14ntd4U12w&s"
                        alt="Advitha Exim"
                    />
                </div>

                {/* Third Container (Paragraphs) */}
                <div className="container2-item">
                    <p>
                        Advitha Exim is dedicated to bringing you the finest natural
                        products, crafted with care and precision. Our mission is to
                        provide you with an authentic taste of nature, ensuring quality and
                        sustainability in every product.
                    </p>
                    <p>
                        With a commitment to excellence, Advitha Exim sources the best
                        ingredients from around the world, blending tradition with
                        innovation to create products that are not only delicious but also
                        beneficial for your health.
                    </p>
                </div>
            </div>
           

            <img
                style={{ width: "100%" }}
                src="/images\location.jpg"
                alt="World Map"
            />
           
            


        </div>

    );
};

export default Container2;
