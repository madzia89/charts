import React from 'react';
import {render} from 'react-dom';
import {PieChart, Pie, Tooltip} from 'recharts'

const data = [
    {
        value: 30,
        name: 'Weglowodany'
    },
    {
        value: 15,
        name: 'Bialka'
    },
    {
        value: 25,
        name: 'iTluszcze'
    }
]

const Chart1 = () => (
    <div>
        <PieChart width={500} height={500}>
            <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                fill="#8884d8"
            />
            <Tooltip/>
        </PieChart>
    </div>
);

export default Chart1