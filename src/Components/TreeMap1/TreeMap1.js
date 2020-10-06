import { Chart } from "react-google-charts";
import React from 'react';
import { MyContext } from "../../MyProvider";
import './TreeMap1.css';



let data1=[
    [
        'Brand',
        'Parent',
        'Total Units',
        'Market increase/decrease (color)',
    ],

    ['Inventory By Status', null, 0, 0],
    ['Excess', 'Inventory By Status', null, 0],
    ['Slow Moving', 'Inventory By Status', null, 0],
    ['Active', 'Inventory By Status', null, 0],
    ['Obsolete', 'Inventory By Status', null, 0],



    ['E: Rural', 'Excess', null, 100],
    ['Excess Rural: Madrid, Spain', 'E: Rural', 123, 100],
    ['Excess Rural: Munich, Germany', 'E: Rural', 456, 100],
    ['Excess Rural: Cap Town, South Africa', 'E: Rural', 789, 100],
    ['Excess Rural: Las Vegas, Nevada​', 'E: Rural', 346, 100],
    ['Excess Rural: Baton Rouge, Louisiana', 'E: Rural', 100, 100],
    ['E: Natura', 'Excess', null, 100],
    ['Excess Natura: Madrid, Spain', 'E: Natura', 123, 100],
    ['Excess Natura: Munich, Germany', 'E: Natura', 456, 100],
    ['Excess Natura: Cap Town, South Africa', 'E: Natura', 789, 100],
    ['Excess Natura: Las Vegas, Nevada​', 'E: Natura', 346, 100],
    ['Excess Natura: Baton Rouge, Louisiana', 'E: Natura', 100, 100],
    ['E: Fama', 'Excess', null, 100],
    ['Excess Fama: Madrid, Spain', 'E: Fama', 123, 100],
    ['Excess Fama: Munich, Germany', 'E: Fama', 456, 100],
    ['Excess Fama: Cap Town, South Africa', 'E: Fama', 789, 100],
    ['Excess Fama: Las Vegas, Nevada​', 'E: Fama', 346, 100],
    ['Excess Fama: Baton Rouge, Louisiana', 'E: Fama', 100, 100],
    ['E: Abbas', 'Excess', null, 100],
    ['Excess Abbas: Madrid, Spain', 'E: Abbas', 123, 100],
    ['Excess Abbas: Munich, Germany', 'E: Abbas', 456, 100],
    ['Excess Abbas: Cap Town, South Africa', 'E: Abbas', 789, 100],
    ['Excess Abbas: Las Vegas, Nevada​', 'E: Abbas', 346, 100],
    ['Excess Abbas: Baton Rouge, Louisiana', 'E: Abbas', 100, 100],
    ['E: Aliqui', 'Excess', null, 100],
    ['Excess Aliqui: Madrid, Spain', 'E: Aliqui', 123, 100],
    ['Excess Aliqui: Munich, Germany', 'E: Aliqui', 456, 100],
    ['Excess Aliqui: Cap Town, South Africa', 'E: Aliqui', 789, 100],
    ['Excess Aliqui: Las Vegas, Nevada​', 'E: Aliqui', 346, 100],
    ['Excess Aliqui: Baton Rouge, Louisiana', 'E: Aliqui', 100, 100],
    ['E: Victoia', 'Excess', null, 100],
    ['Excess Victoia: Madrid, Spain', 'E: Victoia', 123, 100],
    ['Excess Victoia: Munich, Germany', 'E: Victoia', 456, 100],
    ['Excess Victoia: Cap Town, South Africa', 'E: Victoia', 789, 100],
    ['Excess Victoia: Las Vegas, Nevada​', 'E: Victoia', 346, 100],
    ['Excess Victoia: Baton Rouge, Louisiana', 'E: Victoia', 100, 100],
    ['E: Pirum', 'Excess', null, 100],
    ['Excess Pirum: Madrid, Spain', 'E: Pirum', 123, 100],
    ['Excess Pirum: Munich, Germany', 'E: Pirum', 456, 100],
    ['Excess Pirum: Cap Town, South Africa', 'E: Pirum', 789, 100],
    ['Excess Pirum: Las Vegas, Nevada​', 'E: Pirum', 346, 100],
    ['Excess Pirum: Baton Rouge, Louisiana', 'E: Pirum', 100, 100],
    ['E: Currus', 'Excess', null, 100],
    ['Excess Currus: Madrid, Spain', 'E: Currus', 123, 100],
    ['Excess Currus: Munich, Germany', 'E: Currus', 456, 100],
    ['Excess Currus: Cap Town, South Africa', 'E: Currus', 789, 100],
    ['Excess Currus: Las Vegas, Nevada​', 'E: Currus', 346, 100],
    ['Excess Currus: Baton Rouge, Louisiana', 'E: Currus', 100, 100],
    



    ['SM: Rural', 'Slow Moving', null, -255],
    ['SMR: Madrid, Spain', 'SM: Rural', 123, -255],
    ['SMR: Munich, Germany', 'SM: Rural', 456, -255],
    ['SMR: Cap Town, South Africa', 'SM: Rural', 234, -255],
    ['SMR: Las Vegas, Nevada', 'SM: Rural', 321, -255],
    ['SMR: Baton Rouge, Louisiana', 'SM: Rural', 542, -255],
    ['SM: Aliqui', 'Slow Moving', null, -255],
    ['SMAl: Madrid, Spain', 'SM: Aliqui', 123, -255],
    ['SMAl: Munich, Germany', 'SM: Aliqui', 456, -255],
    ['SMAl: Cap Town, South Africa', 'SM: Aliqui', 234, -255],
    ['SMAl: Las Vegas, Nevada', 'SM: Aliqui', 321, -255],
    ['SMAl: Baton Rouge, Louisiana', 'SM: Aliqui', 542, -255],
    ['SM: Pirum', 'Slow Moving',  null, -255],
    ['SMP: Madrid, Spain', 'SM: Pirum', 123, -255],
    ['SMP: Munich, Germany', 'SM: Pirum', 456, -255],
    ['SMP: Cap Town, South Africa', 'SM: Pirum', 234, -255],
    ['SMP: Las Vegas, Nevada', 'SM: Pirum', 321, -255],
    ['SMP: Baton Rouge, Louisiana', 'SM: Pirum', 542, -255],
    ['SM: Quibus', 'Slow Moving', null, -255],
    ['SMQ: Madrid, Spain', 'SM: Quibus', 123, -255],
    ['SMQ: Munich, Germany', 'SM: Quibus', 456, -255],
    ['SMQ: Cap Town, South Africa', 'SM: Quibus', 234, -255],
    ['SMQ: Las Vegas, Nevada', 'SM: Quibus', 321, -255],
    ['SMQ: Baton Rouge, Louisiana', 'SM: Quibus', 542, -255],
    ['SM: Currus', 'Slow Moving', null, -255],
    ['SMC: Madrid, Spain', 'SM: Currus', 123, -255],
    ['SMC: Munich, Germany', 'SM: Currus', 456, -255],
    ['SMC: Cap Town, South Africa', 'SM: Currus', 234, -255],
    ['SMC: Las Vegas, Nevada', 'SM: Currus', 321, -255],
    ['SMC: Baton Rouge, Louisiana', 'SM: Currus', 542, -255],
    ['SM: Fama', 'Slow Moving', null, -255],
    ['SMF: Madrid, Spain', 'SM: Fama', 123, -255],
    ['SMF: Munich, Germany', 'SM: Fama', 456, -255],
    ['SMF: Cap Town, South Africa', 'SM: Fama', 234, -255],
    ['SMF: Las Vegas, Nevada', 'SM: Fama', 321, -255],
    ['SMF: Baton Rouge, Louisiana', 'SM: Fama', 542, -255],
    ['SM: Natura', 'Slow Moving', 3348, -255],
    ['SMN: Madrid, Spain', 'SM: Natura', 123, -255],
    ['SMN: Munich, Germany', 'SM: Natura', 456, -255],
    ['SMN: Cap Town, South Africa', 'SM: Natura', 234, -255],
    ['SMN: Las Vegas, Nevada', 'SM: Natura', 321, -255],
    ['SMN: Baton Rouge, Louisiana', 'SM: Natura', 542, -255],



    ['A: Rural', 'Active', null, 255],
    ['AR: Madrid, Spain', 'A: Rural', 123, 255],
    ['AR: Munich, Germany', 'A: Rural', 456, 255],
    ['AR: Cap Town, South Africa', 'A: Rural', 789, 255],
    ['AR: Las Vegas, Nevada​', 'A: Rural', 346, 255],
    ['AR: Baton Rouge, Louisiana', 'A: Rural', 100, 255],
    ['A: Natura', 'Active', null, 255],
    ['AN: Madrid, Spain', 'A: Natura', 123, 255],
    ['AN: Munich, Germany', 'A: Natura', 456, 255],
    ['AN: Cap Town, South Africa', 'A: Natura', 789, 255],
    ['AN: Las Vegas, Nevada​', 'A: Natura', 346, 255],
    ['AN: Baton Rouge, Louisiana', 'A: Natura', 100, 255],
    ['A: Fama', 'Active', null, 255],
    ['AF: Madrid, Spain', 'A: Fama', 123, 255],
    ['AF: Munich, Germany', 'A: Fama', 456, 255],
    ['AF: Cap Town, South Africa', 'A: Fama', 789, 255],
    ['AF: Las Vegas, Nevada​', 'A: Fama', 346, 255],
    ['AF: Baton Rouge, Louisiana', 'A: Fama', 100, 255],
    ['A: Abbas', 'Active', null, 255],
    ['AA: Madrid, Spain', 'A: Abbas', 123, 255],
    ['AA: Munich, Germany', 'A: Abbas', 456, 255],
    ['AA: Cap Town, South Africa', 'A: Abbas', 789, 255],
    ['AA: Las Vegas, Nevada​', 'A: Abbas', 346, 255],
    ['AA: Baton Rouge, Louisiana', 'A: Abbas', 100, 255],
    ['A: Aliqui', 'Active', null, 255],
    ['AAl: Madrid, Spain', 'A: Aliqui', 123, 255],
    ['AAl: Munich, Germany', 'A: Aliqui', 456, 255],
    ['AAl: Cap Town, South Africa', 'A: Aliqui', 789, 255],
    ['AAl: Las Vegas, Nevada​', 'A: Aliqui', 346, 255],
    ['AAl: Baton Rouge, Louisiana', 'A: Aliqui', 100, 255],
    ['A: Victoia', 'Active', null, 255],
    ['AV: Madrid, Spain', 'A: Victoia', 123, 255],
    ['AV: Munich, Germany', 'A: Victoia', 456, 255],
    ['AV: Cap Town, South Africa', 'A: Victoia', 789, 255],
    ['AV: Las Vegas, Nevada​', 'A: Victoia', 346, 255],
    ['AV: Baton Rouge, Louisiana', 'A: Victoia', 100, 255],
    ['A: Pirum', 'Active', null, 255],
    ['AP: Madrid, Spain', 'A: Pirum', 123, 255],
    ['AP: Munich, Germany', 'A: Pirum', 456, 255],
    ['AP: Cap Town, South Africa', 'A: Pirum', 789, 255],
    ['AP: Las Vegas, Nevada​', 'A: Pirum', 346, 255],
    ['AP: Baton Rouge, Louisiana', 'A: Pirum', 100, 255],
    ['A: Currus', 'Active', null, 255],
    ['AC: Madrid, Spain', 'A: Currus', 123, 255],
    ['AC: Munich, Germany', 'A: Currus', 456, 255],
    ['AC: Cap Town, South Africa', 'A: Currus', 789, 255],
    ['AC: Las Vegas, Nevada​', 'A: Currus', 346, 255],
    ['AC: Baton Rouge, Louisiana', 'A: Currus', 100, 255],



    ['O: Rural', 'Obsolete', null, 0],
    ['OR: Madrid, Spain', 'O: Rural', 123, 0],
    ['OR: Munich, Germany', 'O: Rural', 456, 0],
    ['OR: Cap Town, South Africa', 'O: Rural', 789, 0],
    ['OR: Las Vegas, Nevada​', 'O: Rural', 346, 0],
    ['OR: Baton Rouge, Louisiana', 'O: Rural', 100, 0],
    ['O: Natura', 'Obsolete', null, 0],
    ['ON: Madrid, Spain', 'O: Natura', 123, 0],
    ['ON: Munich, Germany', 'O: Natura', 456, 0],
    ['ON: Cap Town, South Africa', 'O: Natura', 789, 0],
    ['ON: Las Vegas, Nevada​', 'O: Natura', 346, 0],
    ['ON: Baton Rouge, Louisiana', 'O: Natura', 100, 0],
    ['O: Fama', 'Obsolete', null, 0],
    ['OF: Madrid, Spain', 'O: Fama', 123, 0],
    ['OF: Munich, Germany', 'O: Fama', 456, 0],
    ['OF: Cap Town, South Africa', 'O: Fama', 789, 0],
    ['OF: Las Vegas, Nevada​', 'O: Fama', 346, 0],
    ['OF: Baton Rouge, Louisiana', 'O: Fama', 100, 0],
    ['O: Abbas', 'Obsolete', null, 0],
    ['OA: Madrid, Spain', 'O: Abbas', 123, 0],
    ['OA: Munich, Germany', 'O: Abbas', 456, 0],
    ['OA: Cap Town, South Africa', 'O: Abbas', 789, 0],
    ['OA: Las Vegas, Nevada​', 'O: Abbas', 346, 0],
    ['OA: Baton Rouge, Louisiana', 'O: Abbas', 100, 0],
    ['O: Aliqui', 'Obsolete', null, 0],
    ['OAl: Madrid, Spain', 'O: Aliqui', 123, 0],
    ['OAl: Munich, Germany', 'O: Aliqui', 456, 0],
    ['OAl: Cap Town, South Africa', 'O: Aliqui', 789, 0],
    ['OAl: Las Vegas, Nevada​', 'O: Aliqui', 346, 0],
    ['OAl: Baton Rouge, Louisiana', 'O: Aliqui', 100, 0],
    ['O: Victoia', 'Obsolete', null, 0],
    ['OV: Madrid, Spain', 'O: Victoia', 123, 0],
    ['OV: Munich, Germany', 'O: Victoia', 456, 0],
    ['OV: Cap Town, South Africa', 'O: Victoia', 789, 0],
    ['OV: Las Vegas, Nevada​', 'O: Victoia', 346, 0],
    ['OV: Baton Rouge, Louisiana', 'O: Victoia', 100, 0],
    ['O: Pirum', 'Obsolete', null, 0],
    ['OP: Madrid, Spain', 'O: Pirum', 123, 0],
    ['OP: Munich, Germany', 'O: Pirum', 456, 0],
    ['OP: Cap Town, South Africa', 'O: Pirum', 789, 0],
    ['OP: Las Vegas, Nevada​', 'O: Pirum', 346, 0],
    ['OP: Baton Rouge, Louisiana', 'O: Pirum', 100, 0],
    ['O: Currus', 'Obsolete', null, 0],
    ['OC: Madrid, Spain', 'O: Currus', 123, 0],
    ['OC: Munich, Germany', 'O: Currus', 456, 0],
    ['OC: Cap Town, South Africa', 'O: Currus', 789, 0],
    ['OC: Las Vegas, Nevada​', 'O: Currus', 346, 0],
    ['OC: Baton Rouge, Louisiana', 'O: Currus', 100, 0],
]


