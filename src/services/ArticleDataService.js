import firebase from '../firebase';

const db = firebase.ref(
    "/articles"
) ;

class ArticleDataService {
    //ici on met une fonction qui récupère le nom des articles, les supprime, les modifie...
    getAll() {
        return db ;
    }
    create(article) {
        return db.push(article) ;
    }
    update(key, value) {
        return db.child(key).update(value);
    }
    delete(key) {
        return db.child(key).remove() ;
    }
    deleteAll() {
        return db.remove();
    }
}

export default new ArticleDataService();