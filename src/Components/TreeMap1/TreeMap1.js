import { Chart } from "react-google-charts";
import React from 'react';
import { Card } from 'react-bootstrap';
import context from "react-bootstrap/esm/AccordionContext";
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
    ['Excess', 'Inventory By Status', 0, 0],
    ['Slow Moving', 'Inventory By Status', 0, 0],
    ['Active', 'Inventory By Status', 0, 0],
    ['Obsolete', 'Inventory By Status', 0, 0],

    ['E_Rural', 'Excess', 1557, 10],
    ['E_Natura', 'Excess', 3460, 10],
    ['E_Fama', 'Excess', 1730, 10],
    ['E_Abbas', 'Excess', 2076, 10],
    ['E_Aliqui', 'Excess', 2595, 10],
    ['E_Victoia', 'Excess', 1730, 10],
    ['E_Pirum', 'Excess', 3287, 10],
    ['E_Currus', 'Excess', 865, 10],
    


    ['SM_Rural', 'Slow Moving', 2455, -255],
    ['SM_Aliqui', 'Slow Moving', 2902, -255],
    ['SM_Pirum', 'Slow Moving',  2323, -255],
    ['SM_Quibus', 'Slow Moving', 4687, -255],
    ['SM_Currus', 'Slow Moving', 1116, -255],
    ['SM_Fama', 'Slow Moving', 5580, -255],
    ['SM_Natura', 'Slow Moving', 3348, -255],



    ['A_Quibus', 'Active', 2595, 125],
    ['A_Natura', 'Active', 1730, 125],
    ['A_Abbas', 'Active', 1557, 125],
    ['A_Pirum', 'Active', 1730, 125],
    ['A_Currus', 'Active', 2768, 125],
    ['A_Aliqui', 'Active', 6921, 125],



    ['O_Pomum', 'Obsolete',  3608, 255],
    ['O_Natura', 'Obsolete', 1804, 255],
    ['O_Aliqui', 'Obsolete', 2255, 255],
    ['O_Salvus', 'Obsolete', 902, 255],
    ['O_Currus', 'Obsolete', 451, 255],
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

    ['Inventory By Status',0, 0, 0, 0,0],
    ['Excess','17,302', '386', '52,058,202', '0','0'],
    ['Slow Moving','22,320', '255', '39,885,804', '5,400','0'],
    ['Active','11,607', '248', '17,282,823', '11,102','36,094'],
    ['Obsolete','9,201', '146', '9,237,504', 0,0],

    ['E_Rural', '1,557', "401", '6,938,102', 0, 0],
    ['E_Natura', '3,460', '329', '5,692,358', 0, 0],
    ['E_Fama',  '1,730', '375', '6,488,250', 0, 0],
    ['E_Abbas', '2,076', '310', '5,363,620', 0, 0],
    ['E_Aliqui',  '2,595', "298", '5,155,996', 0, 0],
    ['E_Victoia', '1,730', '390', '6,747,780', 0, 0],
    ['E_Pirum',  '3,287', '360', '6,228,720', 0, 0],
    ['E_Currus',  '865', '4688', '8,443,376', 0, 0],
    


    ['SM_Rural', '2,455', '270', '6,026,400', 0, 0],
    ['SM_Aliqui',  '2,902', '265', '5,194,800', 0, 0],
    ['SM_Pirum',   '2,323', '245',' 5,468,400', 0, 0],
    ['SM_Quibus',  '4,687', '250', '5,580,000', 0, 0],
    ['SM_Currus', '1,116', '257', '5,736,240', 0, 0],
    ['SM_Fama', '5,580', '255', '5,691,600', 0, 0],
    ['SM_Natura',  '3,348', '245', '5,468,400', 0, 0],



    ['A_Quibus',  '2,595', '368', '6,367,136', 0],
    ['A_Natura', '1,730',' 368', '6,367,136', 0],
    ['A_Abbas',  '1,557', '368', '6,367,136', 0],
    ['A_Pirum',  '1,730', '368', '6,367,136', 0],
    ['A_Currus',  '2,768','368',' 6,367,136', 0],
    ['A_Aliqui', '6,921', '368',' 6,367,136', 0],



    ['O_Pomum',   '3,608', '146', '1,317,066', 0, 0],
    ['O_Natura', '1,804', '163', '1,470,423', 0, 0],
    ['O_Aliqui', '2,255', '160', '1,443,360', 0, 0],
    ['O_Salvus',  '902', '100', '902,100', 0, 0],
    ['O_Currus',  '451', '150', '1,353,150', 0, 0],
]



