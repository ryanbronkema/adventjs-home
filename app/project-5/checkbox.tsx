"use client";

import React, { useEffect, useState } from "react";
import "./checkbox.css";
import episodes from "./episodes";

interface Episode {
  id: number;
  name: string;
}

export default function Checkbox() {
  const listItems = episodes.map((episode: Episode) => (
    <li key={episode.id}>
      <label htmlFor={`episode-${episode.id}`}>
        <input
          type="checkbox"
          name={`episode-${episode.id}`}
          id={`episode-${episode.id}`}
        />
        <span>{`${episode.id} || ${episode.name}`}</span>
      </label>
    </li>
  ));

  return (
    <div className="wrapper">
      <div className="cover">
        <img src="/images/podcast-cover.png" alt="Compressed.fm" />
      </div>
      <div className="content">
        <h1>Listen to all the Compressed.fm Episodes</h1>
        <ul className="episodes">{listItems}</ul>
      </div>
    </div>
  );
}
