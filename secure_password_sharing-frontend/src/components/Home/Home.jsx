import Header from "../Header/Header";

function Home() {
  return (
    <>
      <Header></Header>
      <main className="flex flex-col justify-center mx-auto w-full">
        {/* Welcome */}
        <section id="Product" className="flex md:px-10 lg:px-32 justify-between gap-5 my-14 md:my-20">
          <div className="flex flex-col gap-4 lg:w-1/2 justify-center lg:bg-transparent  bg-[#F9F6F3] p-8 lg:p-10">
            <header className="text-left ">
              <h2 className="text-xl text-pretty font-medium">
                Welcome To &quot;Project-Name&quot;
              </h2>
            </header>
            <div className="flex gap-4 flex-col container mx-auto ">
              <h1 className="sm:text-2xl md:text-3xl font-medium ">
                &quot;Project-Name&quot; is the simplest, safest way to manage
                and share passwords.{" "}
              </h1>
              <p className="sm:text-xl md:text-2xl font-normal ">
                Never share passwords by text or email again.
                &quot;Project-name&quot; keeps your passwords encrypted so you,
                your family, and your teammates can live and work securely.
              </p>
            </div>
          </div>
          <div className="hidden lg:flex container  w-1/2 justify-center">
            <img
              src="./src/assets/confused.png"
              alt="issue-design"
              className="mx-auto"
            />
          </div>
        </section>
        {/* Risks */}
        <section id="Solutions" className="mx-auto  p-8 lg:p-20 border-y-2 border-[#7A4FE7] rounded-2xl">
          <div className="mb-10">
            <h2 className="text-center text-pretty text-2xl lg:text-5xl font-medium">
              The risks of sharing passwords through
              unsafe methods.
            </h2>
          </div>
          <div className="container flex flex-col lg:flex-row  gap-10 ">
            <div className="container mx-auto p-10 shadow-2xl shadow-[#7A4FE7] rounded-3xl bg-[#F9F6F3] ">
              <img src="" alt="" />
              <h3 className="lg:text-2xl text-xl mb-4 font-medium">
                Conventional methods compromise password security.
              </h3>
              <p>
                Unsafe sharing methods often lead to data breaches and
                unauthorized access. Text messages can be hacked, phone calls
                overheard, and emails sent to the wrong person.
              </p>
            </div>
            <div className="container mx-auto p-10 shadow-2xl shadow-[#7A4FE7] rounded-3xl bg-[#F9F6F3]">
              <img src="" alt="" />
              <h3 className="lg:text-2xl text-xl mb-4 font-medium">
                Anyone can read your information.
              </h3>
              <br />
              <p className="">
                Encrypted emails and texts are rare. Without encryption,
                everything is sent as plain text, making it easy for hackers to
                access your sensitive information.
              </p>
            </div>
            <div className="container mx-auto p-10 shadow-2xl rounded-3xl shadow-[#7A4FE7] bg-[#F9F6F3] ">
              <img src="" alt="" />
              <h3 className="lg:text-2xl text-xl mb-4 font-medium ">
                You have no control over where your information ends up.
              </h3>

              <p>
                Old password-sharing methods lack control and limits. You share
                a password with one person, they share it with others, and it
                keeps spreading. There’s no way to restrict access or stop
                further sharing.
              </p>
            </div>
          </div>
        </section>
        {/* Features */}
        <section id="Features" className="flex flex-col justify-around gap-10 mt-10 border-y-2 border-[#7A4FE7] rounded-2xl p-8 lg:p-20">
            <section id="Personal" className="mb-10">
                <div className="text-center mb-8">
                    <span className="text-pretty text-xl lg:text-2xl font-medium">Personal Sharing</span>
                </div>
                <div className="text-center mb-6">
                    <h2 className="text-2xl lg:text-4xl font-medium">
                        &quot;Project-name&quot; is the secure way to share with friends and family
                    </h2>
                </div>
                <div className="container flex flex-col lg:flex-row gap-10">
                    <ul className="space-y-6">
                        <li className="flex gap-4 items-center">
                        <div className="md:w-16 md:h-16 w-12 h-12 bg-gray-200 rounded-full"></div>
                        <div className="md:w-3/4 w-4/5"> 
                                <h3 className="text-xl lg:text-2xl font-medium">Share passwords without sharing any sensitive data</h3>
                                <p className="hidden md:text-sm md:block lg:text-base">Maintain cybersecurity by providing access to passwords without ever allowing the plain text password to be seen</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-center">
                        <div className="md:w-16 md:h-16 w-12 h-12 bg-gray-200 rounded-full"></div>
                        <div className="md:w-3/4 w-4/5"> 
                                <h3 className="text-xl lg:text-2xl font-medium">Have full control over what and when to share</h3>
                                <p className="hidden md:text-sm md:block lg:text-base">Share and revoke login credentials at any time from your &quot;Project-Name password vault’s sharing center.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-center ">
                            <div className="md:w-16 md:h-16 w-12 h-12 bg-gray-200 rounded-full"></div>
                            <div className="md:w-3/4 w-4/5"> 
                                <h3 className="text-xl lg:text-2xl font-medium">Share passwords in folders</h3>
                                <p className="hidden md:text-sm md:block lg:text-base">Bundle passwords for shared accounts – such as streaming login credentials for family members – into folders for safe, easy access.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section id="Manager" className="mb-10 border-t-2 border-[#7A4FE7] ">
                <div className="text-center my-8">
                    <span className="text-pretty text-xl lg:text-2xl font-medium">Password Manager Solution</span>
                </div>
                <div className="text-center mb-6">
                    <h2 className="text-2xl lg:text-4xl font-medium">
                        Go beyond secure sharing with the &quot;Project-name&quot; password manager
                    </h2>
                </div>
                <div className="container flex flex-col lg:flex-row gap-10">
                <ul className="space-y-6">
                        <li className="flex gap-4 items-center">
                        <div className="md:w-16 md:h-16 w-12 h-12 bg-gray-200 rounded-full"></div>
                        <div className="md:w-3/4 w-4/5"> 
                                <h3 className="text-xl lg:text-2xl font-medium">Password encryption and storage </h3>
                                <p className="hidden md:text-sm md:block lg:text-base">Password managers protect your passwords by storing them for you.</p>
                            </div>
                        </li>
                        {/* <li className="flex gap-4 items-center">
                        <div className="md:w-16 md:h-16 w-12 h-12 bg-gray-200 rounded-full"></div>
                        <div className="md:w-3/4 w-4/5"> 
                                <h3 className="text-xl lg:text-2xl font-medium">Have full control over what and when to share</h3>
                                <p className="hidden md:text-sm md:block lg:text-base">Share and revoke login credentials at any time from your LastPass password vault’s sharing center.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-center ">
                            <div className="md:w-16 md:h-16 w-12 h-12 bg-gray-200 rounded-full"></div>
                            <div className="md:w-3/4 w-4/5"> 
                                <h3 className="text-xl lg:text-2xl font-medium">Share passwords in folders</h3>
                                <p className="hidden md:text-sm md:block lg:text-base">Bundle passwords for shared accounts – such as streaming login credentials for family members – into folders for safe, easy access.</p>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </section>
        </section>
        <section id="Contact" className="mx-auto w-full flex flex-col justify-between lg:flex-row bg-white p-8 lg:p-20">
            <div className="lg:w-1/2 flex flex-col gap-1 md:gap-2 p-4 mx-auto md:self-center">
                {/* <img src="./src/assets/contactus.png" alt="" className="border-2 rounded-3xl shadow-2xl mx-auto lg:w-4/5"/> */}
            <h1 className="lg:text-4xl text-3xl font-semibold">Contact us</h1>
            <p className="md:text-2xl text-base ">Need assistance or have questions? Our team is ready to provide expert guidance and resources to help you get the most out of &quot;Project Name&quot;</p>
            </div> 
          <div className="min-h-screen flex flex-col lg:w-1/2 p-4 justify-center ">
            <div className="border-2 border-gray-400 rounded-xl shadow-lg lg:p-8 md:p-6 p-4 w-full lg:max-w-4xl bg-[#F3F4F6]">
              <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold text-center mb-6 text-[#7A4FE7]">
                Contact Us
              </h1>
              <form className="space-y-6 ">
                <div>
                  <label
                    className="block ml-3 mb-2 md:text-base text-sm font-medium text-gray-700"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full p-3 md:text-base text-sm border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block ml-3 mb-2 md:text-base text-sm font-medium text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full p-3 md:text-base text-sm border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block ml-3 mb-2 md:text-base text-sm font-medium text-gray-700"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Enter your message"
                    className="w-full p-3 md:text-base text-sm border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 md:text-base text-sm bg-[#7A4FE7] text-white font-bold rounded-3xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
