import React from 'react'

export default function ControlledOnboardingFlow({children, onFinish, step, nextStep}) {

    const onNextStep = (stepData) => {
        nextStep(stepData)
    }
    const currentChild = React.Children.toArray(children)[step];

    if(React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, {nextStep: onNextStep})
    }

    return currentChild
}
