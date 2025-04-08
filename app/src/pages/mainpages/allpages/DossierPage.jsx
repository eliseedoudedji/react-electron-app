import React from 'react'
import { useParams } from 'react-router-dom';
import AppSidebar from '../../../components/commonComponents/AppSidebar';
import ExercicesTable from '../../../components/commonComponents/main/ExercicesTable';
import Header from '../../../components/commonComponents/header';

export default function DossierPage() {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <AppSidebar />
      <ExercicesTable />
    </div>
  )
}
