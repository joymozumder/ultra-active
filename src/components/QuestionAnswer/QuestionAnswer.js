import React from 'react';

const QuestionAnswer = () => {
    return (
        <div className=' my-5 '>
            <h3 className='text-center mb-3'>Question & Answer</h3>
            <div className="col-12 col-md-8 mx-auto">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item border mb-4">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button fw-semibold px-4 py-4" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                    aria-controls="collapseOne">
                                    How does react work?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body px-4">
                                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering code.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item border mb-4">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button fw-semibold px-4 py-4 collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                    aria-controls="collapseTwo">
                                    What are the differences between props and state?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body px-4">
                                    <strong>Props: </strong>Props are known as properties it can be used to pass data from one component to another. The Data is passed from one component to another. It is Immutable (cannot be modified). Props can be used with state and functional components. Props are read-only.<br></br>
                                    <strong>State: </strong>The state represents parts of an Application that can change. The Data is passed within the component only. It is Mutable ( can be modified). State can be used only with the state components/class component. State is both read and write.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item border mb-4">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button fw-semibold px-4 py-4 collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                    aria-controls="collapseThree">
                                    Where can we use useEffect without data loading?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body px-4">
                                    The useEffect Hook allows us to perform side effects in our components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. By using this Hook, we tell React that our component needs to do something after render. React will remember the function we passed, and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API. We can use useEffect for: validating input field, live filtering, trigger animation on new array value, update paragraph list on fetched API data update, etc.
                                </div>
                            </div>
                        </div>
                        

                    </div>
                </div>
        </div>
    );
};

export default QuestionAnswer;