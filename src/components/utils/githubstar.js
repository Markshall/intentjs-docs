import { useState, useEffect } from "react";

export default function GithubStar() {
  const [starCount, setStarCount] = useState(1);

  useEffect(() => {
    async function fetchStarCount() {
      try {
        const response = await fetch(
          `https://api.github.com/repos/intentjs/core`
        );
        if (!response.ok) {
          throw new Error(`Error fetching stars: ${response.status}`);
        }
        const data = await response.json();
        setStarCount(data.stargazers_count);
      } catch (error) {
        setStarCount(error.message);
      }
    }
    fetchStarCount();
  }, []);

  const formatStarCount = () => {
    if (starCount >= 1000000) {
      return `${(starCount / 1000000).toFixed(1)}m`;
    } else if (starCount >= 1000) {
      return `${(starCount / 1000).toFixed(1)}k`;
    } else {
      return starCount.toString();
    }
  };

  return formatStarCount();
}
