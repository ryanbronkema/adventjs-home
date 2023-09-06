"use client";

import React, { useEffect, useState } from "react";
import './checkbox.css';

export default function Checkbox() {

  return (
    <div className="wrapper">
      <div className="cover">
        <img src="/images/podcast-cover.png" alt="Compressed.fm" />
      </div>
      <div className="content">
        <h1>Listen to all the Compressed.fm Episodes</h1>

        <ul className="episodes">
          <li>
            <label htmlFor="episode-1">
              <input type="checkbox" name="episode-1" id="episode-1" />
              <span>1 || Trailer</span>
            </label>
          </li>
          <li>
            <label htmlFor="episode-2">
              <input type="checkbox" name="episode-2" id="episode-2" />
              <span>2 || James Q Quick Origin Story</span>
            </label>
          </li>
          <li>
            <label htmlFor="episode-3">
              <input type="checkbox" name="episode-3" id="episode-3" />
              <span>3 || Amy Dutton's Origin Story</span>
            </label>
          </li>
          <li>
            <label htmlFor="episode-4">
              <input type="checkbox" name="episode-4" id="episode-4" />
              <span>4 || Starting a New Development Project</span>
            </label>
          </li>
          <li>
            <label htmlFor="episode-5">
              <input type="checkbox" name="episode-5" id="episode-5" />
              <span>5 || How Do you Start a New Design Project?</span>
            </label>
          </li>
          <li>
            <label htmlFor="episode-6">
              <input type="checkbox" name="episode-6" id="episode-6" />
              <span>6 || Freelancing (Part 1)</span>
            </label>
          </li>
          <li>
            <label htmlFor="episode-7">
              <input type="checkbox" name="episode-7" id="episode-7" />
              <span>7 || Freelancing (Part 2)</span>
            </label>
          </li>
          <li>
            <label htmlFor="episode-8">
              <input type="checkbox" name="episode-8" id="episode-8" />
              <span>8 || The Tech Behind jamesqquick.com</span>
            </label>
          </li>
          <li>
            <label htmlFor="episode-9">
              <input type="checkbox" name="episode-9" id="episode-9" />
              <span>9 || The Tech Behind SelfTeach.me</span>
            </label>
          </li>
          <li>
            <label htmlFor="episode-10">
              <input type="checkbox" name="episode-10" id="episode-10" />
              <span>10 || Tech Behind SelfTeach.me</span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}
