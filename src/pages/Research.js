import React from 'react'

function Research() {

    const navigatePaper1 = () => {
        window.open('https://doi.org/10.1007/978-981-15-5619-7_17');
    }
    const navigatePaper2 = () => {
        window.open('https://dx.doi.org/10.1007/978-981-33-4367-2_26');
    }

  return (
    <div>
        <div className='skills'>
            <h1>Research Papers</h1>
            <ol className='list'>
            <li className='item'>
                <span>1. <strong onClick = {navigatePaper1} style={{cursor: 'pointer'}}>Efficacy of Oversampling Over Machine Learning Algorithms in Case of Sentiment Analysis (AISC, Springer)</strong> - D. P. Chatterjee, S. Mukhopadhyay, S. Goswami & P. K. Panigrahi (2020)</span>
            </li>
            <li className='item'>
                <span>2. <strong onClick = {navigatePaper2} style={{cursor: 'pointer'}}>A Survey on Sentiment Analysis (ETIDMAIS, Springer)</strong> - D. P. Chatterjee, A. Mukherjee, S. Mukhopadhyay, M. Panday, P. K. Panigrahi & S. Goswami (2021)</span>
            </li>
            </ol>
        </div>
    </div>
  )
}

export default Research