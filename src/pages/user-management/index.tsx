import React, { useState, useEffect } from 'react';
import "../../app/globals.css";
import { useUser } from '@/components/UserProvider';
import NavBar from '@/components/NavBar';
import firebaseAdmin from "../../../firebaseAdmin"; 

function userManagement() {
  const [institutions, setInstitutionsList] = useState<any[]>([]);
  const [allUsers, setAllUsers] = useState<any[]>([]);
  const [checkedUsers, setCheckedUsers] = useState<{ [key: number]: boolean }>({});
  const { user, loading } = useUser();

  useEffect(() => {
    const fetchInstitutions = async () => {
      const response = await fetch('/api/getInstitutions');
      const data = await response.json();
      //console.log(data); 
      setInstitutionsList(data);
    };

    const fetchAllUsers = async () => {
      const response = await fetch('/api/getAllUsers');
      const data = await response.json();
      setAllUsers(data);
      //console.log(data);
    };

    fetchInstitutions();
    fetchAllUsers();
  }, []);

  if (loading) {
      return <p>Loading</p>
  }

  //protect pages if status is not admin or professor
  if (!user?.status) {
      return (
          <div>
              <h1>Please login to gain access to this page.</h1>
          </div>
      )
  }

  if (user?.status !== "professor" && user?.status !== "ADMIN") {
      return (
          <div>
              <h1>You do not have permission to access this page.</h1>
          </div>
      )
  }

  //filter users based on university name
/*const filteredUsers: any[] = [];
  for(let i = 0; i<allUsers.length; i++){
    if(user.institution == allUsers[i].institution){
      filteredUsers.push(allUsers[i]);
    }
  }
  console.log("Filtered Users", filteredUsers);*/


  const handleCheckboxChange = (userId: number) => {
    setCheckedUsers((prevState) => ({
      ...prevState,
      [userId]: !prevState[userId],
    }));
  };

  const handleApprove = async () => {
    const updatedUsers = allUsers.map((user) => ({
      ...user,
      approved: checkedUsers[user.id] ? true : user.approved,
    }));

    setAllUsers(updatedUsers);
    try {
      const updatedUsers = await Promise.all(
        Object.keys(checkedUsers).map(async (userIdKey: string) => {
          const userId = parseInt(userIdKey); 
          await fetch('/api/approveUsers', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              checkedUsers: {
                [userId]: checkedUsers[userId], // Use the parsed user ID as the key
              },
            }),
          });
          return {
            id: userId,
            approved: checkedUsers[userId],
          };
        })
      );
  
      console.log("Updated Users: ", updatedUsers);
    } catch (error) {
      console.error('Error approving user:', error);
    }
  

  
    };

  const handleDelete = async () => {
    //only fill array with users that are not checked
    const updatedUsers = allUsers.filter(user => !checkedUsers[user.id]);
    setAllUsers(updatedUsers);

    try {
      const deletedUsers = await fetch('/api/deleteUsers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          checkedUsers,
        }),
      }).then(res => res.json());
  
      console.log("Deleted Users: ", deletedUsers);
      
  
    } catch (error) {
      console.error('Error deleting users:', error);
    }
  };

  return (
    <div>
      <NavBar />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ marginTop: '10px', marginBottom: '10px' }}>Welcome, {user.status}!</h1>
        <h2 style={{ marginBottom: '10px' }}>Members of labs at {user.institution}</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            style={{ marginRight: '10px', marginBottom: '10px' }}
            onClick={handleApprove}
          >
            Approve
          </button>
          <button style={{ marginBottom: '10px' }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th style={{ color: '#40E0D0', textDecoration: 'underline' }}>Check</th>
              <th style={{ color: '#40E0D0', textDecoration: 'underline' }}>User Name</th>
              <th style={{ color: '#40E0D0', textDecoration: 'underline' }}>Given Name</th>
              <th style={{ color: '#40E0D0', textDecoration: 'underline' }}>Title</th>
              <th style={{ color: '#40E0D0', textDecoration: 'underline' }}>Institution</th>
              <th style={{ color: '#40E0D0', textDecoration: 'underline' }}>Status/Role</th>
              <th style={{ color: '#40E0D0', textDecoration: 'underline' }}>PI</th>
              <th style={{ color: '#40E0D0', textDecoration: 'underline' }}>Email</th>
              <th style={{ color: '#40E0D0', textDecoration: 'underline' }}>RegDate</th>
              <th style={{ color: '#40E0D0', textDecoration: 'underline' }}>Approved</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user) => (
              <tr key={user.id}>
                <td style={{ marginLeft: '10px' }}>
                  <input
                    type="checkbox"
                    checked={checkedUsers[user.id] || false}
                    onChange={() => handleCheckboxChange(user.id)}
                  />
                </td>
                <td>{user.user_name}</td>
                <td>{user.given_name}</td>
                <td>{user.title}</td>
                <td>{user.institution}</td>
                <td>{user.status}</td>
                <td>{user.pi}</td>
                <td>{user.email}</td>
                <td>{user.reg_date}</td>
                <td>{user.approved ? '1' : '0'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default userManagement;

