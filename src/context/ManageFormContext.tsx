export const useManageForm = () => {
    const formValues = sessionStorage.getItem('userResponses')!;

    const formDetails = JSON.parse(formValues);


    return { formDetails }
}

