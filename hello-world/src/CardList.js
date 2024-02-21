import React from 'react';
import './styles.css'

const CardList = ({ quotes, selectedCategoryIndex, onCategoryChange }) => {
    return (
        <div className="card-list">
            {quotes.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                    <h2>{category.categoryName}</h2>
                    <div className="category-buttons">
                        {category.quotes.map((quote, index) => (
                            <button
                                key={index}
                                className={selectedCategoryIndex === index ? 'active' : ''}
                                onClick={() => onCategoryChange(index)}
                            >
                                {quote.subcategoryName}
                            </button>
                        ))}
                    </div>
                    <div className="cards">
                        {selectedCategoryIndex === -1 ? (
                            category.quotes.map((subcategory, subcategoryIndex) => (
                                <div key={subcategoryIndex}>
                                    <h3></h3>
                                    {subcategory.quotes.map((quote, index) => (
                                        <div className="quote-block" key={index}>
                                            <p>{quote.text}</p>
                                            <p>- {quote.author}</p>
                                        </div>
                                    ))}
                                </div>
                            ))
                        ) : (
                            <div>
                                <h3></h3>
                                {category.quotes[selectedCategoryIndex].quotes.map((quote, index) => (
                                    <div className="quote-block" key={index}>
                                        <p>{quote.text}</p>
                                        <p>- {quote.author}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                //this spacing is actually disgusting. I am so sorry. A lot of attempts were made, and I didn't really use 
                //Github to its fullest potential (translation: I used the "bucket of USBs method instead. Once again. Very sorry.")
                //... in other news. I have never been so glad for the "autocomplete" function of IDEs.
            ))}
        </div>
    );
};

export default CardList;
