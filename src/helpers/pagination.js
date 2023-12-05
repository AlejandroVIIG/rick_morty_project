const paginationLogic = (currentPage, residents) => {

    // cantidad de residentes por pagina
    const RESIDENTS_PER_PAGE = 20;

    // cantidad de paginas
    const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

    // residentes que se mostraran en la pagina actual
    const sliceEnd = currentPage * RESIDENTS_PER_PAGE;
    const sliceStart = sliceEnd - RESIDENTS_PER_PAGE;

    let residentsInCurrentPage = residents.slice(sliceStart, sliceEnd);

    // Generacion de arreglo con los numeros de las paginas que se van a mostrar
    const pages = [];
    for(let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return {pages, residentsInCurrentPage};
}

export { paginationLogic };