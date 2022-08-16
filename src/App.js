import React, {useState, useEffect} from 'react'
import UncontrolledForm from "./controlledUncontrolledPattern/UncontrolledForm";
import ControlledForm from "./controlledUncontrolledPattern/ControlledForm";
import UncontrolledModal from "./controlledUncontrolledPattern/UncontrolledModal";
import ControlledModal from './controlledUncontrolledPattern/ControlledModal';
import UncontrolledOnboardingFlow from './controlledUncontrolledPattern/UncontrolledOnboardingFlow';
import ControlledOnboardingFlow from './controlledUncontrolledPattern/ControlledOnboardingFlow';

const StepOne = ({nextStep}) => {
    return(
        <>
            <h1>Step 1</h1>
            <button onClick={() => nextStep({name: 'john doe'})}>Next</button>
        </>
    )
};

const StepTwo = ({nextStep}) => (
    <>
        <h1>Step 2</h1>
        <button onClick={() => nextStep({age: 100})}>Next</button>
    </>
);

const StepThree = ({nextStep}) => (
    <>
        <h1>Step 3</h1>
        <p>Congratulations you qualify for our senior discount</p>
        <button onClick={() => nextStep({})}>Next</button>
    </> 
);

const StepFour = ({nextStep}) => (
    <>
        <h1>Step 4</h1>
        <button onClick={() => nextStep({hairColor: 'brown'})}>Next</button>
    </>
);


function App() {
    const [showModal, setShowModal] = useState(false);
    const [step, setStep] = useState(0);
    const [onboardingData, setOnboardingData] = useState({});

    const nextStep = (stepData) => {
        setOnboardingData({...stepData, ...onboardingData});
        setStep(step + 1);
    }

    useEffect(() =>{
        console.log(onboardingData)
    }, [onboardingData])

	return (
        <>
            <UncontrolledForm />
            <ControlledForm />
            <UncontrolledModal />
            <ControlledModal isOpen={showModal} onClose={() => setShowModal(false)}><h1>Hello World</h1></ControlledModal>
            <button onClick={() => setShowModal(!showModal)}>Open Controlled Modal</button>
            <br/>
            <h3>Uncontrolled onboarding flow</h3>
            <UncontrolledOnboardingFlow onFinish={data => {
                console.log(data);
                alert('onboarding complete')
            }}>
                <StepOne />
                <StepTwo />
                <StepThree />
                <StepFour />
            </UncontrolledOnboardingFlow>
            <br/>
            <h3>Controlled onboarding flow</h3>
            <ControlledOnboardingFlow step={step} nextStep={nextStep}  onFinish={(data) => {
                console.log(data);
                alert('onboarding complete')
            }}>
                <StepOne />
                <StepTwo />
                {onboardingData.age > 61 && <StepThree />}
                <StepFour />
            </ControlledOnboardingFlow>
        </>

	);
}

export default App;