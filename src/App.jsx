import { ModeToggle } from "./components/ui/ModeToggle";

export default function App() {
  return (
    <>
      <header className="flex justify-end p-10">
        <ModeToggle></ModeToggle>
      </header>
      <main></main>
      <footer>
        <small>Copyright &copy; 2025 Aaron-GF</small>
      </footer>
    </>
  );
}
