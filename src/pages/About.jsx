import Navbar from "../Navbar"

export default function About() {

    return (
        <>
            <Navbar />
            <main>
                <article className="about-mission-vision">
                    <div className="about-left">
                        <h1>Our Mission</h1>
                        <p>To educate and empower students to take action and lead environmental change.</p>
                    </div>
                    <div className="about-right">
                        <h1>Our Vision</h1>
                        <p>A clean and sustainable environment for generations to come.</p>
                    </div>
                </article>

                <div className="about-center">
                    <h1>Our Values</h1>
                    <ul>
                        <li>Spread Awareness</li><span><p>Endorse education as the key to building a world that values sustainable thinking, encouraging action, and awakening young minds.</p></span>
                        <li>Nurture Respect</li>
                        <li>Foster Collaboration</li><span><p>Uphold a model of teamwork that promotes collaboration among students and between students and their communities.</p></span>
                        <li></li>
                    </ul>
                </div>
            </main>
        </>
    )
}