import React from 'react';

const ReactWork = () => {
    return (
        <div>
            <h4 className='pt-5'>How React Work</h4>
        <p>
     React is a javascript library which is used to make frontend. In react it has component which return  element tree.
     JSX converted to react.createElement function call which take element type,props,children as parameter.React keep the
tree element in the memory as virtual DOM.When the tree/state changes ,it create another element tree.Than react use diff
algorithm to compare the tree.it only change react create a virtual dom to update dom element.When there is change in dom
,it doesnot change whole thing.It compare with virtual dom and change only what is changed.React convert Components to HTML code.
the reactDOM will inject the html code to main index.html.
        </p>
        </div>
    );
};

export default ReactWork;