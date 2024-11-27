import "./App.css";
import ProfileCard from "./ProfileCard";

function App() {
  const handleHobbyClick = (hobby) => {
    alert(`You clicked on: ${hobby}`);
  };

  const personArr = [
    {
      name: "Piyush",
      age: 15,
      isMember: false,
      hobbies: ["Reading", "Swmming"],
      onHobbyClick: handleHobbyClick,
    },
    {
      name: "Dev",
      age: 22,
      isMember: true,
      hobbies: ["Traveling", "Gaming"],
      onHobbyClick: handleHobbyClick,
    },
    {
      name: "Abhishek",
      age: 23,
      isMember: true,
      hobbies: ["Traveling", "Gaming"],
      onHobbyClick: handleHobbyClick,
    },
  ];

  return (
    <>
      <div className="app-container">
        {personArr.map((person, index) => {
          return (
            <div key={index}>
              <ProfileCard {...person} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
