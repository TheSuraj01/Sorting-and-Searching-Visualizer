import "./styles/aboutstyle.css"

function About() {
    return (
        <div className="body">
            <h1 className="kn">Know Me</h1>
            <div className="creators mt-4">
                <div className="cards">
                    <div className="details">
                        <div className="image">
                            <div className="img">
                                <img src="src/resources/Profile.jpg" alt="" />
                            </div>
                        </div>
                        <div className="data">
                            <h3 className="name">
                                <span><h2>Suraj Kumar</h2></span>
                                <span><h2>Yadav</h2></span>
                            </h3>
                            <p className="designation">
                                MERN Developer, ML, JAVA Developer
                            </p>
                            <div className="social-media-list">
                                <ul>
                                    <li><a target="_blank" href="http://www.linkedin.com/in/suraj-kumar-yadav-318230238" rel="noreferrer"><img className="icn" src="/src/resources/linkedin.png" alt="" /></a></li>
                                    <li><a target="_blank" href="https://github.com/TheSuraj01" rel="noreferrer"><img className="icn" src="/src/resources/github.png" alt="" /></a></li>
                                    <li><a target="_blank" href="https://www.instagram.com/itz._.me._.suraj/" rel="noreferrer"><img className="icn" src="/src/resources/instagram.png" alt="" /></a></li>
                                    <li><a target="_blank" href="https://twitter.com/SURAJRAIZADA6" rel="noreferrer"><img className="icn" src="/src/resources/twitter.png" alt="" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
