import React from 'react';

export interface Survey {
    survey: any,
    id: number,
    name: string,
    isGuest: number,
}

export type FilterArgs =  number