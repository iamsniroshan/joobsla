import { parseISO, format } from 'date-fns';
import React, { useEffect, useState } from "react";

export default function Date({ dateString,dateFormate }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, dateFormate)}</time>;
}