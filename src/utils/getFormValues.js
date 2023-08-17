export const getFormValues = (formId) => {
    const data = {}
    const form = document.getElementById(formId)

    const formData = new FormData(form)

    for (let [key, value] of formData) {
        Object.assign(data, { [key]: value });
    }

    return data
}