export function setService(id: string) {
    const select = document.getElementById('service-type') as HTMLSelectElement
    select.value = id
}