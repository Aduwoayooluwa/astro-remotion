import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFormState } from '../utils/useFormState.astro';
import { useQuestions } from '../utils/useQuestions.astro';

interface CardProps {
    id: number,
    question: string,
    type: string
    hint: string
    name: string
}
interface QuestionProps {
   cards: CardProps[]
}



const GameCard = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    // const [questions, setQuestions] = useState<any>([])

    const { formData, handleInputChange, handleSubmit } = useFormState({})
    const questions = useQuestions();

  const nextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => 
      prevIndex < questions.length - 1 ? prevIndex + 1 : 0
    );
    };

  return (
    <div className="relative overflow-hidden">
          <AnimatePresence>
               <p className="text-white text-sm absolute bg-black p-3 glowing-rainbow-text-moving">Merry Christmas</p>
        <motion.div 
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}  
            exit={{ opacity: 0, x: -100 }} 
            transition={{ duration: 0.2 }}
            whileTap={{ scale: 0.8 }}
                
          className={`game-card w-full bg-black grid place-items-center rounded-xl shadow-md md:w-[600px] h-[400px] md:h-[400px]`}
              >
                 
            <form onSubmit={handleSubmit} className="w-full px-10">
               <p className='text-white font-medium text-[16px] md:text-lg my-3'>{questions[currentQuestionIndex]?.question}</p>
                      <input 
                          onChange={handleInputChange}
                          name={questions[currentQuestionIndex]?.name}
                            value={formData[questions[currentQuestionIndex]?.name] || ''}
                          required
                    placeholder={questions[currentQuestionIndex]?.hint}
                    className='border-2 w-full border-gray-300 bg-white rounded-md p-1 outline-none focus:border-[#FFC727] focus:ring focus:ring-[#fbe7af] focus:ring-opacity-50' />    
                <button  onClick={nextQuestion} className="bg-[#FFC727] my-5 w-full text-white hover:bg-[#cf9f1c] rounded-lg p-2">Next</button>      
            </form>
          
          
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default GameCard;
