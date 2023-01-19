import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import NoData from '../../Components/NoData';
import { AuthContext } from '../../Contexts/AuthProvider';
import PatientCard from './PatientCard';

const AllPatients = () => {
    const {user}=useContext(AuthContext)
    const { data: patients = [] ,refetch} = useQuery({
        queryKey: ['patients'],
        queryFn: () => fetch(`https://server-sanjidaakterafia0307.vercel.app/patients?email=${user.email}`)
            .then(res => res.json())
    })

    console.log(patients)
    if(patients.length<=0){
        return <NoData item="Patient"></NoData>
    }
    return (
        <div>
             <h2 className='text-4xl font-semibold my-10 text-center'>All Patients</h2>

            <div>
                {
                    patients.map(patient=><PatientCard key={patient._id} refetch={refetch} patient={patient}></PatientCard>)
                }
            </div>
        </div>
    );
};

export default AllPatients;