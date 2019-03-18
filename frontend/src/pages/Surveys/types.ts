import React from 'react';

export interface Survey {
  survey: any,
  id: number,
  name: string,
  isGuest: boolean,
}

export type FilterArgs = boolean | number;