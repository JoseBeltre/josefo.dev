export function setService(id: string) {
    const select = document.getElementById('service_type') as HTMLSelectElement
    select.value = id
}