let data1_1=[

    [
        'Brand',
        'Total Units',
        'Avg. Unit Cost',
        'Total Cost',
        'Six Months Projected Demand',
        'Six Months History Demand',
    ],
    
    ['Inventory By Status', null, 0, 0, 0, 0],
    ['Excess', 987, 0, 0, 0, 0],
    ['Slow Moving', 987, 0, 0, 0, 0],
    ['Active', 987, 0, 0, 0, 0],
    ['Obsolete', 987, 0, 0, 0, 0],
    
    
    
    ['E: Rural', 987, 10, 0, 0, 0],
    ['Excess Rural: Madrid, Spain', 123, 10, 0, 0, 0],
    ['Excess Rural: Munich, Germany', 456, 10, 0, 0, 0],
    ['Excess Rural: Cap Town, South Africa', 789, 10, 0, 0, 0],
    ['Excess Rural: Las Vegas, Nevada​', 346, 10, 0, 0, 0],
    ['Excess Rural: Baton Rouge, Louisiana', 100, 10, 0, 0, 0],
    ['E: Natura', 987, 10, 0, 0, 0],
    ['Excess Natura: Madrid, Spain', 123, 10, 0, 0, 0],
    ['Excess Natura: Munich, Germany', 456, 10, 0, 0, 0],
    ['Excess Natura: Cap Town, South Africa', 789, 10, 0, 0, 0],
    ['Excess Natura: Las Vegas, Nevada​', 346, 10, 0, 0, 0],
    ['Excess Natura: Baton Rouge, Louisiana', 100, 10, 0, 0, 0],
    ['E: Fama', 987, 10, 0, 0, 0],
    ['Excess Fama: Madrid, Spain', 123, 10, 0, 0, 0],
    ['Excess Fama: Munich, Germany', 456, 10, 0, 0, 0],
    ['Excess Fama: Cap Town, South Africa', 789, 10, 0, 0, 0],
    ['Excess Fama: Las Vegas, Nevada​', 346, 10, 0, 0, 0],
    ['Excess Fama: Baton Rouge, Louisiana', 100, 10, 0, 0, 0],
    ['E: Abbas', 987, 10, 0, 0, 0],
    ['Excess Abbas: Madrid, Spain', 123, 10, 0, 0, 0],
    ['Excess Abbas: Munich, Germany', 456, 10, 0, 0, 0],
    ['Excess Abbas: Cap Town, South Africa', 789, 10, 0, 0, 0],
    ['Excess Abbas: Las Vegas, Nevada​', 346, 10, 0, 0, 0],
    ['Excess Abbas: Baton Rouge, Louisiana', 100, 10, 0, 0, 0],
    ['E: Aliqui', 987, 10, 0, 0, 0],
    ['Excess Aliqui: Madrid, Spain', 123, 10, 0, 0, 0],
    ['Excess Aliqui: Munich, Germany', 456, 10, 0, 0, 0],
    ['Excess Aliqui: Cap Town, South Africa', 789, 10, 0, 0, 0],
    ['Excess Aliqui: Las Vegas, Nevada​', 346, 10, 0, 0, 0],
    ['Excess Aliqui: Baton Rouge, Louisiana', 100, 10, 0, 0, 0],
    ['E: Victoia', 987, 10, 0, 0, 0],
    ['Excess Victoia: Madrid, Spain', 123, 10, 0, 0, 0],
    ['Excess Victoia: Munich, Germany', 456, 10, 0, 0, 0],
    ['Excess Victoia: Cap Town, South Africa', 789, 10, 0, 0, 0],
    ['Excess Victoia: Las Vegas, Nevada​', 346, 10, 0, 0, 0],
    ['Excess Victoia: Baton Rouge, Louisiana', 100, 10, 0, 0, 0],
    ['E: Pirum', 987, 10, 0, 0, 0],
    ['Excess Pirum: Madrid, Spain', 123, 10, 0, 0, 0],
    ['Excess Pirum: Munich, Germany', 456, 10, 0, 0, 0],
    ['Excess Pirum: Cap Town, South Africa', 789, 10, 0, 0, 0],
    ['Excess Pirum: Las Vegas, Nevada​', 346, 10, 0, 0, 0],
    ['Excess Pirum: Baton Rouge, Louisiana', 100, 10, 0, 0, 0],
    ['E: Currus', 987, 10, 0, 0, 0],
    ['Excess Currus: Madrid, Spain', 123, 10, 0, 0, 0],
    ['Excess Currus: Munich, Germany', 456, 10, 0, 0, 0],
    ['Excess Currus: Cap Town, South Africa', 789, 10, 0, 0, 0],
    ['Excess Currus: Las Vegas, Nevada​', 346, 10, 0, 0, 0],
    ['Excess Currus: Baton Rouge, Louisiana', 100, 10, 0, 0, 0],
    
    
    
    
    ['SM: Rural', 987, -255, 0, 0, 0],
    ['SMR: Madrid, Spain', 123, -255, 0, 0, 0],
    ['SMR: Munich, Germany', 456, -255, 0, 0, 0],
    ['SMR: Cap Town, South Africa', 234, -255, 0, 0, 0],
    ['SMR: Las Vegas, Nevada', 321, -255, 0, 0, 0],
    ['SMR: Baton Rouge, Louisiana', 542, -255, 0, 0, 0],
    ['SM: Aliqui', 987, -255, 0, 0, 0],
    ['SMAl: Madrid, Spain', 123, -255, 0, 0, 0],
    ['SMAl: Munich, Germany', 456, -255, 0, 0, 0],
    ['SMAl: Cap Town, South Africa', 234, -255, 0, 0, 0],
    ['SMAl: Las Vegas, Nevada', 321, -255, 0, 0, 0],
    ['SMAl: Baton Rouge, Louisiana', 542, -255, 0, 0, 0],
    ['SM: Pirum',  987, -255, 0, 0, 0],
    ['SMP: Madrid, Spain', 123, -255, 0, 0, 0],
    ['SMP: Munich, Germany', 456, -255, 0, 0, 0],
    ['SMP: Cap Town, South Africa', 234, -255, 0, 0, 0],
    ['SMP: Las Vegas, Nevada', 321, -255, 0, 0, 0],
    ['SMP: Baton Rouge, Louisiana', 542, -255, 0, 0, 0],
    ['SM: Quibus', 987, -255, 0, 0, 0],
    ['SMQ: Madrid, Spain', 123, -255, 0, 0, 0],
    ['SMQ: Munich, Germany', 456, -255, 0, 0, 0],
    ['SMQ: Cap Town, South Africa', 234, -255, 0, 0, 0],
    ['SMQ: Las Vegas, Nevada', 321, -255, 0, 0, 0],
    ['SMQ: Baton Rouge, Louisiana', 542, -255, 0, 0, 0],
    ['SM: Currus', 987, -255, 0, 0, 0],
    ['SMC: Madrid, Spain', 123, -255, 0, 0, 0],
    ['SMC: Munich, Germany', 456, -255, 0, 0, 0],
    ['SMC: Cap Town, South Africa', 234, -255, 0, 0, 0],
    ['SMC: Las Vegas, Nevada', 321, -255, 0, 0, 0],
    ['SMC: Baton Rouge, Louisiana', 542, -255, 0, 0, 0],
    ['SM: Fama', 987, -255, 0, 0, 0],
    ['SMF: Madrid, Spain', 123, -255, 0, 0, 0],
    ['SMF: Munich, Germany', 456, -255, 0, 0, 0],
    ['SMF: Cap Town, South Africa', 234, -255, 0, 0, 0],
    ['SMF: Las Vegas, Nevada', 321, -255, 0, 0, 0],
    ['SMF: Baton Rouge, Louisiana', 542, -255, 0, 0, 0],
    ['SM: Natura', 3348, -255, 0, 0, 0],
    ['SMN: Madrid, Spain', 123, -255, 0, 0, 0],
    ['SMN: Munich, Germany', 456, -255, 0, 0, 0],
    ['SMN: Cap Town, South Africa', 234, -255, 0, 0, 0],
    ['SMN: Las Vegas, Nevada', 321, -255, 0, 0, 0],
    ['SMN: Baton Rouge, Louisiana', 542, -255, 0, 0, 0],
    
    
    
    ['A: Rural', 987, 10, 0, 0, 0],
    ['AR: Madrid, Spain', 123, 10, 0, 0, 0],
    ['AR: Munich, Germany', 456, 10, 0, 0, 0],
    ['AR: Cap Town, South Africa', 789, 10, 0, 0, 0],
    ['AR: Las Vegas, Nevada​', 346, 10, 0, 0, 0],
    ['AR: Baton Rouge, Louisiana', 100, 10, 0, 0, 0],
    ['A: Natura', 987, 10, 0, 0, 0],
    ['AN: Madrid, Spain', 123, 10, 0, 0, 0],
    ['AN: Munich, Germany', 456, 10, 0, 0, 0],
    ['AN: Cap Town, South Africa', 789, 10, 0, 0, 0],
    ['AN: Las Vegas, Nevada​', 346, 10, 0, 0, 0],
    ['AN: Baton Rouge, Louisiana', 100, 10, 0, 0, 0],
    ['A: Fama', 987, 10, 0, 0, 0],
    ['AF: Madrid, Spain', 123, 10, 0, 0, 0],
    ['AF: Munich, Germany', 456, 10, 0, 0, 0],
    ['AF: Cap Town, South Africa', 789, 10, 0, 0, 0],
    ['AF: Las Vegas, Nevada​', 346, 10, 0, 0, 0],
    ['AF: Baton Rouge, Louisiana', 100, 10, 0, 0, 0],
    ['A: Abbas', 987, 10, 0, 0, 0],
    ['AA: Madrid, Spain', 123, 10, 0, 0, 0],
    ['AA: Munich, Germany', 456, 10, 0, 0, 0],
    ['AA: Cap Town, South Africa', 789, 10, 0, 0, 0],
    ['AA: Las Vegas, Nevada​', 346, 10, 0, 0, 0],
    ['AA: Baton Rouge, Louisiana', 100, 10, 0, 0, 0],
    ['A: Aliqui', 987, 10, 0, 0, 0],
    ['AAl: Madrid, Spain', 123, 10, 0, 0, 0],
    ['AAl: Munich, Germany', 456, 10, 0, 0, 0],
    ['AAl: Cap Town, South Africa', 789, 10, 0, 0, 0],
    ['AAl: Las Vegas, Nevada​', 346, 10, 0, 0, 0],
    ['AAl: Baton Rouge, Louisiana', 100, 10, 0, 0, 0],
    ['A: Victoia', 987, 10, 0, 0, 0],
    ['AV: Madrid, Spain', 123, 10, 0, 0, 0],
    ['AV: Munich, Germany', 456, 10, 0, 0, 0],
    ['AV: Cap Town, South Africa', 789, 10, 0, 0, 0],
    ['AV: Las Vegas, Nevada​', 346, 10, 0, 0, 0],
    ['AV: Baton Rouge, Louisiana', 100, 10, 0, 0, 0],
    ['A: Pirum', 987, 10, 0, 0, 0],
    ['AP: Madrid, Spain', 123, 10, 0, 0, 0],
    ['AP: Munich, Germany', 456, 10, 0, 0, 0],
    ['AP: Cap Town, South Africa', 789, 10, 0, 0, 0],
    ['AP: Las Vegas, Nevada​', 346, 10, 0, 0, 0],
    ['AP: Baton Rouge, Louisiana', 100, 10, 0, 0, 0],
    ['A: Currus', 987, 10, 0, 0, 0],
    ['AC: Madrid, Spain', 123, 10, 0, 0, 0],
    ['AC: Munich, Germany', 456, 10, 0, 0, 0],
    ['AC: Cap Town, South Africa', 789, 10, 0, 0, 0],
    ['AC: Las Vegas, Nevada​', 346, 10, 0, 0, 0],
    ['AC: Baton Rouge, Louisiana', 100, 10, 0, 0, 0],
    
    
    
    ['O: Rural', 987, 10, 0, 0, 0],
    ['OR: Madrid, Spain', 123, 10, 0, 0, 0],
    ['OR: Munich, Germany', 456, 10, 0, 0, 0],
    ['OR: Cap Town, South Africa', 789, 10, 0, 0, 0],
    ['OR: Las Vegas, Nevada​', 346, 10, 0, 0, 0],
    ['OR: Baton Rouge, Louisiana', 100, 10, 0, 0, 0],
    ['O: Natura', 987, 10, 0, 0, 0],
    ['ON: Madrid, Spain', 123, 10, 0, 0, 0],
    ['ON: Munich, Germany', 456, 10, 0, 0, 0],
    ['ON: Cap Town, South Africa', 789, 10, 0, 0, 0],
    ['ON: Las Vegas, Nevada​', 346, 10, 0, 0, 0],
    ['ON: Baton Rouge, Louisiana', 100, 10, 0, 0, 0],
    ['O: Fama', 987, 10, 0, 0, 0],
    ['OF: Madrid, Spain', 123, 10, 0, 0, 0],
    ['OF: Munich, Germany', 456, 10, 0, 0, 0],
    ['OF: Cap Town, South Africa', 789, 10, 0, 0, 0],
    ['OF: Las Vegas, Nevada​', 346, 10, 0, 0, 0],
    ['OF: Baton Rouge, Louisiana', 100, 10, 0, 0, 0],
    ['O: Abbas', 987, 10, 0, 0, 0],
    ['OA: Madrid, Spain', 123, 10, 0, 0, 0],
    ['OA: Munich, Germany', 456, 10, 0, 0, 0],
    ['OA: Cap Town, South Africa', 789, 10, 0, 0, 0],
    ['OA: Las Vegas, Nevada​', 346, 10, 0, 0, 0],
    ['OA: Baton Rouge, Louisiana', 100, 10, 0, 0, 0],
    ['O: Aliqui', 987, 10, 0, 0, 0],
    ['OAl: Madrid, Spain', 123, 10, 0, 0, 0],
    ['OAl: Munich, Germany', 456, 10, 0, 0, 0],
    ['OAl: Cap Town, South Africa', 789, 10, 0, 0, 0],
    ['OAl: Las Vegas, Nevada​', 346, 10, 0, 0, 0],
    ['OAl: Baton Rouge, Louisiana', 100, 10, 0, 0, 0],
    ['O: Victoia', 987, 10, 0, 0, 0],
    ['OV: Madrid, Spain', 123, 10, 0, 0, 0],
    ['OV: Munich, Germany', 456, 10, 0, 0, 0],
    ['OV: Cap Town, South Africa', 789, 10, 0, 0, 0],
    ['OV: Las Vegas, Nevada​', 346, 10, 0, 0, 0],
    ['OV: Baton Rouge, Louisiana', 100, 10, 0, 0, 0],
    ['O: Pirum', 987, 10, 0, 0, 0],
    ['OP: Madrid, Spain', 123, 10, 0, 0, 0],
    ['OP: Munich, Germany', 456, 10, 0, 0, 0],
    ['OP: Cap Town, South Africa', 789, 10, 0, 0, 0],
    ['OP: Las Vegas, Nevada​', 346, 10, 0, 0, 0],
    ['OP: Baton Rouge, Louisiana', 100, 10, 0, 0, 0],
    ['O: Currus', 987, 10, 0, 0, 0],
    ['OC: Madrid, Spain', 123, 10, 0, 0, 0],
    ['OC: Munich, Germany', 456, 10, 0, 0, 0],
    ['OC: Cap Town, South Africa', 789, 10, 0, 0, 0],
    ['OC: Las Vegas, Nevada​', 346, 10, 0, 0, 0],
    ['OC: Baton Rouge, Louisiana', 100, 10, 0, 0, 0],
]


