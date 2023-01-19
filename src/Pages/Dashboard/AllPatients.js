import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import PatientCard from './PatientCard';

const AllPatients = () => {
    const {user}=useContext(AuthContext)
    const { data: patients = [] ,refetch} = useQuery({
        queryKey: ['patients'],
        queryFn: () => fetch(`http://localhost:7000/patients?email=${user.email}`)
            .then(res => res.json())
    })

    console.log(patients)
    return (
        <div>
            <h1>All Patients</h1>

            <div>
                {
                    patients.map(patient=><PatientCard key={patient._id} refetch={refetch} patient={patient}></PatientCard>)
                }
            </div>
        </div>
    );
};

export default AllPatients;