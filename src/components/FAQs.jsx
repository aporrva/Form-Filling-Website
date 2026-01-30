import React, { useState } from 'react'
import HeadingOfPage from '../common/HeadingOfPage'
import { DropDownIcon } from './Icons'
import FooterPage from '../common/FooterPage'



function FAQs() {
    return (
        <div className='flex flex-col gap-5'>
            <HeadingOfPage heading="Frequently Asked Questions" about="Find answers to common questions about our form filling service" />
            <QuestionBox question="How does the form filling service work?" ans="Simply select your form type, provide the necessary details, upload required documents, and make payment. Our experts will then accurately fill your form and submit it to you within the promised timeframe." />
            <QuestionBox question="How does the form filling service work?" ans="Simply select your form type, provide the necessary details, upload required documents, and make payment. Our experts will then accurately fill your form and submit it to you within the promised timeframe." />
            <QuestionBox question="How does the form filling service work?" ans="Simply select your form type, provide the necessary details, upload required documents, and make payment. Our experts will then accurately fill your form and submit it to you within the promised timeframe." />
            <QuestionBox question="How does the form filling service work?" ans="Simply select your form type, provide the necessary details, upload required documents, and make payment. Our experts will then accurately fill your form and submit it to you within the promised timeframe." />
            <QuestionBox question="How does the form filling service work?" ans="Simply select your form type, provide the necessary details, upload required documents, and make payment. Our experts will then accurately fill your form and submit it to you within the promised timeframe." />
            <QuestionBox question="How does the form filling service work?" ans="Simply select your form type, provide the necessary details, upload required documents, and make payment. Our experts will then accurately fill your form and submit it to you within the promised timeframe." />
            <QuestionBox question="How does the form filling service work?" ans="Simply select your form type, provide the necessary details, upload required documents, and make payment. Our experts will then accurately fill your form and submit it to you within the promised timeframe." />
            <QuestionBox question="How does the form filling service work?" ans="Simply select your form type, provide the necessary details, upload required documents, and make payment. Our experts will then accurately fill your form and submit it to you within the promised timeframe." />
            <QuestionBox question="How does the form filling service work?" ans="Simply select your form type, provide the necessary details, upload required documents, and make payment. Our experts will then accurately fill your form and submit it to you within the promised timeframe." />
            <QuestionBox question="How does the form filling service work?" ans="Simply select your form type, provide the necessary details, upload required documents, and make payment. Our experts will then accurately fill your form and submit it to you within the promised timeframe." />
            <StillHaveQuestionsPage heading1="Still have questions?" heading2="Can't find the answer you're looking for? Our support team is here to help" button="Contact Page" />
            <FooterPage />
        </div>
    )
}

function StillHaveQuestionsPage({ heading1, heading2, button }) {
    return (
        <div className='flex flex-col items-center justify-center p-16 gap-5'>
            <div className='flex flex-col gap-2 items-center justify-center'>
                <h1 className='text-[25px] font-semibold'>{heading1}</h1>
                <h2 className='text-[15px]'>{heading2}</h2>
            </div>
            <button className='bg-sky-900 text-white p-2 rounded-md'>{button}</button>
        </div>
    )
}



function QuestionBox({ question, ans }) {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className={`flex flex-col border-1 border-gray-300 p-2 justify-center rounded-lg ${isOpen && "gap-1"}  w-[1000px] mx-auto`}>
            <div onClick={() => { setOpen((prev) => !prev) }} className='flex items-center justify-between'>
                <div className='font-semibold '>
                    {question}
                </div>
                <DropDownIcon className={`   ${isOpen && " rotate-180"} ${!isOpen && "-rotate-180"}`} />
            </div>
            <div className={`${!isOpen && "hidden"} h-full`}>{ans}</div>
        </div>
    )
}

export default FAQs