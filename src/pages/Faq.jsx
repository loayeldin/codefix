import React, { useState } from "react";
const faqs = [
    {
      question: "What is a time complexity of binary search?",
      answer: "The time complexity of binary search is O(log n), where n is the number of elements in the list. Binary search works by repeatedly dividing the search interval in half."
    },
    {
      question: "What is the difference between stack and queue?",
      answer: "A stack is a data structure that follows the LIFO (Last In First Out) principle, meaning the last element added is the first to be removed. A queue follows the FIFO (First In First Out) principle, meaning the first element added is the first to be removed."
    },
    {
      question: "What is the difference between a linked list and an array?",
      answer: "Arrays are static data structures that store elements in contiguous memory locations, allowing for constant-time access to elements. Linked lists, on the other hand, consist of nodes where each node points to the next, allowing for dynamic memory allocation and easier insertions/deletions at the cost of slower access times."
    },
    {
      question: "What is recursion in programming?",
      answer: "Recursion is a programming technique where a function calls itself to solve smaller instances of the same problem. It is often used to solve problems that can be divided into smaller, similar subproblems, such as calculating factorials or traversing tree structures."
    },
    {
      question: "How do you reverse a string in JavaScript?",
      answer: "You can reverse a string in JavaScript using the following approach: <code>let reversedString = str.split('').reverse().join('');</code>. This method splits the string into an array of characters, reverses the array, and joins it back into a string."
    },
    {
      question: "What is the difference between a for loop and a while loop?",
      answer: "A for loop is used when the number of iterations is known in advance, while a while loop is used when the number of iterations is not known and depends on a condition that is evaluated before each iteration."
    },
    {
      question: "What is the purpose of a constructor in JavaScript?",
      answer: "A constructor in JavaScript is a special function used to create and initialize an object. When called with the `new` keyword, the constructor creates a new object and sets the values of its properties."
    },
    {
      question: "What is a closure in JavaScript?",
      answer: "A closure is a function that retains access to its lexical scope, even when the function is executed outside of that scope. Closures are useful for data encapsulation and function factories."
    },
    {
      question: "What is the purpose of the 'this' keyword in JavaScript?",
      answer: "'This' refers to the context in which a function is called. In an object method, 'this' refers to the object itself. In a regular function, it refers to the global object (in non-strict mode) or undefined (in strict mode)."
    },
    {
      question: "What is event delegation in JavaScript?",
      answer: "Event delegation is a technique where an event listener is attached to a parent element rather than individual child elements. This allows for handling events on dynamically added elements and improving performance."
    }
];
  
function Faq() {
    const [searchQuery, setSearchQuery] = useState("")
    const filteredFaqs = faqs.filter((faq=> {
        if(searchQuery.length>0){
            return faq.question.toLowerCase().includes(searchQuery.toLowerCase())
        }
        return faq
    }))
  return (
    <section className="lg:container md:mx-auto min-h -[100vh] py-24">
      <h2 className="capitalize text-center text-lg lg:text-3xl text-whiteText tracking-wider">
        Frequently asked questions
      </h2>
      <label className="input input-bordered rounded-lg input-secondary  flex items-center gap-2 max-w-lg mx-auto  my-10">
        <input type="text" className="grow" placeholder="Search FAQs..." value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

   


        {
            filteredFaqs.map((faq,index)=>(
                <div key={index} className="collapse collapse-arrow  max-w-5xl mx-auto mb-5 bg-[#101828]  border-s-4 border-e-4 border-mainColor ">
                <input type="checkbox" name="my-accordion" id={index}  className="peer"/>
                <div className="collapse-title text-xl font-medium text-whiteText">
                    {faq.question}
                </div>
                <div className="collapse-content leading-7">
                  <p>
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))
        }




      
    </section>
  );
}

export default React.memo(Faq);
