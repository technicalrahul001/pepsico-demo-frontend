import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { Button, Modal, } from 'react-bootstrap';

function Home() {
    const [rowData, setRowData] = useState([
        {
            id: 1,
            name: "Shubham",
            country: "India",
            city: "Jaipur",
            address: "Tilak nagar, Raja park, jaipur",
        },
        {
            id: 2,
            name: "Rahul",
            country: "India",
            city: "Delhi",
            address: "Tilak nagar, Raja park, jaipur",
        },
         {
            id: 3,
            name: "Shivam",
            country: "India",
            city: "Udaipur",
            address: "Tilak nagar, Raja park, jaipur",
        }
        , {
            id: 4,
            name: "Sunil",
            country: "India",
            city: "Jaipur",
            address: "Tilak nagar, Raja park, jaipur",
        },
        {
            id: 5,
            name: "Ajay",
            country: "India",
            city: "Jaipur",
            address: "Tilak nagar, Raja park, jaipur",
        },
        {
            id: 6,
            name: "Mohit",
            country: "India",
            city: "Jaipur",
            address: "Tilak nagar, Raja park, jaipur",
        }
    ])
const [addData,setAddData] = useState()
    const [show, setShow] = useState(false);
    const [addFormData, setAddFormData] = useState({
        id: null,
        name: "",
        country: "",
        city: "",
        address: "",
    })
    console.log(addFormData);
    const handleAddFormChange = (e) => {
        e.preventDefault();
        setAddFormData(state => ({...state, [e.target.name]: e.target.value}))

    }
   const addNewRecord = (e) => {
    e.preventDefault()
    console.log("addFormData", addFormData)
    setRowData([
        ...rowData,
        { id: rowData?.length + 2, name: addFormData?.name,
        country: addFormData?.country,
        city: addFormData?.city,
        address: addFormData?.address }
      ]);
      handleClose();
   }
    const handleClose = () => {
        setShow(false)
        setAddFormData({
            id: null,
            name: "",
            country: "",
            city: "",
            address: "",
        });
    };

    const updateRecord = (e) => {
        e.preventDefault();
        const nextCounters = rowData.map((c, i) => {
            if (c.id === addFormData?.id) {
              return addFormData
            } else {
              return c;
            }
          });
          setRowData(nextCounters);
          handleClose()
    }
    const handleShow = () => setShow(true);
    return (

        <div className="container ">
            <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
                <div className="row ">

                    <div className="col-sm-3 mt-5 mb-4 text-gred">
                        <div className="search">
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search Student" aria-label="Search" />

                            </form>
                        </div>
                    </div>
                    <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{ color: "red" }}><h2><b>Student Details</b></h2></div>
                    {/* <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred" style={{ display: 'flex', flexDirection: 'row', }}>
                        <Button variant="danger" onClick={handleShow}>
                            Add New Student
                        </Button>
                        <Button variant="outline-primary">Primary</Button>
                        <Button variant="primary" onClick={handleAddFormChange}>
                           Edit Student
                        </Button>
                        <Button variant="primary" onClick={handleShow}>
                            Delete Student
                        </Button>

                    </div> */}
                </div>
                <div className="row">
                    <div className="table-responsive " >
                        <table className="table table-striped table-hover table-bordered">
                            <div class="form-check">


                            </div>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name </th>
                                    <th>Country</th>
                                    <th>City </th>
                                    <th>Address</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>

                                {rowData?.length > 0 && rowData?.map((item, i) => {
                                    return <tr>
                                    <td>{item?.id}</td>
                                    <td>{item?.name}</td>
                                    <td>{item?.country}</td>
                                    <td>{item?.city}</td>
                                    <td>{item?.address}</td>
                                    <td>
                                        <a href="#" className="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}} onClick={handleShow}><i className="material-icons">&#xE417;</i></a>
                                <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons" onClick={(e) => {
                                    handleShow(e)
                                    setAddFormData(item)
                                    }}>&#xE254;</i></a>
                                <a href="#" className="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}} onClick={() => {
                                    setRowData(rowData?.filter(obj => obj?.id != item.id))
                                }}><i className="material-icons">&#xE872;</i></a>

                                    </td>
                                </tr>
                                })}
                                
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* <!--- Model Box ---> */}
                <div className="model_box">
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>{addFormData?.id ? 'Update record' : 'Add record'}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form onSubmit={(e) => {
                                    !addFormData?.id ? addNewRecord(e) : updateRecord(e)
                                    
                                    }}>
                                <div className="form-group">
                                    <input type="name" name="name" onChange={handleAddFormChange} value={addFormData.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="country" name="country" onChange={handleAddFormChange} value={addFormData.country} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Country" />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="city" name="city" onChange={handleAddFormChange} value={addFormData.city} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter City" />
                                </div>
                                <div className="form-group mt-3">

                                    <input type="address" name="address" onChange={handleAddFormChange} value={addFormData.address} className="form-control" id="exampleInputPassword1" placeholder="Enter Address" />
                                </div>

                                <button type="submit" className="btn btn-success mt-4" >{addFormData?.id ? 'Update record' : 'Add record'}</button>
                            </form>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>

                        </Modal.Footer>
                    </Modal>

                    {/* Model Box Finsihs */}
                </div>
            </div>
        </div>
    );
}

export default Home;