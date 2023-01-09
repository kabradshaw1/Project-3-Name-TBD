import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { SAVE_PARK } from '../../utils/mutations';
import { searchPark } from '../../utils/API';
import { QUERY_SAVED, QUERY_ME } from '../../utils/queries'

const SearchForm = () => {
  // create state for holding returned google api data
  const [searchedPark, setSearchedPark] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

  const [savePark, { error }] = useMutation(SAVE_PARK
  //   , {
  //   update(cache, { data: { savePark } }) {
  //       // could potentially not exist yet, so wrap in a try/catch
  //     try {
  //       // update me array's cache
  //       const { me } = cache.readQuery({ query: QUERY_ME });
  //       cache.writeQuery({
  //         query: QUERY_ME,
  //         data: { me: { ...me, saved: [...me.saved, savePark] } },
  //       });
  //     } catch (e) {
  //       console.warn("First park insertion by user!")
  //     }

  //   // update saved array's cache
  //     const { saved } = cache.readQuery({ query: QUERY_SAVED });
  //     console.log(saved);
  //     cache.writeQuery({
  //       query: QUERY_SAVED,
  //       data: { saved: [savePark, ...saved] },
  //     });
  //   }
  // }
  )

  const formSelected = (event) => {
    //let newArray = event.map((properties) => {
      //console.log(properties)
    //}) 

    for (const property in event) {
      console.log(`${property}: ${event[property]}`);
    }

    //return (
      
        //Insert logic here for data filtering
      //<>
        //<p className='pill mb-3'>Example 1</p>
        //<p className='pill mb-3'>Example 2</p>
      //</>
    //)
  }
  const SearchResults = (data) => {
    // const newValues = data.map((values) => {
    //   let componentContent = []
    //   Object.values(values).map((value) => {
        
    //   });
    //   return 
    // });
    // const newKeys = data.map((keys) => {
    //   Object.keys(keys).map((key) => {
    //     console.log(key)
    //   });
    // })
    const Keys = Object.keys(data[0]).map((key)=>{
      return `{data.${key}}`
    })

    console.log(Keys)
    // const Components = () => {
    //   for (let i = 0; i < Keys.length; i++) {
    //     return `{${data.Keys[i]}}`
    //   }
    // }
    
    return setSearchResults(Keys)
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if(!searchInput) {
      return false
    };

    try {
      const response = await searchPark(searchInput);
   
      if (!response.ok) { 
        throw new Error('something went wrong!');
      }
      
      const items  = await response.json();
      
      console.log(items.data);
      setSearchedPark(items.data);
    } catch (err) {
      console.error(err);
    }
  };
  
  const handleResultsSaved = async (event) => {
    event.preventDefault();
    
    try {
      await savePark({
        variables: { searchedPark },
      });

    } catch(e) {
      console.error(e)
    }
  }

  return (
    <>
      <div className="card mb-3">
        <div className="card-header">
          <span className="text-light">Search</span>
        </div>
        <form 
          className="card-body"
          onSubmit={handleFormSubmit}
        >
          <select className="select pill mb-3" name='searchInput' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}>
                <option>--Select--</option>
                <option>Activities</option>
                <option>Alerts</option>
                <option>Ammenities</option>
                <option>Campgrounds</option>
                <option>Parks</option>           
            <div className="select_arrow">
            </div>
          </select>
            <button className="btn col-12 col-md-3" type="submit">
              Submit
            </button>
        </form>
      </div>
      <div className="card mb-3">
        <div className="card-header">
          <span className="text-light">Results</span>
        </div>
        <div className="card-body">
          {searchedPark.map((park) =>{
            return(
              <p className="pill mb-3" key={park.id}>
                {park.name} 
              </p>
            )
          {/* <SearchResults/> */}
          {searchedPark.map(() => {
            searchResults.map((key) => {
              return key
            })
            
          })}
          <p className='pill mb-3'>Stuff we searched for?</p>
          <button className="btn col-12 col-md-3"  onClick={handleResultsSaved}>
            Save Results
          </button>
        </div>
      </div>
    </>
  )
}

export default SearchForm;