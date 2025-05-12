import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MenuTop from '../../../../components/commonComponents/features/menus/menu_subbar/menu_appbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ExercicesAffichage() {
    const { id } = useParams();
    const [folder, setFolder] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showModal2, setShowModal2] = useState(false);
    const [showSocietePopup, setShowSocietePopup] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [form, setForm] = useState({
        intitule: '',
        societyId: '',
        dateDebut: '',
        dateFin: ''
    });
    const [exercices, setExercices] = useState([]); // Liste d'exercices
    const handleClick2 = () => {
        setShowModal2(true);
    };

    const closeModal2 = () => {
        setShowModal2(false);
        setForm({ intitule: '', societyId: '', dateDebut: '', dateFin: '' });
    };

    const handleBackdropClick = () => {
        closeModal2();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Soumission :", form);
        setExercices([...exercices, { ...form, id: Date.now(), statut: "Brouillon", session: "2025", modifiedAt: new Date().toLocaleDateString() }]);
        closeModal2();
    };

    const closeSocietePopup = () => {
        setShowSocietePopup(false);
    };

    useEffect(() => {
        const fetchFolder = async () => {
            const token = localStorage.getItem('token');
            if (!token) return;

            setLoading(true);
            try {
                const response = await fetch(`http://82.112.254.228:8000/api/v1/folders/${id}/`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                const result = await response.json();
                if (!response.ok) {
                    throw new Error(result.message || "Erreur lors du chargement du dossier");
                }

                setFolder(result.data);
                setForm(prev => ({
                    ...prev,
                    intitule: result.data.intitule,
                    societyId: result.data.society?.name || ""
                }));
            } catch (err) {
                setError(err.message);
                console.error("Erreur:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchFolder();
    }, [id]);

    const [exerciseForm, setExerciseForm] = useState({
        startDate: '',
        endDate: ''
    });

// Fonction d'ajout d'exercice
const handleAddExercise = async (folderId, newExercise) => {
  try {
    const response = await api.createExercise(folderId, newExercise);
    
    // Mise à jour de l'état
    setFolders(prevFolders => prevFolders.map(folder => {
      if (folder.id === folderId) {
        return {
          ...folder,
          exercices: [...folder.exercices, response.data] // Ajoute le nouvel exercice
        };
      }
      return folder;
    }));
  } catch (error) {
    console.error("Erreur lors de l'ajout", error);
  }
};

// Dans le rendu des exercices
{folder.exercices.map(exercice => (
  <div key={exercice.id}>
    <p>{exercice.startDate} - {exercice.endDate}</p>
    {/* ... autres champs */}
  </div>
))}

    const handleExerciseSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        if (!token) return;

        const formData = new FormData();
        formData.append('startDate', exerciseForm.startDate);
        formData.append('endDate', exerciseForm.endDate);
        formData.append('folderId', folder.id); // Assurez-vous que `folder` est bien chargé

        try {
            const response = await fetch('http://82.112.254.228:8000/api/v1/exercices/create/', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`

                },
                body: formData
            });

            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.message || "Erreur lors de la création de l'exercice");
            }

            alert("Exercice créé avec succès !");
        } catch (error) {
            console.error(error);
            alert("Erreur : " + error.message);
        }
    };


    return (
        <div>
            <ToastContainer />
            <MenuTop />

            <div style={{ backgroundColor: "white", marginTop: "0px", paddingBottom: "2px", marginBottom: "20px" }}>
                <div className="d-sm-flex mb-4 justify-content-between" style={{ marginLeft: "40px", marginRight: "40px", paddingTop: "20px" }}>

                    {/* Société */}
                    <div className="d-flex gap-2 mt-1 mt-sm-0">
                        <div>
                            <span className='text-fixed border-0 ps-2 me-2' style={{ whiteSpace: "nowrap", fontSize: "20px" }}>
                                Société :
                            </span>
                            <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                                {folder?.society?.name || "Non défini"}
                            </span>
                        </div>
                    </div>

                    {/* Référentiel */}
                    <div>
                        <div className="pageheader-btn">
                            <span className="border-0 ps-2 me-2" style={{ whiteSpace: "nowrap", fontSize: "20px", marginRight: "40px" }}>
                                Référentiel :
                            </span>
                            <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                                {folder?.intitule || "Non défini"}
                            </span>
                        </div>
                    </div>

                </div>
            </div>

            {loading && <p style={{ marginLeft: "40px" }}>Chargement...</p>}
            {error && <p style={{ marginLeft: "40px", color: "red" }}>{error}</p>}




            <div className="container-fluid" >

                <div className="row container-fluid">
                    <div className="col-xl-12">
                        <div className="card custom-card">
                            <div className="card-body">
                                <div className="d-sm-flex mb-4 justify-content-between">
                                    <div className="d-flex gap-2 mt-1 mt-sm-0">
                                        <div className="input-group input-group-sm" style={{ maxWidth: '250px' }}>
                                            <span className="input-group-text bg-primary text-white border-0">
                                                <i className="ri-search-line"></i>
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control border-0"
                                                placeholder="Rechercher une société..."
                                                onChange={(e) => console.log(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="pageheader-btn">
                                            <nav>
                                                <div className="breadcrumb mb-0">
                                                    <div className="d-flex" style={{ flexWrap: "nowrap", overflowX: "auto" }}>

                                                        <div className="d-flex me-2 align-items-center justify-content-center bg-success pe-3 ps-3  " style={{ cursor: "pointer", borderRadius: "4px", height: '27px' }}>
                                                            <div className="-text text-muted text-fixed-white me-0 border-0 pe-0">
                                                                <i className="fa fa-plus mt-1" />
                                                            </div>
                                                            <span className="text-fixed-white border-0 ps-2 me-2" onClick={() => handleClick2()} style={{ whiteSpace: "nowrap", fontSize: "11px", cursor: "pointer" }}>
                                                                Ajouter un exercice
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-bordered text-nowrap mb-0 text-center" id="projectSummary">
                                        <thead>
                                            <tr >
                                                <th className="wd-5p tx-center  bg-primary text-light">Exercice</th>
                                                <th className="wd-25p  bg-primary text-light">Période</th>
                                                <th className="text-center  bg-primary text-light">Session</th>
                                                <th className="text-center  bg-primary text-light">Statut</th>
                                                <th className=" bg-primary text-light">Dernière modification</th>
                                                <th className=" bg-primary text-light">Dernière Sauvegarde</th>
                                                <th className=" bg-primary text-light">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {exercices.length === 0 ? (
                                                <tr>
                                                    <td colSpan="7">Aucun exercice enregistré</td>
                                                </tr>
                                            ) : (
                                                exercices.map((ex, idx) => (
                                                    <tr key={ex.id}>
                                                        <td>{ex.intitule}</td>
                                                        <td>{ex.dateDebut} - {ex.dateFin}</td>
                                                        <td>{ex.session}</td>
                                                        <td>{ex.statut}</td>
                                                        <td>{ex.modifiedAt}</td>
                                                        <td>—</td>
                                                        <td>
                                                            <button className="btn btn-sm btn-primary">Éditer</button>
                                                        </td>
                                                    </tr>
                                                ))
                                            )}

                                        </tbody>

                                    </table>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex align-items-center">
                                    <div>
                                        Showing 5 Entries{" "}
                                        <i className="bi bi-arrow-right ms-2 fw-semibold" />
                                    </div>
                                    <div className="ms-auto">
                                        <nav aria-label="Page navigation" className="pagination-style-4">
                                            <ul className="pagination mb-0">
                                                <li className="page-item disabled">
                                                    <a className="page-link" href="#">
                                                        Prev
                                                    </a>
                                                </li>
                                                <li className="page-item active">
                                                    <a className="page-link" href="#">
                                                        1
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">
                                                        2
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link text-primary" href="#">
                                                        next
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {showModal2 && (
                    <>
                        <div
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 1050
                            }}
                            onClick={handleBackdropClick}
                        >
                            <div
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
                                    width: '90%',
                                    maxWidth: '800px',
                                    maxHeight: '90vh',
                                    overflowY: 'auto',
                                    position: 'relative',
                                    zIndex: 1051
                                }}
                                onClick={e => e.stopPropagation()}
                            >
                                <div style={{
                                    padding: '1rem',
                                    borderBottom: '1px solid #dee2e6',
                                    position: 'relative'
                                }}>
                                    <h5 style={{ margin: 0, fontWeight: 'bold' }}>Ajout d'un exercice</h5>
                                    <button
                                        type="button"
                                        onClick={closeModal2}
                                        style={{
                                            position: 'absolute',
                                            right: '1rem',
                                            top: '1rem',
                                            background: 'none',
                                            border: 'none',
                                            fontSize: '1.5rem',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        ×
                                    </button>
                                </div>

                                <form onSubmit={handleExerciseSubmit} style={{ padding: '1rem' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        {/* Référentiel */}
                                        <div style={{ gridColumn: '1 / -1' }}>
                                            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Référentiel</label>
                                            <input
                                                type="text"
                                                name="intitule"
                                                value={form.intitule}
                                                disabled
                                                style={{
                                                    width: '100%',
                                                    padding: '0.375rem 0.75rem',
                                                    border: '1px solid #ced4da',
                                                    borderRadius: '0.25rem',
                                                    backgroundColor: '#e9ecef'
                                                }}
                                            />
                                        </div>

                                        {/* Société */}
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', gridColumn: '1 / -1' }}>
                                            <div style={{ flex: 1 }}>
                                                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Société</label>
                                                <input
                                                    type="text"
                                                    name="societyId"
                                                    value={form.societyId}
                                                    disabled
                                                    style={{
                                                        width: '100%',
                                                        padding: '0.375rem 0.75rem',
                                                        border: '1px solid #ced4da',
                                                        borderRadius: '0.25rem',
                                                        backgroundColor: '#e9ecef'
                                                    }}
                                                    placeholder='Société déjà choisie'
                                                />
                                            </div>
                                        </div>


                                        {/* Dates */}

                                        <div style={{ gridColumn: '1 / -1' }}>
                                            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Période</label>
                                            <div style={{ display: 'flex', gap: '1rem' }}>
                                                <input

                                                    type="date"
                                                    name="startDate"
                                                    value={exerciseForm.startDate}
                                                    onChange={handleExerciseChange}
                                                    required




                                                    style={{ flex: 1 }}
                                                />
                                                <input
                                                    type="date"
                                                    name="endDate"
                                                    value={exerciseForm.endDate}
                                                    onChange={handleExerciseChange}
                                                    required



                                                    style={{ flex: 1 }}
                                                />
                                            </div>
                                        </div>

                                    </div>

                                    {error && (
                                        <div style={{ color: 'red', marginTop: '1rem' }}>
                                            {error}
                                        </div>
                                    )}

                                    <div style={{
                                        marginTop: '1rem',
                                        paddingTop: '1rem',
                                        borderTop: '1px solid #dee2e6',
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        gap: '0.5rem'
                                    }}>
                                        <button
                                            type="button"
                                            onClick={closeModal2}
                                            style={{
                                                padding: '0.375rem 0.75rem',
                                                border: '1px solid #6c757d',
                                                borderRadius: '0.25rem',
                                                backgroundColor: 'transparent',
                                                color: '#6c757d'
                                            }}
                                        >
                                            Annuler
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            style={{
                                                padding: '0.375rem 0.75rem',
                                                border: '1px solid #0d6efd',
                                                borderRadius: '0.25rem',
                                                backgroundColor: '#0d6efd',
                                                color: 'white',
                                                opacity: loading ? 0.7 : 1
                                            }}
                                        >
                                            {loading ? 'Enregistrement...' : 'Enregistrer'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </>

                )}
            </div>
        </div>
    );
}
