import React, { useEffect }from 'react';
import { searchPark } from '../utils/API'
// import ThoughtList from '../components/ThoughtList';
// import ThoughtForm from '../components/ThoughtForm';
// import FriendList from '../components/FriendList';
// import SearchForm from '../components/SearchForm';
import Results from '../components/Results';
import SearchForm from '../components/SearchForm';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';


// QUERY_THOUGHTS, QUERY_ME_BASIC
// import {  } from '../utils/queries';


const Home = () => {
  // const { loading, data } = useQuery(QUERY_THOUGHTS);
  // const { data: userData } = useQuery(QUERY_ME_BASIC);
  // const thoughts = data?.thoughts || [];

  const loggedIn = Auth.loggedIn();
  useEffect(()=>{
    console.log('hello')
    searchPark().then((res)=>{return res.json()}).then(data => {
      console.log(data)
    }) 
  }, [searchPark])
  return (
    <main>
      <h1>Home</h1>
      <SearchForm/>
      <Results/>
    </main>
    // <main>
    //   <div className="flex-row justify-space-between">
    //     {loggedIn && (
    //       <div className="col-12 mb-3">
    //         <ThoughtForm />
    //       </div>
    //     )}
    //     <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
    //       {loading ? (
    //         <div>Loading...</div>
    //       ) : (
    //         <ThoughtList
    //           thoughts={thoughts}
    //           title="Some Feed for Thought(s)..."
    //         />
    //       )}
    //     </div>
    //     {loggedIn && userData ? (
    //       <div className="col-12 col-lg-3 mb-3">
    //         <FriendList
    //           username={userData.me.username}
    //           friendCount={userData.me.friendCount}
    //           friends={userData.me.friends}
    //         />
    //       </div>
    //     ) : null}
    //   </div>
    // </main>
  );
};

export default Home;
