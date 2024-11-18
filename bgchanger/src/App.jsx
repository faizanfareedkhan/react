import NavBG from "./components/NavBG";

export default function App() {
  return (
    <div className="h-screen">
      <h1 className="mx-auto w-max animate-bounce pt-4 text-4xl font-bold">
        bgChanger
      </h1>
      <NavBG />
    </div>
  );
}