let data2 = [
    [
        'Brand',
        'Parent',
        'Total Units',
        'Market increase/decrease (color)',
    ],

    ['Inventory Status', null, 0, 0],
    ['Excess', 'Inventory Status', 0, 0],
    ['Slow Moving', 'Inventory Status', 0, 0],
    ['Active', 'Inventory Status', 0, 0],
    ['Obsolete', 'Inventory Status', 0, 0],

    ['E: Rural', 'Excess', 90, 0],
    ['E: Natura', 'Excess', 60, 0],
    ['E: Fama', 'Excess', 20, 0],
    ['E: Abbas', 'Excess', 23, 0],
    ['E: Aliqui', 'Excess', 70, 0],
    ['E: Victoia', 'Excess', 11, 0],
    ['E: Pirum', 'Excess', 10, 0],
    ['E: Currus', 'Excess', 6, 0],
    


    ['SM: Rural', 'Slow Moving', 35, -255],
    ['SM: Aliqui', 'Slow Moving', 20, -255],
    ['SM: Pirum', 'Slow Moving', 73, -255],
    ['SM: Quibus', 'Slow Moving', 68, -255],
    ['SM: Currus', 'Slow Moving', 10, -255],
    ['SM: Fama', 'Slow Moving', 91, -255],
    ['SM: Natura', 'Slow Moving', 20, -255],



    ['A: Quibus', 'Active', 171, 125],
    ['A: Natura', 'Active', 100, 125],
    ['A: Abbas', 'Active', 13, 125],
    ['A: Pirum', 'Active', 48, 125],
    ['A: Currus', 'Active',62, 125],
    ['A: Aliqui', 'Active', 27, 125],



    ['O: Pomum', 'Obsolete', 30, 255],
    ['O: Natura', 'Obsolete', 4, 255],
    ['O: Aliqui', 'Obsolete', 2, 255],
    ['O: Salvus', 'Obsolete', 10, 255],
    ['O: Currus', 'Obsolete', 15, 255],
]

