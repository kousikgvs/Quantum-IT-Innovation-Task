import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import arr from './GenerateData';

export default function Dashboard() {

  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Name</th>
          <th scope='col'>Email</th>
          <th scope='col'>Role</th>
          <th scope='col'>Status</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {arr.map((item, index) => (
          <tr key={index}>
            <td>{item['#']}</td>
            <td>
              <div className='d-flex align-items-center'>
                <img
                  src={`https://mdbootstrap.com/img/new/avatars/${index + 1}.jpg`}
                  alt=''
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>{item['Name']}</p>
                  <p className='text-muted mb-0'>{item['Email']}</p>
                </div>
              </div>
            </td>
            <td>
            <p className='text-muted mb-0'>{item['DateCreated']}</p> {/* Display Date Created */}
            </td>
            <td>{item['Role']}</td>
            <td>
              {item['Status'] === 'Active' ? (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <MDBBadge pill color='white' style={{ marginRight: '5px' }}>
                    <span style={{ backgroundColor: 'green', width: '10px', height: '10px', borderRadius: '50%', display: 'inline-block' }}></span>
                  </MDBBadge>
                  {item['Status']}
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <MDBBadge pill color='white' style={{ marginRight: '5px' }}>
                    <span style={{ backgroundColor: 'red', width: '10px', height: '10px', borderRadius: '50%', display: 'inline-block' }}></span>
                  </MDBBadge>
                  {item['Status']}
                </div>
              )}

            </td>
            <td>
              <MDBBtn color='link' rounded size='sm'>
                Edit
              </MDBBtn>
            </td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
}