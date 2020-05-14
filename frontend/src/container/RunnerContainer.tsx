import React, {useState, useEffect} from 'react';
import RunnerList from '../components/RunnerList';
import {Runner} from '../models/models';

interface Props {
    runners: Runner[];
}

const RunnerListContainer = (props: Props) => {
    const [runnerList, setRunnerList] = useState<Runner[]>([]);

    useEffect(() => {
        setRunnerList(props.runners);
    }, [props.runners]);

    return (
        <div>
            <RunnerList runners={runnerList} ></RunnerList>
        </div>
    )
}

export default RunnerListContainer;