let data2_2=[

    [
        'Brand',
        'Total Units',
        'Avg. Unit Cost',
        'Total Cost',
        'Six Months Projected Demand',
        'Six Months History Demand',
    ],

    ['Inventory By Status',0, 0, 0, 0,0],
    ['Excess','17,302', '386', '52,058,202', '0','0'],
    ['Slow Moving','22,320', '255', '39,885,804', '5,400','0'],
    ['Active','11,607', '248', '17,282,823', '11,102','36,094'],
    ['Obsolete','9,201', '146', '9,237,504', 0,0],

    ['E: Rural', '1,557', "401", '6,938,102', 0, 0],
    ['E: Natura', '3,460', '329', '5,692,358', 0, 0],
    ['E: Fama',  '1,730', '375', '6,488,250', 0, 0],
    ['E: Abbas', '2,076', '310', '5,363,620', 0, 0],
    ['E: Aliqui',  '2,595', "298", '5,155,996', 0, 0],
    ['E: Victoia', '1,730', '390', '6,747,780', 0, 0],
    ['E: Pirum',  '3,287', '360', '6,228,720', 0, 0],
    ['E: Currus',  '865', '4688', '8,443,376', 0, 0],
    


    ['SM: Rural', '2,455', '270', '6,026,400', 0, 0],
    ['SM: Aliqui',  '2,902', '265', '5,194,800', 0, 0],
    ['SM: Pirum',   '2,323', '245',' 5,468,400', 0, 0],
    ['SM: Quibus',  '4,687', '250', '5,580,000', 0, 0],
    ['SM: Currus', '1,116', '257', '5,736,240', 0, 0],
    ['SM: Fama', '5,580', '255', '5,691,600', 0, 0],
    ['SM: Natura',  '3,348', '245', '5,468,400', 0, 0],



    ['A: Quibus',  '2,595', '368', '6,367,136', 0],
    ['A: Natura', '1,730',' 368', '6,367,136', 0],
    ['A: Abbas',  '1,557', '368', '6,367,136', 0],
    ['A: Pirum',  '1,730', '368', '6,367,136', 0],
    ['A: Currus',  '2,768','368',' 6,367,136', 0],
    ['A: Aliqui', '6,921', '368',' 6,367,136', 0],



    ['O: Pomum',   '3,608', '146', '1,317,066', 0, 0],
    ['O: Natura', '1,804', '163', '1,470,423', 0, 0],
    ['O: Aliqui', '2,255', '160', '1,443,360', 0, 0],
    ['O: Salvus',  '902', '100', '902,100', 0, 0],
    ['O: Currus',  '451', '150', '1,353,150', 0, 0],
]