let data2 = [
    [
        'Location',
        'Parent',
        'Market trade volume (size)',
        'Market increase/decrease (color)',
    ],

    ['Inventory Status', null, 0, 0],
    ['Excess', 'Inventory Status', 0, 0],
    ['Slow Moving', 'Inventory Status', 0, 0],
    ['Active', 'Inventory Status', 0, 0],
    ['Obsolete', 'Inventory Status', 0, 0],

    ['E_Rural', 'Excess', 90, 10],
    ['E_Natura', 'Excess', 60, 10],
    ['E_Fama', 'Excess', 20, 10],
    ['E_Abbas', 'Excess', 23, 10],
    ['E_Aliqui', 'Excess', 70, 10],
    ['E_Victoia', 'Excess', 11, 10],
    ['E_Pirum', 'Excess', 10, 10],
    ['E_Currus', 'Excess', 6, 10],
    


    ['SM_Rural', 'Slow Moving', 35, -255],
    ['SM_Aliqui', 'Slow Moving', 20, -255],
    ['SM_Pirum', 'Slow Moving', 73, -255],
    ['SM_Quibus', 'Slow Moving', 68, -255],
    ['SM_Currus', 'Slow Moving', 10, -255],
    ['SM_Fama', 'Slow Moving', 91, -255],
    ['SM_Natura', 'Slow Moving', 20, -255],



    ['A_Quibus', 'Active', 171, 125],
    ['A_Natura', 'Active', 100, 125],
    ['A_Abbas', 'Active', 13, 125],
    ['A_Pirum', 'Active', 48, 125],
    ['A_Currus', 'Active',62, 125],
    ['A_Aliqui', 'Active', 27, 125],



    ['O_Pomum', 'Obsolete', 30, 255],
    ['O_Natura', 'Obsolete', 4, 255],
    ['O_Aliqui', 'Obsolete', 2, 255],
    ['O_Salvus', 'Obsolete', 10, 255],
    ['O_Currus', 'Obsolete', 15, 255],
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

    ['E_Rural', '1,557', "401", '6,938,102', 0, 0],
    ['E_Natura', '3,460', '329', '5,692,358', 0, 0],
    ['E_Fama',  '1,730', '375', '6,488,250', 0, 0],
    ['E_Abbas', '2,076', '310', '5,363,620', 0, 0],
    ['E_Aliqui',  '2,595', "298", '5,155,996', 0, 0],
    ['E_Victoia', '1,730', '390', '6,747,780', 0, 0],
    ['E_Pirum',  '3,287', '360', '6,228,720', 0, 0],
    ['E_Currus',  '865', '4688', '8,443,376', 0, 0],
    


    ['SM_Rural', '2,455', '270', '6,026,400', 0, 0],
    ['SM_Aliqui',  '2,902', '265', '5,194,800', 0, 0],
    ['SM_Pirum',   '2,323', '245',' 5,468,400', 0, 0],
    ['SM_Quibus',  '4,687', '250', '5,580,000', 0, 0],
    ['SM_Currus', '1,116', '257', '5,736,240', 0, 0],
    ['SM_Fama', '5,580', '255', '5,691,600', 0, 0],
    ['SM_Natura',  '3,348', '245', '5,468,400', 0, 0],



    ['A_Quibus',  '2,595', '368', '6,367,136', 0],
    ['A_Natura', '1,730',' 368', '6,367,136', 0],
    ['A_Abbas',  '1,557', '368', '6,367,136', 0],
    ['A_Pirum',  '1,730', '368', '6,367,136', 0],
    ['A_Currus',  '2,768','368',' 6,367,136', 0],
    ['A_Aliqui', '6,921', '368',' 6,367,136', 0],



    ['O_Pomum',   '3,608', '146', '1,317,066', 0, 0],
    ['O_Natura', '1,804', '163', '1,470,423', 0, 0],
    ['O_Aliqui', '2,255', '160', '1,443,360', 0, 0],
    ['O_Salvus',  '902', '100', '902,100', 0, 0],
    ['O_Currus',  '451', '150', '1,353,150', 0, 0],
]


