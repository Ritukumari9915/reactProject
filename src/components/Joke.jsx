import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Joke() {
    const [joke, setJoke] = useState('');

    useEffect(() => {
        fetchJoke();
    }, [])

    const fetchJoke = async () => {
        try {
            const response = await axios.get('https://official-joke-api.appspot.com/jokes/random');
            setJoke(response.data.setup + ' ' + response.data.punchline);


        } catch (error) {
            console.log('error fetching data', error)
        }


    }
    return (
        <>

            <div className='joke'>
                <h1>Joke Generator Using React and Joke API</h1>

                {joke ? (<p>{joke}</p>) : (<p>...Loading Joke</p>)

                }
                <button onClick={fetchJoke}>Click to Generate a Joke</button>
                

               


            </div>
        </>
    )
}

export default Joke