let data3 = [
    [
        'Brand',
        'Parent',
        'Total Units',
        'Market increase/decrease (color)',
    ],

    ['Inventory Status', null, 0, 0],
    ['Excess', 'Inventory Status', 0, 0],
    ['Slow Moving', 'Inventory Status', 0, 0],
    ['Active', 'Inventory Status', 0, 0],
    ['Obsolete', 'Inventory Status', 0, 0],

    ['E: Rural', 'Excess', 90, 0],
    ['E: Natura', 'Excess', 60, 0],
    ['E: Fama', 'Excess', 20, 0],
    ['E: Abbas', 'Excess', 23, 0],
    ['E: Aliqui', 'Excess', 70, 0],
    ['E: Victoia', 'Excess', 11, 0],
    ['E: Pirum', 'Excess', 10, 0],
    ['E: Currus', 'Excess', 6, 0],
    


    ['SM: Rural', 'Slow Moving', 35, -255],
    ['SM: Aliqui', 'Slow Moving', 20, -255],
    ['SM: Pirum', 'Slow Moving', 73, -255],
    ['SM: Quibus', 'Slow Moving', 68, -255],
    ['SM: Currus', 'Slow Moving', 10, -255],
    ['SM: Fama', 'Slow Moving', 91, -255],
    ['SM: Natura', 'Slow Moving', 20, -255],



    ['A: Quibus', 'Active', 171, 125],
    ['A: Natura', 'Active', 100, 125],
    ['A: Abbas', 'Active', 13, 125],
    ['A: Pirum', 'Active', 48, 125],
    ['A: Currus', 'Active',62, 125],
    ['A: Aliqui', 'Active', 27, 125],



    ['O: Pomum', 'Obsolete', 30, 255],
    ['O: Natura', 'Obsolete', 4, 255],
    ['O: Aliqui', 'Obsolete', 2, 255],
    ['O: Salvus', 'Obsolete', 10, 255],
    ['O: Currus', 'Obsolete', 15, 255],
]

