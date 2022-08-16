import React, {useState} from 'react'

export default function UncontrolledOnboardingFlow({children, onFinish}) {
    const [step, setStep] = useState(0);
    const [onboardingData, setOnboardingData] = useState({});

    const currentChild = React.Children.toArray(children)[step];

    const nextStep = (stepData) => {
        const nextStep = step + 1;
        const updatedData = {...stepData, ...onboardingData};
        if(nextStep < React.Children.count(children)) {
            setOnboardingData(updatedData);
            setStep(nextStep);
        } else {
            onFinish(updatedData);
        }
    }

    if(React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, {nextStep})
    }

    return currentChild

//   return (
//     <>
//         {currentChild}


//         {/* <button onClick={() => {
//             if(step < React.Children.count(children) - 1) {
//                 setStep(step + 1);
//             } else {
//                 onFinish(onboardingData);
//             }
//         }}>
//             {step < React.Children.count(children) - 1 ? 'Next' : 'Finish'}
//         </button> */}
//     </>
//   )
}
