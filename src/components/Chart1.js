import React from 'react';
import {PieChart, Pie, Tooltip} from 'recharts'

const data = [
    {
        value: 30,
        name: 'Weglowodany',
        color: '#35b22a'
    },
    {
        value: 15,
        name: 'Bialka',
        color: '#352ab2'
    },
    {
        value: 25,
        name: 'Tluszcze',
        color: '#c70d33'
    }
]
const styles = {
    textAlign: 'center',
    justifyContent: 'center'

}

const Chart1 = () => (
    <div style={styles}>
        <h2>Macronutrients in today's meals</h2>
        <PieChart width={500} height={500}>
            <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                fill= '#352ab2'
            />
            <Tooltip/>
        </PieChart>
    </div>
)

export default Chart1