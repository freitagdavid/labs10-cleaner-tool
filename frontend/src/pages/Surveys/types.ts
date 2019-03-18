import React from 'react';
import { boolean } from 'yup';

export interface Survey {
    survey: any,
    id: number,
    name: string,
    isGuest: number | boolean,
}

export type FilterArgs =  number | boolean