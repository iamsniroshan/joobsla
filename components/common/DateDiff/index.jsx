import React, { useEffect, useState } from "react";

function DateDiff({ isoDate }) {
  const [diff, setDiff] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Get current date and time
      const now = new Date();

      // Convert ISO date string to Date object
      const compareDate = new Date(isoDate);

      // Calculate difference between current date and compare date
      const diffInMs = now - compareDate

      // Calculate difference in days, hours, and minutes
      const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
      const diffInHrs = Math.floor(diffInMs / (1000 * 60 * 60)) % 24;
      const diffInMins = Math.floor(diffInMs / (1000 * 60)) % 60;

      // Set state with difference object
      setDiff({ days: diffInDays, hours: diffInHrs, minutes: diffInMins });
    }, 1000);

    // Cleanup interval
    return () => clearInterval(interval);
  }, [isoDate]);

  if (!diff) {
    return <div>Loading...</div>;
  }

  if (diff.days > 0) {
    return (
      <div>
        {diff.days} days
      </div>
    );
  } else if (diff.hours > 0) {
    return (
      <div>
        {diff.hours} hour{diff.hours === 1 ? "" : "s"}
      </div>
    );
  } else {
    return (
      <div>
        {diff.minutes} min
      </div>
    );
  }
}

export default DateDiff;
