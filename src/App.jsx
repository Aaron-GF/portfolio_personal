import { ModeToggle } from "./components/ui/ModeToggle";

export default function App() {
  return (
    <>
      <header className="flex justify-end p-10">
        <ModeToggle>click me</ModeToggle>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}
