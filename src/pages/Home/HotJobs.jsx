import React, { useEffect, useState } from 'react';
import HotJob from './HotJob';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/jobs")
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
           <h1 className="text2xl text-center font-bold"> See Job reqerment here </h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                jobs.map(job => <HotJob key={job._id} job={job} />)
            }
           </div>
        </div>
    );
};

export default HotJobs;