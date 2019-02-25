import React from 'react';

export interface Survey {
    survey: any,
    id: number,
    name: string,
}

export type FilterArgs = 'all' | 'guest' | 'assistant';