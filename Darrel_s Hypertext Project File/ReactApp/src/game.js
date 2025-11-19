import React, { useState, useEffect } from "react";
import story from "./story";
import { useCookies } from "react-cookie";
import { Traveler, Doppelganger, Weapons } from "./object";

function Game() {
  const [current, setCurrent] = useState("intro");
  const [cookies, setCookie] = useCookies(["theme"]);
  const [traveler, setTraveler] = useState(null);
  const [doppelganger, setDoppelganger] = useState(null);

  useEffect(() => {
    setTraveler(
      new Traveler({
        name: "Traveler",
        health: 100,
        strengths: ["Adaptability", "Determination"],
        weaknesses: ["Temptation", "Doubt"],
        weapon: new Weapons("Energy Blade", 30, 2),
      })
    );

    setDoppelganger(
      new Doppelganger({
        name: "Corrupted Doppelganger",
        health: 100,
        strengths: ["Power", "Cunning"],
        weaknesses: ["Identity Crisis", "Internal Conflict"],
        weapon: new Weapons("Dark Energy", 35, 3),
      })
    );
  }, []);

  const currentSection =
    story[current] ||
    (story.paths && story.paths[current]) ||
    (story.endings && story.endings[current]);

  const handleChoice = (nextId) => {
    const foundChoice =
      currentSection?.choices?.find((choice) => choice.id === nextId) || {};

    if (foundChoice.leadsTo && Array.isArray(foundChoice.leadsTo)) {
      const next = foundChoice.leadsTo[Math.floor(Math.random() * foundChoice.leadsTo.length)];
      setCurrent(next);
    } else if (story[nextId]) {
      setCurrent(nextId);
    } else if (story.paths?.[nextId]) {
      setCurrent(nextId);
    } else if (story.endings?.[nextId]) {
      setCurrent(nextId);
    } else if (currentSection?.funnel) {
      setCurrent(currentSection.funnel);
    }
  };

  const renderHealthBar = (character, color) => (
    <div className="w-full bg-gray-700 rounded-full h-5">
      <div
        className={`h-5 rounded-full transition-all duration-500 ${color}`}
        style={{ width: `${character.health}%` }}
      />
    </div>
  );

  const theme =
    cookies.theme?.toLowerCase() ||
    currentSection?.theme?.toLowerCase().replace ||
    "light";

  const setTheme = (style) => {
    setCookie("theme", style, { path: "/" });
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } min-h-screen p-6 transition-colors duration-500`}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-center">
          {currentSection?.title || "Loading..."}
        </h1>

        {currentSection?.image && (
          <div className="mb-6 flex justify-center">
            <img
              src={`/images/${currentSection.image}`}
              alt=""
              className="rounded-xl shadow-lg max-w-full h-auto"
            />
          </div>
        )}

        {currentSection?.setting && (
          <h3 className="text-center text-lg mb-4">{currentSection.setting}</h3>
        )}

        {currentSection?.narration && (
          <p className="text-center mb-6">{currentSection.narration}</p>
        )}

        <div className="flex flex-col md:flex-row gap-6 mb-6">
          {traveler && (
            <div className="flex-1 p-4 bg-gray-800 rounded-xl text-white">
              <h3 className="text-xl font-bold text-yellow-400">{traveler.name}</h3>
              <p className="italic mb-2">{traveler.speak()}</p>
              {renderHealthBar(traveler, "bg-yellow-400")}
            </div>
          )}
          {doppelganger && (
            <div className="flex-1 p-4 bg-gray-800 rounded-xl text-white">
              <h3 className="text-xl font-bold text-red-500">{doppelganger.name}</h3>
              <p className="italic mb-2">{doppelganger.speak()}</p>
              {renderHealthBar(doppelganger, "bg-red-500")}
            </div>
          )}
        </div>

        {currentSection?.scenarios && (
          <div className="space-y-6 mt-6">
            {currentSection.scenarios.map((scenario) => (
              <div
                key={scenario.id}
                className="bg-gray-800 p-5 rounded-xl text-white shadow-md"
              >
                <p className="mb-4">{scenario.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {scenario.choice.map((choiceText, i) => (
                    <button
                      key={i}
                      onClick={() => currentSection.funnel && setCurrent(currentSection.funnel)}
                      className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                    >
                      {choiceText}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {currentSection?.choices && (
          <div className="flex flex-wrap gap-4 mt-6 justify-center">
            {currentSection.choices.map((choice) => (
              <button
                key={choice.id}
                onClick={() => handleChoice(choice.id)}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-black rounded-full font-bold transition-all hover:scale-105"
              >
                {choice.label}
              </button>
            ))}
          </div>
        )}

        <div className="mt-8 flex justify-center gap-4">
          <button
            className="px-4 py-2 bg-gray-700 text-white rounded-lg"
            onClick={() => setTheme("Dark")}
          >
            Dark
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-black rounded-lg"
            onClick={() => setTheme("Light")}
          >
            Light
          </button>
        </div>
      </div>
    </div>
  );
}

export default Game;
