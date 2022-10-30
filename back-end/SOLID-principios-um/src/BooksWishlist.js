"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BooksWishlist {
    constructor(book) {
        this.wishlist = [];
        this.wishlist.push(book);
    }
    addToWishlist(book) {
        this.wishlist.push(book);
    }
    showWishlist() {
        console.log(this.wishlist);
    }
}
const wishlist = new BooksWishlist({
    book: 'The Road',
    author: 'Cormac McCarthy',
    genre: 'Dystopia',
});
wishlist.addToWishlist({
    book: 'Misery',
    author: 'Stephen King',
    genre: 'Thriller',
});
wishlist.showWishlist();
exports.default = BooksWishlist;