let data3_3=[

    [
        'Brand',
        'Total Units',
        'Avg. Unit Cost',
        'Total Cost',
        'Six Months Projected Demand',
        'Six Months History Demand',
    ],

    ['Inventory By Status',0, 0, 0, 0,0],
    ['Excess','17,302', '386', '52,058,202', '0','0'],
    ['Slow Moving','22,320', '255', '39,885,804', '5,400','0'],
    ['Active','11,607', '248', '17,282,823', '11,102','36,094'],
    ['Obsolete','9,201', '146', '9,237,504', 0,0],

    ['E: Rural', '1,557', "401", '6,938,102', 0, 0],
    ['E: Natura', '3,460', '329', '5,692,358', 0, 0],
    ['E: Fama',  '1,730', '375', '6,488,250', 0, 0],
    ['E: Abbas', '2,076', '310', '5,363,620', 0, 0],
    ['E: Aliqui',  '2,595', "298", '5,155,996', 0, 0],
    ['E: Victoia', '1,730', '390', '6,747,780', 0, 0],
    ['E: Pirum',  '3,287', '360', '6,228,720', 0, 0],
    ['E: Currus',  '865', '4688', '8,443,376', 0, 0],
    


    ['SM: Rural', '2,455', '270', '6,026,400', 0, 0],
    ['SM: Aliqui',  '2,902', '265', '5,194,800', 0, 0],
    ['SM: Pirum',   '2,323', '245',' 5,468,400', 0, 0],
    ['SM: Quibus',  '4,687', '250', '5,580,000', 0, 0],
    ['SM: Currus', '1,116', '257', '5,736,240', 0, 0],
    ['SM: Fama', '5,580', '255', '5,691,600', 0, 0],
    ['SM: Natura',  '3,348', '245', '5,468,400', 0, 0],



    ['A: Quibus',  '2,595', '368', '6,367,136', 0],
    ['A: Natura', '1,730',' 368', '6,367,136', 0],
    ['A: Abbas',  '1,557', '368', '6,367,136', 0],
    ['A: Pirum',  '1,730', '368', '6,367,136', 0],
    ['A: Currus',  '2,768','368',' 6,367,136', 0],
    ['A: Aliqui', '6,921', '368',' 6,367,136', 0],



    ['O: Pomum',   '3,608', '146', '1,317,066', 0, 0],
    ['O: Natura', '1,804', '163', '1,470,423', 0, 0],
    ['O: Aliqui', '2,255', '160', '1,443,360', 0, 0],
    ['O: Salvus',  '902', '100', '902,100', 0, 0],
    ['O: Currus',  '451', '150', '1,353,150', 0, 0],
]

