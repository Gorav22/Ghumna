// import { useState } from "react";
import Hero from "./components/custom/Hero";
import Head from 'next/head';
function App() {
  return (
    <>
    <Head>
      <title>Ghumna</title>
      <meta name="description" content="The AI Trip Planner Website That can plan trip for you using AI"/>
      <meta name="keywords" content="Ghumna, AI trip Planner, Trip Planner, Planning for a trip, AI Website for trip planning, AI Website"/>
    </Head>
    <div className="bg-[url('/bg.jpg')] bg-cover min-h-screen">
      <Hero />
    </div>
    </>
  );
}

export default App;
