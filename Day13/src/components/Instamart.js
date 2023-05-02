import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
    {console.log(isVisible,"isVisible",setIsVisible,"setIsVisible")}
  return (
    <div className="p-5 border-4 m-2">
      <h1 className="text-lg">{title}</h1>
      {isVisible ? (
        <button></button>
      ) : (
        <button onClick={() => setIsVisible(true)}>Show</button>
      )}
      {isVisible && (
        <p>{description}</p>
      )}
    </div>
  );
};

const Instamart = () => {

    const [visibleSection,setVisibleSection] = useState("about");
  return (
    <>
      <Section
        title="About Instamart"
        description="LOREM IPSUM GENERATOR Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum. Id
          molestias voluptatibus quo voluptate molestiae qui reprehenderit
          sequi. Cum sunt error est impedit enim et voluptas voluptate id
          maiores impedit eos culpa itaque quo tempore ratione ea labore rerum?
          Rem internos voluptatem et officiis illo qui officia mollitia ut nisi
          officia sed magni nobis hic internos suscipit et dolorem laborum. Qui
          tempora officiis qui omnis culpa et cupiditate quis aut dolor officia
          ad velit explicabo sit harum eaque. Ut dolorem dolorem sit harum fuga
          et voluptatem porro ut ipsa maiores eos recusandae eius sit fuga quia
          aut assumenda voluptatem! Non ratione error id minima iure ea delectus
          iste rem temporibus voluptates."
        isVisible={visibleSection === "about"}
        setIsVisible={() => {setVisibleSection("about")}}
      ></Section>
      <Section
        title="Team Instamart"
        description="LOREM IPSUM GENERATOR Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum. Id
          molestias voluptatibus quo voluptate molestiae qui reprehenderit
          sequi. Cum sunt error est impedit enim et voluptas voluptate id
          maiores impedit eos culpa itaque quo tempore ratione ea labore rerum?
          Rem internos voluptatem et officiis illo qui officia mollitia ut nisi
          officia sed magni nobis hic internos suscipit et dolorem laborum. Qui
          tempora officiis qui omnis culpa et cupiditate quis aut dolor officia
          ad velit explicabo sit harum eaque. Ut dolorem dolorem sit harum fuga
          et voluptatem porro ut ipsa maiores eos recusandae eius sit fuga quia
          aut assumenda voluptatem! Non ratione error id minima iure ea delectus
          iste rem temporibus voluptates."
        isVisible={visibleSection === "team"}
        setIsVisible={()=>{setVisibleSection("team")}}
      ></Section>
      <Section
        title="Careers Instamart"
        description="LOREM IPSUM GENERATOR Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum. Id
          molestias voluptatibus quo voluptate molestiae qui reprehenderit
          sequi. Cum sunt error est impedit enim et voluptas voluptate id
          maiores impedit eos culpa itaque quo tempore ratione ea labore rerum?
          Rem internos voluptatem et officiis illo qui officia mollitia ut nisi
          officia sed magni nobis hic internos suscipit et dolorem laborum. Qui
          tempora officiis qui omnis culpa et cupiditate quis aut dolor officia
          ad velit explicabo sit harum eaque. Ut dolorem dolorem sit harum fuga
          et voluptatem porro ut ipsa maiores eos recusandae eius sit fuga quia
          aut assumenda voluptatem! Non ratione error id minima iure ea delectus
          iste rem temporibus voluptates."
        isVisible={visibleSection === "careers"}
        setIsVisible={()=>{setVisibleSection("careers")}}
      ></Section>
    </>
  );
};

export default Instamart;
