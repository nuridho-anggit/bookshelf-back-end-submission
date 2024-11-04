/* eslint-disable indent */
const {
    addBookHandler,
    getAllBooksHandler,
    getBookByIdHandler,
    editBookByIdHandler,
    deleteBookByIdHandler,
 } = require('./handler');

const routes = [
    // menyimpan buku
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },
    // menampilkan semua buku
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    // menampilkan sebuah buku berdasarkan ID
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBookByIdHandler,
    },
    // Mengedit Buku
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBookByIdHandler,
    },
    // Menghapus Buku
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBookByIdHandler,
    },
];

module.exports = routes;