let data4 = [
    [
        'Brand',
        'Parent',
        'Total Units',
        'Market increase/decrease (color)',
    ],

    ['Inventory Status', null, 0, 0],
    ['Excess', 'Inventory Status', 0, 0],
    ['Slow Moving', 'Inventory Status', 0, 0],
    ['Active', 'Inventory Status', 0, 0],
    ['Obsolete', 'Inventory Status', 0, 0],

    ['E: Rural', 'Excess', 90, 0],
    ['E: Natura', 'Excess', 60, 0],
    ['E: Fama', 'Excess', 20, 0],
    ['E: Abbas', 'Excess', 23, 0],
    ['E: Aliqui', 'Excess', 70, 0],
    ['E: Victoia', 'Excess', 11, 0],
    ['E: Pirum', 'Excess', 10, 0],
    ['E: Currus', 'Excess', 6, 0],
    


    ['SM: Rural', 'Slow Moving', 35, -255],
    ['SM: Aliqui', 'Slow Moving', 20, -255],
    ['SM: Pirum', 'Slow Moving', 73, -255],
    ['SM: Quibus', 'Slow Moving', 68, -255],
    ['SM: Currus', 'Slow Moving', 10, -255],
    ['SM: Fama', 'Slow Moving', 91, -255],
    ['SM: Natura', 'Slow Moving', 20, -255],



    ['A: Quibus', 'Active', 171, 125],
    ['A: Natura', 'Active', 100, 125],
    ['A: Abbas', 'Active', 13, 125],
    ['A: Pirum', 'Active', 48, 125],
    ['A: Currus', 'Active',62, 125],
    ['A: Aliqui', 'Active', 27, 125],



    ['O: Pomum', 'Obsolete', 30, 255],
    ['O: Natura', 'Obsolete', 4, 255],
    ['O: Aliqui', 'Obsolete', 2, 255],
    ['O: Salvus', 'Obsolete', 10, 255],
    ['O: Currus', 'Obsolete', 15, 255],
]

let data4_4=[

    [
        'Brand',
        'Total Units',
        'Avg. Unit Cost',
        'Total Cost',
        'Six Months Projected Demand',
        'Six Months History Demand',
    ],

    ['Inventory By Status',0, 0, 0, 0,0],
    ['Excess','17,302', '386', '52,058,202', '0','0'],
    ['Slow Moving','22,320', '255', '39,885,804', '5,400','0'],
    ['Active','11,607', '248', '17,282,823', '11,102','36,094'],
    ['Obsolete','9,201', '146', '9,237,504', 0,0],

    ['E: Rural', '1,557', "401", '6,938,102', 0, 0],
    ['E: Natura', '3,460', '329', '5,692,358', 0, 0],
    ['E: Fama',  '1,730', '375', '6,488,250', 0, 0],
    ['E: Abbas', '2,076', '310', '5,363,620', 0, 0],
    ['E: Aliqui',  '2,595', "298", '5,155,996', 0, 0],
    ['E: Victoia', '1,730', '390', '6,747,780', 0, 0],
    ['E: Pirum',  '3,287', '360', '6,228,720', 0, 0],
    ['E: Currus',  '865', '4688', '8,443,376', 0, 0],
    


    ['SM: Rural', '2,455', '270', '6,026,400', 0, 0],
    ['SM: Aliqui',  '2,902', '265', '5,194,800', 0, 0],
    ['SM: Pirum',   '2,323', '245',' 5,468,400', 0, 0],
    ['SM: Quibus',  '4,687', '250', '5,580,000', 0, 0],
    ['SM: Currus', '1,116', '257', '5,736,240', 0, 0],
    ['SM: Fama', '5,580', '255', '5,691,600', 0, 0],
    ['SM: Natura',  '3,348', '245', '5,468,400', 0, 0],



    ['A: Quibus',  '2,595', '368', '6,367,136', 0],
    ['A: Natura', '1,730',' 368', '6,367,136', 0],
    ['A: Abbas',  '1,557', '368', '6,367,136', 0],
    ['A: Pirum',  '1,730', '368', '6,367,136', 0],
    ['A: Currus',  '2,768','368',' 6,367,136', 0],
    ['A: Aliqui', '6,921', '368',' 6,367,136', 0],



    ['O: Pomum',   '3,608', '146', '1,317,066', 0, 0],
    ['O: Natura', '1,804', '163', '1,470,423', 0, 0],
    ['O: Aliqui', '2,255', '160', '1,443,360', 0, 0],
    ['O: Salvus',  '902', '100', '902,100', 0, 0],
    ['O: Currus',  '451', '150', '1,353,150', 0, 0],
]

