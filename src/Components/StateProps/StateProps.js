import React from 'react';

const StateProps = () => {
    return (
        <div className='pt-4'>
            <h4 className='text-center'>Props vs State</h4>
            Props take argument of function.when data change we have to pass to props function argument.
           In  props when you passed the value ,it become immutable.it cannot be changed.But in
            State it is changable.it will  change the value based on the current state of the component.it is mutable.
            In stateless component it cannot changed in the component.Stateful component change over change in component.we can
pass state using props.But props cannot passed to states.
        </div>
    );
};

export default StateProps;