let data3 = [
    [
        'Location',
        'Parent',
        'Market trade volume (size)',
        'Market increase/decrease (color)',
    ],

    ['Inventory Status', null, 0, 0],
    ['Excess', 'Inventory Status', 0, 0],
    ['Slow Moving', 'Inventory Status', 0, 0],
    ['Active', 'Inventory Status', 0, 0],
    ['Obsolete', 'Inventory Status', 0, 0],

    ['E_Rural', 'Excess', 100, 10],
    ['E_Natura', 'Excess', 123, 10],
    ['E_Fama', 'Excess', 87, 10],
    ['E_Abbas', 'Excess', 57, 10],
    ['E_Aliqui', 'Excess', 87, 10],
    ['E_Victoia', 'Excess', 66, 10],
    ['E_Pirum', 'Excess', 97, 10],
    ['E_Currus', 'Excess', 26, 10],
    


    ['SM_Rural', 'Slow Moving', 35, -255],
    ['SM_Aliqui', 'Slow Moving', 67, -255],
    ['SM_Pirum', 'Slow Moving', 22, -255],
    ['SM_Quibus', 'Slow Moving', 75, -255],
    ['SM_Currus', 'Slow Moving', 10, -255],
    ['SM_Fama', 'Slow Moving', 122, -255],
    ['SM_Natura', 'Slow Moving', 40, -255],



    ['A_Quibus', 'Active', 30, 125],
    ['A_Natura', 'Active', 23, 125],
    ['A_Abbas', 'Active', 12, 125],
    ['A_Pirum', 'Active', 12, 125],
    ['A_Currus', 'Active', 30, 125],
    ['A_Aliqui', 'Active', 97, 125],



    ['O_Pomum', 'Obsolete', 15, 255],
    ['O_Natura', 'Obsolete', 7, 255],
    ['O_Aliqui', 'Obsolete', 7, 255],
    ['O_Salvus', 'Obsolete', 2, 255],
    ['O_Currus', 'Obsolete', 1, 255],
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

    ['E_Rural', '1,557', "401", '6,938,102', 0, 0],
    ['E_Natura', '3,460', '329', '5,692,358', 0, 0],
    ['E_Fama',  '1,730', '375', '6,488,250', 0, 0],
    ['E_Abbas', '2,076', '310', '5,363,620', 0, 0],
    ['E_Aliqui',  '2,595', "298", '5,155,996', 0, 0],
    ['E_Victoia', '1,730', '390', '6,747,780', 0, 0],
    ['E_Pirum',  '3,287', '360', '6,228,720', 0, 0],
    ['E_Currus',  '865', '4688', '8,443,376', 0, 0],
    


    ['SM_Rural', '2,455', '270', '6,026,400', 0, 0],
    ['SM_Aliqui',  '2,902', '265', '5,194,800', 0, 0],
    ['SM_Pirum',   '2,323', '245',' 5,468,400', 0, 0],
    ['SM_Quibus',  '4,687', '250', '5,580,000', 0, 0],
    ['SM_Currus', '1,116', '257', '5,736,240', 0, 0],
    ['SM_Fama', '5,580', '255', '5,691,600', 0, 0],
    ['SM_Natura',  '3,348', '245', '5,468,400', 0, 0],



    ['A_Quibus',  '2,595', '368', '6,367,136', 0],
    ['A_Natura', '1,730',' 368', '6,367,136', 0],
    ['A_Abbas',  '1,557', '368', '6,367,136', 0],
    ['A_Pirum',  '1,730', '368', '6,367,136', 0],
    ['A_Currus',  '2,768','368',' 6,367,136', 0],
    ['A_Aliqui', '6,921', '368',' 6,367,136', 0],



    ['O_Pomum',   '3,608', '146', '1,317,066', 0, 0],
    ['O_Natura', '1,804', '163', '1,470,423', 0, 0],
    ['O_Aliqui', '2,255', '160', '1,443,360', 0, 0],
    ['O_Salvus',  '902', '100', '902,100', 0, 0],
    ['O_Currus',  '451', '150', '1,353,150', 0, 0],
]