let data5 = [
    [
        'Brand',
        'Parent',
        'Total Units',
        'Market increase/decrease (color)',
    ],

    ['Inventory Status', null, 0, 0],
    ['Excess', 'Inventory Status', 0, 0],
    ['Slow Moving', 'Inventory Status', 0, 0],
    ['Active', 'Inventory Status', 0, 0],
    ['Obsolete', 'Inventory Status', 0, 0],

    ['E: Rural', 'Excess', 90, 0],
    ['E: Natura', 'Excess', 60, 0],
    ['E: Fama', 'Excess', 20, 0],
    ['E: Abbas', 'Excess', 23, 0],
    ['E: Aliqui', 'Excess', 70, 0],
    ['E: Victoia', 'Excess', 11, 0],
    ['E: Pirum', 'Excess', 10, 0],
    ['E: Currus', 'Excess', 6, 0],
    


    ['SM: Rural', 'Slow Moving', 35, -255],
    ['SM: Aliqui', 'Slow Moving', 20, -255],
    ['SM: Pirum', 'Slow Moving', 73, -255],
    ['SM: Quibus', 'Slow Moving', 68, -255],
    ['SM: Currus', 'Slow Moving', 10, -255],
    ['SM: Fama', 'Slow Moving', 91, -255],
    ['SM: Natura', 'Slow Moving', 20, -255],



    ['A: Quibus', 'Active', 171, 125],
    ['A: Natura', 'Active', 100, 125],
    ['A: Abbas', 'Active', 13, 125],
    ['A: Pirum', 'Active', 48, 125],
    ['A: Currus', 'Active',62, 125],
    ['A: Aliqui', 'Active', 27, 125],



    ['O: Pomum', 'Obsolete', 30, 255],
    ['O: Natura', 'Obsolete', 4, 255],
    ['O: Aliqui', 'Obsolete', 2, 255],
    ['O: Salvus', 'Obsolete', 10, 255],
    ['O: Currus', 'Obsolete', 15, 255],
]

let data5_5=[

    [
        'Brand',
        'Total Units',
        'Avg. Unit Cost',
        'Total Cost',
        'Six Months Projected Demand',
        'Six Months History Demand',
    ],

    ['Inventory By Status',0, 0, 0, 0,0],
    ['Excess','17,302', '386', '52,058,202', '0','0'],
    ['Slow Moving','22,320', '255', '39,885,804', '5,400','0'],
    ['Active','11,607', '248', '17,282,823', '11,102','36,094'],
    ['Obsolete','9,201', '146', '9,237,504', 0,0],

    ['E: Rural', '1,557', "401", '6,938,102', 0, 0],
    ['E: Natura', '3,460', '329', '5,692,358', 0, 0],
    ['E: Fama',  '1,730', '375', '6,488,250', 0, 0],
    ['E: Abbas', '2,076', '310', '5,363,620', 0, 0],
    ['E: Aliqui',  '2,595', "298", '5,155,996', 0, 0],
    ['E: Victoia', '1,730', '390', '6,747,780', 0, 0],
    ['E: Pirum',  '3,287', '360', '6,228,720', 0, 0],
    ['E: Currus',  '865', '4688', '8,443,376', 0, 0],
    


    ['SM: Rural', '2,455', '270', '6,026,400', 0, 0],
    ['SM: Aliqui',  '2,902', '265', '5,194,800', 0, 0],
    ['SM: Pirum',   '2,323', '245',' 5,468,400', 0, 0],
    ['SM: Quibus',  '4,687', '250', '5,580,000', 0, 0],
    ['SM: Currus', '1,116', '257', '5,736,240', 0, 0],
    ['SM: Fama', '5,580', '255', '5,691,600', 0, 0],
    ['SM: Natura',  '3,348', '245', '5,468,400', 0, 0],



    ['A: Quibus',  '2,595', '368', '6,367,136', 0],
    ['A: Natura', '1,730',' 368', '6,367,136', 0],
    ['A: Abbas',  '1,557', '368', '6,367,136', 0],
    ['A: Pirum',  '1,730', '368', '6,367,136', 0],
    ['A: Currus',  '2,768','368',' 6,367,136', 0],
    ['A: Aliqui', '6,921', '368',' 6,367,136', 0],



    ['O: Pomum',   '3,608', '146', '1,317,066', 0, 0],
    ['O: Natura', '1,804', '163', '1,470,423', 0, 0],
    ['O: Aliqui', '2,255', '160', '1,443,360', 0, 0],
    ['O: Salvus',  '902', '100', '902,100', 0, 0],
    ['O: Currus',  '451', '150', '1,353,150', 0, 0],
]


let dataNumber = 1;
let data=null;
let tt_data=null;


const TreeMap1 = () =>  (
    
<MyContext.Consumer>
    { 
    (context) => {
            dataNumber = context.state.dataNumber;
            if(dataNumber === 1)
            {
                data=data1;
                tt_data=data1_1;
            }
            else if (dataNumber === 2) {
                data=data2;
                tt_data=data2_2;
            }
            else if (dataNumber === 3) {
                data=data3;
                tt_data=data3_3;
            }
            else if (dataNumber === 4) {
                data=data4;
                tt_data=data4_4
            }
            else {
                data=data5;
                tt_data=data5_5
            }
            
    return (
        <div>
            <Chart
                width={'100%'}
                height={'280px'}
                chartType="TreeMap"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                    highlightOnMouseOver: true,
                    maxDepth: 1,
                    maxPostDepth: 1,
                    minHighlightColor: '#8c6bb1',
                    midHighlightColor: '#9ebcda',
                    maxHighlightColor: '#edf8fb',
                    minColor: '#77f0d2',
                    midColor: '#f5ce22',
                    maxColor: '#19AADE',
                    headerHeight: 25,
                    fontColor: 'black',
                    showScale: false,
                    useWeightedAverageForAggregation: true,
                    headerColor: '#ccc',
/* [
        'Brand',
        'Total Units',
        'Avg. Unit Cost',
        'Total Cost',
        'Six Months Projected Demand',
        'Six Months History Demand',
    ], */

                    generateTooltip: (row, size, value) => {
                        
                       /*  console.log(row);
                        console.log(row[0]); */
                        row = row + 1
                        return (
                            '<div class="tooltip_div" style="position:relative; background-color:white; box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2); border: 1px solid #ccc;">' +
                            '<div style="padding: 2px 16px ;">' +
                            '<h4 style="color:#05bbac;">'+tt_data[row][0]+'</h4>' +
                            '<span>Total Units : '+ tt_data[row][1] +'</span> <br>' +
                            '<span>Avg. Unit Cost : $'+tt_data[row][2] +'</span> <br>' +
                            '<span>Total Cost : $'+ tt_data[row][3]  +'</span> <br>' +
                            '<span>Six Months Projected Demand : '+tt_data[row][4] +'</span> <br>' +
                            '<span>Six Months History Demand : '+tt_data[row][5] +'</span> <br>' +
                            '</div>' +
                            '</div>'
                        )
                    },
                }}
                rootProps={{ 'data-testid': '3' }}
            />
        </div>
    )}}
    </MyContext.Consumer>
)

export default TreeMap1
