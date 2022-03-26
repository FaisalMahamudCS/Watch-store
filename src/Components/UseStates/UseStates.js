import React from 'react';

const UseStates = () => {
    return (
        <div className='pt-4'>
            <h4 className='text-center'>How UseState Works</h4>
            <p>UseState is a function which return a array.we have to destructure state and function to change the state.
              firstly it initialize the value of the state.When the value updated and set to as parameter then it rerender the components.
              for example const [name,SetName]=useState([])
              In use State first name will will used to find the changed state valus.setname will used to assign new value as change of property.
              
                 </p>
        </div>
    );
};

export default UseStates;