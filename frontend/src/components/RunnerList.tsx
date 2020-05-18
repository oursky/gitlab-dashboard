import React from 'react';
import {Runner} from '../models/models';

interface Props {
    runners: Runner[];
}

function RunnerList(props: Props) {

    return (
        <div>
            {props.runners.map((runner, index) => {
                return (
                    <div key={index}>
                        <p>Runner name: {runner.name}</p>
                    </div>
                )
            })
            }
        </div>
    );
}

export default RunnerList;