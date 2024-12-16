import Header from "../Header/Header"


function Home() {
return (
    <>
        <Header></Header>
        <main className="flex flex-col justify-center mx-auto">
        {/* Welcome */}
            <section className="mx-auto flex px-28 justify-between gap-5">
                <div className="flex flex-col container lg:w-1/2 justify-center" >
                    <header className="text-left  mb-5">
                        <h2 className="text-l text-pretty font-medium">Welcome To  &quot;Project-Name&quot;</h2>
                    </header>
                    <div className="container mx-auto ">
                        <h1 className="sm:text-3xl md:text-4xl font-medium  mb-10">&quot;Project-Name&quot; is the simplest, safest way to manage and share passwords. </h1>
                        <p className="sm:text-xl md:text-2xl font-normal ">Never share passwords by text or email again. &quot;Project-name&quot; keeps your passwords encrypted so you, your family, and your teammates can live and work securely.</p>
                    </div>
                </div>
                <div className="hidden  lg:flex container  w-1/2 justify-center">
                    <img src="./src/assets/confused.png" alt="issue-design" className="mx-auto" />
                </div>
            </section>
        {/* Risks */ }
            <section id="Solution" className=" mx-auto bg-[#F9F6F3] p-20">
                    <div className="mb-10">
                        <h2 className="text-center text-pretty text-5xl font-medium">The risks of sharing passwords through <br/>unsafe methods.</h2>
                    </div>
                <div className="container flex flex-row ">
                    <div className="container mx-auto p-10 shadow">
                        <img src="" alt="" />
                        <h3 className="text-2xl mb-4 font-medium">Conventional methods compromise password security.</h3>
                        <p>Unsafe sharing methods often lead to data breaches and unauthorized access. Text messages can be hacked, phone calls overheard, and emails sent to the wrong person.</p>
                    </div>
                    <div className="container mx-auto p-10 shadow">
                    <img src="" alt="" />
                        <h3 className="text-2xl mb-4 font-medium">Anyone can read your information.</h3>
                        <br/>
                        <p className="">Encrypted emails and texts are rare. Without encryption, everything is sent as plain text, making it easy for hackers to access your sensitive information.</p>
                    </div>
                    <div className="container mx-auto p-10 shadow ">
                    <img src="" alt="" />
                        <h3 className="text-2xl mb-4 font-medium">You have no control over where your information ends up.</h3>

                        <p>Old password-sharing methods lack control and limits. You share a password with one person, they share it with others, and it keeps spreading. There’s no way to restrict access or stop further sharing.</p>
                    </div>
                </div>
            </section>
            {/*Features*/}
            {/* <section id="Features">
                    <section id="Personal">
                        <div>
                            <span>Prsonal sharing</span>
                        </div>
                        <div>
                            <h2>&quot;Project-name&quot; is the secure way to share with friends and family</h2>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <div></div>
                                    <div><h3></h3><p></p></div>
                                </li>
                                <li>
                                    <div></div>
                                    <div><h3></h3><p></p></div>
                                </li>
                                <li>
                                <div></div>
                                <div><h3></h3><p></p></div>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section id="Manager">
                        <div>
                            <span>PASSWORD MANAGER SOLUTION</span>
                        </div>
                        <div>
                            <h2>Go beyond secure sharing with the LastPass password manager</h2>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <div></div>
                                    <div><h3></h3><p></p></div>
                                </li>
                                <li>
                                    <div></div>
                                    <div><h3></h3><p></p></div>
                                </li>
                                <li>
                                <div></div>
                                <div><h3></h3><p></p></div>
                                </li>
                            </ul>
                        </div>
                    </section>
            </section> */}
        </main>
    </>
)
}

export default Home