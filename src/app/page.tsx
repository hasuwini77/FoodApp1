import { Main } from "next/document";
import Header from "./components/Header"
import MainContent from "./components/MainContent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
     <Header /> 
     < MainContent /> 
    </main>
  );
}