let data4 = [
    [
        'Location',
        'Parent',
        'Market trade volume (size)',
        'Market increase/decrease (color)',
    ],

    ['Inventory Status', null, 0, 0],
    ['Excess', 'Inventory Status', 0, 0],
    ['Slow Moving', 'Inventory Status', 0, 0],
    ['Active', 'Inventory Status', 0, 0],
    ['Obsolete', 'Inventory Status', 0, 0],

    ['E_Rural', 'Excess', 30, 10],
    ['E_Natura', 'Excess', 10, 10],
    ['E_Fama', 'Excess', 25, 10],
    ['E_Abbas', 'Excess', 26, 10],
    ['E_Aliqui', 'Excess', 10, 10],
    ['E_Victoia', 'Excess', 13, 10],
    ['E_Pirum', 'Excess', 28, 10],
    ['E_Currus', 'Excess', 26, 10],
    


    ['SM_Rural', 'Slow Moving', 15, -255],
    ['SM_Aliqui', 'Slow Moving', 7, -255],
    ['SM_Pirum', 'Slow Moving', 2, -255],
    ['SM_Quibus', 'Slow Moving', 18, -255],
    ['SM_Currus', 'Slow Moving', 16, -255],
    ['SM_Fama', 'Slow Moving', 24, -255],
    ['SM_Natura', 'Slow Moving', 22, -255],



    ['A_Quibus', 'Active', 2, 125],
    ['A_Natura', 'Active', 1, 125],
    ['A_Abbas', 'Active', 1, 125],
    ['A_Pirum', 'Active', 36, 125],
    ['A_Currus', 'Active', 34, 125],
    ['A_Aliqui', 'Active', 22, 125],



    ['O_Pomum', 'Obsolete', 31, 255],
    ['O_Natura', 'Obsolete', 16, 255],
    ['O_Aliqui', 'Obsolete', 14, 255],
    ['O_Salvus', 'Obsolete', 32, 255],
    ['O_Currus', 'Obsolete', 91, 255],
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

    ['E_Rural', '1,557', "401", '6,938,102', 0, 0],
    ['E_Natura', '3,460', '329', '5,692,358', 0, 0],
    ['E_Fama',  '1,730', '375', '6,488,250', 0, 0],
    ['E_Abbas', '2,076', '310', '5,363,620', 0, 0],
    ['E_Aliqui',  '2,595', "298", '5,155,996', 0, 0],
    ['E_Victoia', '1,730', '390', '6,747,780', 0, 0],
    ['E_Pirum',  '3,287', '360', '6,228,720', 0, 0],
    ['E_Currus',  '865', '4688', '8,443,376', 0, 0],
    


    ['SM_Rural', '2,455', '270', '6,026,400', 0, 0],
    ['SM_Aliqui',  '2,902', '265', '5,194,800', 0, 0],
    ['SM_Pirum',   '2,323', '245',' 5,468,400', 0, 0],
    ['SM_Quibus',  '4,687', '250', '5,580,000', 0, 0],
    ['SM_Currus', '1,116', '257', '5,736,240', 0, 0],
    ['SM_Fama', '5,580', '255', '5,691,600', 0, 0],
    ['SM_Natura',  '3,348', '245', '5,468,400', 0, 0],



    ['A_Quibus',  '2,595', '368', '6,367,136', 0],
    ['A_Natura', '1,730',' 368', '6,367,136', 0],
    ['A_Abbas',  '1,557', '368', '6,367,136', 0],
    ['A_Pirum',  '1,730', '368', '6,367,136', 0],
    ['A_Currus',  '2,768','368',' 6,367,136', 0],
    ['A_Aliqui', '6,921', '368',' 6,367,136', 0],



    ['O_Pomum',   '3,608', '146', '1,317,066', 0, 0],
    ['O_Natura', '1,804', '163', '1,470,423', 0, 0],
    ['O_Aliqui', '2,255', '160', '1,443,360', 0, 0],
    ['O_Salvus',  '902', '100', '902,100', 0, 0],
    ['O_Currus',  '451', '150', '1,353,150', 0, 0],
]


