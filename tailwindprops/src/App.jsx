import Card from "./components/Card";

const App = () => {
  let myObj = { username: "faizan", age: 21 };
  let newArr = [1, 2, 3];
  return (
    <>
      <h1 className="mb-4 rounded-xl bg-green-400 p-4 text-black">
        Taiwind Test
      </h1>
      <Card username={"aafinz"} someObj={myObj} someArr={newArr} />
      <Card username={"adeefr"} />
    </>
  );
};

export default App;
