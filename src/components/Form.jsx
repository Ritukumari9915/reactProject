import React from 'react'

function Form() {
    return (
        <div className='wrapper'>
            <h1>Form in react</h1>
            <div className="form">
                <form action="#">
                    <label htmlFor="firstname">First Name*</label>
                   
                    <input
                        type="text"
                        name='firstname'
                        id='firstbname'
                        placeholder='Enter your First Name'
                        required />
                 
                    <label htmlFor="firstname">Last Name*</label>
                    
                    <input
                        type="text"
                        name='lastname'
                        id='lastname'
                        placeholder='Enter your last Name'
                        required />
              
                    <label htmlFor="email">Email*</label>
                   
                    <input
                        type="email"
                        name='email'
                        id='email'
                        placeholder='Enter your Email'
                        required />
                 
                    <label htmlFor="contact">Enter Mobile Number*</label>
                   
                    <input
                        type="tel"
                        name='tel'
                        id='tel'
                        placeholder='Enter your Mobile Number'
                        required />
                   
                    <label htmlFor="gender">Gender</label>
              
                    <input type="radio" name='gender' value='' id='male' />
                    Male
                    <input type="radio" name='gender' value='' id='female' />
                    Female
                    <input type="radio" name='gender' value='' id='other' />
                    Other

                   
                    <label htmlFor="subject">Your best Subject</label>
                    
                    <input type="checkbox"
                        id='english' name='lang' checked />English
                    <input type="checkbox"
                        id='hindi' name='lang' />Hindi
                    <input type="checkbox"
                        id='math' name='lang' />Math
                  
                    <label htmlFor="file">Upload Resume</label>
                 
                    <input type="file"
                        id='file'
                        name='file'
                        placeholder='Enter upload File'
                        required
                    />
                    <label htmlFor="url">Enter URL</label>
                    <input type="url"
                        id='url'
                        name='url'
                        placeholder='Enter URL'
                        required />

                  
                    <label htmlFor="choice">Select your Choice</label> 
                    <select name="select" id="select">
                        <option value="" disabled selected>Select Your Ans</option>
                        <optgroup label='Begginers'>
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">JavaScript</option>
                        </optgroup>
                        <optgroup label='Advance'>
                            <option value="1">React</option>
                            <option value="2">Node</option>
                            <option value="3">MongoDB</option>
                            <option value="3">Express</option>
                        </optgroup>
                    </select>
                   
                    <label htmlFor="about">About Yourself</label>
               
                    <textarea
                     name="about" 
                     id="about" 
                     cols="30" 
                     rows="10"
                     placeholder='About YourSelf'
                     required
                     >
                      
                    </textarea>
                
                    <label htmlFor="">Submit OR Reset</label>
                 
                    <button type='reset' value= 'reset' id='reset'>Reset</button>
                    <button type='sumit' value= 'submit' id='submit'>Submit</button>
                </form>
            </div>


        </div>
    )
}

export default Form
