import React from 'react';

function Articles({articles}) {
    
    return (
        <div>
            <h1>
                Articles
            </h1>
            {
                articles.map((article,index)=>(
                    <div key={index}>
                        <h2>{article.title} &nbsp; {article.upvotes} &nbsp; {article.date}</h2>
                    </div>
                ))
            }
            
        </div>
    )
}

export default Articles;
