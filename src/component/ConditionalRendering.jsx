import React from 'react';

// Multiple return // Ternary Operator short circuit evaluation
const ConditionalRendering = () => {

    const isLoading = false;
    const isSubmitting = true;
    const isError = true;

    if (isLoading) {
        return <h1>LOADING...</h1>;
    }

  return (
    <div className='flex flex-col items-center m-5'>
        <h1>MAIN CONTENT</h1>
        <button className='mybtn'>
            {isSubmitting ? "Submitting..." : "Submit"}
        </button>
        {isError && <h1>Error Loading Page, try again</h1> } 
    </div>
  );
};

export default ConditionalRendering;