let data5 = [
    [
        'Location',
        'Parent',
        'Market trade volume (size)',
        'Market increase/decrease (color)',
    ],

    ['Inventory Status', null, 0, 0],
    ['Excess', 'Inventory Status', 0, 0],
    ['Slow Moving', 'Inventory Status', 0, 0],
    ['Active', 'Inventory Status', 0, 0],
    ['Obsolete', 'Inventory Status', 0, 0],

    ['E_Rural', 'Excess', 10, 10],
    ['E_Natura', 'Excess', 20, 10],
    ['E_Fama', 'Excess', 25, 10],
    ['E_Abbas', 'Excess', 26, 10],
    ['E_Aliqui', 'Excess', 70, 10],
    ['E_Victoia', 'Excess', 77, 10],
    ['E_Pirum', 'Excess', 30, 10],
    ['E_Currus', 'Excess', 56, 10],
    


    ['SM_Rural', 'Slow Moving', 127, -255],
    ['SM_Aliqui', 'Slow Moving', 37, -255],
    ['SM_Pirum', 'Slow Moving', 50, -255],
    ['SM_Quibus', 'Slow Moving', 78, -255],
    ['SM_Currus', 'Slow Moving', 79, -255],
    ['SM_Fama', 'Slow Moving', 24, -255],
    ['SM_Natura', 'Slow Moving', 53, -255],



    ['A_Quibus', 'Active', 12, 125],
    ['A_Natura', 'Active', 91, 125],
    ['A_Abbas', 'Active', 31, 125],
    ['A_Pirum', 'Active', 66, 125],
    ['A_Currus', 'Active', 44, 125],
    ['A_Aliqui', 'Active', 52, 125],



    ['O_Pomum', 'Obsolete', 12, 255],
    ['O_Natura', 'Obsolete', 6, 255],
    ['O_Aliqui', 'Obsolete', 8, 255],
    ['O_Salvus', 'Obsolete', 2, 255],
    ['O_Currus', 'Obsolete', 4, 255],

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

    ['E_Rural', '1,557', "401", '6,938,102', 0, 0],
    ['E_Natura', '3,460', '329', '5,692,358', 0, 0],
    ['E_Fama',  '1,730', '375', '6,488,250', 0, 0],
    ['E_Abbas', '2,076', '310', '5,363,620', 0, 0],
    ['E_Aliqui',  '2,595', "298", '5,155,996', 0, 0],
    ['E_Victoia', '1,730', '390', '6,747,780', 0, 0],
    ['E_Pirum',  '3,287', '360', '6,228,720', 0, 0],
    ['E_Currus',  '865', '4688', '8,443,376', 0, 0],
    


    ['SM_Rural', '2,455', '270', '6,026,400', 0, 0],
    ['SM_Aliqui',  '2,902', '265', '5,194,800', 0, 0],
    ['SM_Pirum',   '2,323', '245',' 5,468,400', 0, 0],
    ['SM_Quibus',  '4,687', '250', '5,580,000', 0, 0],
    ['SM_Currus', '1,116', '257', '5,736,240', 0, 0],
    ['SM_Fama', '5,580', '255', '5,691,600', 0, 0],
    ['SM_Natura',  '3,348', '245', '5,468,400', 0, 0],



    ['A_Quibus',  '2,595', '368', '6,367,136', 0],
    ['A_Natura', '1,730',' 368', '6,367,136', 0],
    ['A_Abbas',  '1,557', '368', '6,367,136', 0],
    ['A_Pirum',  '1,730', '368', '6,367,136', 0],
    ['A_Currus',  '2,768','368',' 6,367,136', 0],
    ['A_Aliqui', '6,921', '368',' 6,367,136', 0],



    ['O_Pomum',   '3,608', '146', '1,317,066', 0, 0],
    ['O_Natura', '1,804', '163', '1,470,423', 0, 0],
    ['O_Aliqui', '2,255', '160', '1,443,360', 0, 0],
    ['O_Salvus',  '902', '100', '902,100', 0, 0],
    ['O_Currus',  '451', '150', '1,353,150', 0, 0],
]

let dataNumber = 1;
let data=null;
let tt_data=null;


const TreeMap1 = () =>  (
    
<MyContext.Consumer>
    { 
    (context) => {
            dataNumber = context.state.dataNumber;
            if(dataNumber == 1)
            {
                data=data1;
                tt_data=data1_1;
            }
            else if (dataNumber == 2) {
                data=data2;
                tt_data=data2_2;
            }
            else if (dataNumber == 3) {
                data=data3;
                tt_data=data3_3;
            }
            else if (dataNumber == 4) {
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
                height={'293px'}
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
                        
                        console.log(row);
                        console.log(row[0]);
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
