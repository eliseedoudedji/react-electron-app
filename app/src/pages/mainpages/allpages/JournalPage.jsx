import React from 'react'
import { useParams } from 'react-router-dom';
import AppSidebar from '../../../components/commonComponents/AppSidebar';
import ExercicesTable from '../../../components/commonComponents/main/ExercicesTable';
import FolderHeader from '../../../components/commonComponents/dossiers/header/FolderHeader';

export default function DossierPage() {
  const { id } = useParams();
  return (
    <div>
      <FolderHeader />
      
      <ExercicesTable />
    </div>
  )
}
